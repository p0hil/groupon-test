import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deal, Location } from '../db/models/deal.model';
import { sampleDeals } from './data/deals';
import { omit } from 'lodash';
import { LocationDto } from '../deals/dto/deal.dto';

@Injectable()
export class SeederService implements OnApplicationBootstrap {
    private readonly logger = new Logger(SeederService.name);

    constructor(
        @InjectModel(Deal.name) private deals: Model<Deal>,
    ) {}

    private transformLocationDto(dto: LocationDto): Location {
        return {
            id: dto.id || '',
            ...omit(dto, 'lat', 'lng'),
            location: {
                type: 'Point',
                coordinates: [dto.lng, dto.lat],
            },
        };
    }

    async onApplicationBootstrap() {
        const dealsCount = await this.deals.countDocuments();
        if (dealsCount > 0) {
            this.logger.log('Seed data already exists. Skipping seeding...');
            return;
        }

        const pool: Deal[] = [];
        for (const item of sampleDeals) {
            const doc: Deal = {
                ...omit(item, 'location'),
                location: this.transformLocationDto(item.location),
                redemptionLocations: item.redemptionLocations.map(
                    (location) => this.transformLocationDto(location),
                )
            };

            pool.push(doc);
        }

        await this.deals.insertMany(pool);

        this.logger.log('Seed data inserted.');
    }
}
