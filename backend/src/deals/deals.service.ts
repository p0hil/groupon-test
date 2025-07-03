import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Aggregate, FilterQuery, Model, SortOrder } from 'mongoose';
import { Deal } from '../db/models/deal.model';
import { FilterCriteriaDto } from './dto/deal.dto';

type DealKeys = Partial<keyof Deal>;


// These weights are just pulled out of air
// If we want to define truly meaningful ones, we’ll need to experiment with them
const scoreWeights = {
    merchantRating: 10,
    discountPrice: 30,
    distance: 20,
}

@Injectable()
export class DealsService {
    constructor(
        @InjectModel(Deal.name)
        private readonly deal: Model<Deal>,
    ) {}

    private reflectCriteria(filter: FilterCriteriaDto): FilterQuery<Deal> {
        const criteria: FilterQuery<Deal> = {};

        if (filter.maxPrice) {
            criteria.discountPrice = { $lte: filter.maxPrice };
        }

        if (filter.minDiscount) {
            criteria.discountPercentage = { $gte: filter.minDiscount };
        }

        if (filter.category) {
            criteria.category = filter.category;
        }

        // Rest of the filters...

        return criteria;
    }

    private reflectSorting(
        filter: FilterCriteriaDto,
    ): Partial<Record<DealKeys, SortOrder>> {
        const direction: SortOrder = filter.sortOrder === 'asc' ? 1 : -1;
        switch (filter.sortBy) {
            case 'discount':
                return { discountPercentage: direction };
            case 'price':
                return { discountPrice: direction };
            case 'relevance':
                return { score: direction };
            case 'rating':
            default:
                return { merchantRating: direction };
        }
    }

    private addScoreField(query: Aggregate<Deal[]>, filter: FilterCriteriaDto): Aggregate<Deal[]> {
        // Fixed max price, I know that is bad and can break normalization of the feature
        // We should take max price by selected filters from db before the query,
        // But this is ok for the study case
        const maxPrice = 200;
        const nRadius = 50000;

        const priceNormalized = {
            $multiply: [
                {
                    $max: [
                        { $subtract: [1, { $divide: ['$discountPrice', maxPrice] }] },
                        0, // negative values insurance
                    ],
                },
                scoreWeights.discountPrice,
            ],
        };

        const distanceNormalized = filter.location ? {
            $multiply: [
                {
                    $max: [
                        { $subtract: [1, { $divide: ['$distance', nRadius] }] },
                        0,
                    ],
                },
                scoreWeights.distance,
            ],
        } : 0;

        return query.addFields({
            score: {
                $add: [
                    priceNormalized,
                    distanceNormalized,
                    {
                        $multiply: [
                            { $divide: ['$merchantRating', 5] },
                            scoreWeights.merchantRating,
                        ],
                    },
                ],
            },
        });
    }

    getFeed(
        filter: FilterCriteriaDto,
        offset: number,
        limit: number,
    ): Promise<Deal[]> {
        const criteria = this.reflectCriteria(filter);
        const sort = this.reflectSorting(filter);

        let query = this.deal.aggregate<Deal>();

        if (filter.location) {
            query = query.near({
                near: {
                    type: 'Point',
                    coordinates: [filter.location.lng, filter.location.lat],
                },
                distanceField: 'distance',
                ...(filter.radius ? { maxDistance: filter.radius * 1609.34 } : {}) // miles -> meters
            });
        }

        query = query.match(criteria);
        if (filter.sortBy === 'relevance') {
            query = this.addScoreField(query, filter);
        }

        query = query
            .sort(sort)
            .skip(offset)
            .limit(limit);

        return query.exec();
    }
}
