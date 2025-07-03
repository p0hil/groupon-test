import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useApi } from '../../hooks/useApi.ts';
import { useQuery } from '@tanstack/react-query';
import Feed from './components/Feed.tsx';
import { Deal, type FilterCriteria, type SortField, type SortOrder } from '../../api/dto/deals.ts';
import Pagination from './components/Pagination.tsx';
import { isEqual, isUndefined, omitBy } from 'lodash';
import Filters from './components/filters/Filters.tsx';
import { Header } from '../../layout/Header.tsx';
import { Footer } from '../../layout/Footer.tsx';
import Breadcrumbs from '../../components/Breadcrumbs.tsx';
import FetchError from '../../components/FetchError.tsx';
import { useSearchParams } from 'react-router-dom';

interface FilterUrlParams {
    price?: string;
    rating?: string;
    sort?: string;
}

function serializeFilter(filter: FilterCriteria): FilterUrlParams {
    return omitBy({
        price: filter.maxPrice && !isNaN(filter.maxPrice) ? filter.maxPrice.toString() : undefined,
        rating: filter.merchantRating ? filter.merchantRating.toString() : undefined,
        sort: filter.sortBy + '-' + filter.sortOrder,
        // the rest of the filter...
    }, isUndefined);
}

function unserializeFilter(params: URLSearchParams): Partial<FilterCriteria> {
    const sort= (params.get('sort') || 'rating-desc').split('-');
    return {
        maxPrice: parseInt(params.get('price') || '', 10) || undefined,
        merchantRating: parseInt(params.get('rating') || '', 10) || undefined,
        sortBy: sort[0] as SortField,
        sortOrder: sort[1] as SortOrder,
        // the rest of the filter...
    };
}


// Category/Subcategory I suppose should be taken from url or props
// But unfortunately, I have no enough time to implement the working categories/subcategories menu
// The same for sorting dropdown and location picker

const DealsPage: React.FC = () => {

    const { deals } = useApi();
    const [params, setSearchParams] = useSearchParams();
    const limit = 6;

    const [filter, setFilter] = useState<FilterCriteria>(unserializeFilter(params));
    const prevFilter = useRef<FilterCriteria>(filter);

    const [offset, setOffset] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [allData, setAllData] = useState<Deal[]>([]);

    // Currently, data is fetched whenever a filter is changed.
    // However, client-side filtering, sorting, and pagination can be implemented depending on the data size.
    // For instance, if we fetch some metadata (like counters, price ranges, etc.),
    // we can apply client-side filtering for datasets with less than N (30–50) items.
    // This would result in a blazing-fast user experience.
    // Of course, this approach comes with a tradeoff: maintaining the same logic both on the backend and frontend.
    // However, this level of optimization is out of scope for a 4-hour test case.
    const { data, error, isLoading } = useQuery({
        queryKey: ['deals', filter, offset],
        queryFn: async () => {
            const result = await deals.getFeed(filter, offset, limit + 1);
            const hasMoreData = result.length > limit;
            setHasMore(hasMoreData);

            return hasMoreData ? result.slice(0, limit) : result;
        },
        refetchInterval: false,
        refetchOnWindowFocus: false,
        staleTime: 120 * 1000,
    });

    useEffect(() => {
        // Some error handling, retry in a few seconds, mb some notification, etc.
        // ...
        console.log(error);
    }, [error]);

    useEffect(() => {
        if (!isEqual(prevFilter.current, filter)) {
            setAllData([]);
            setOffset(0);
            prevFilter.current = filter;
            setSearchParams(serializeFilter(filter) as Record<string, string>);
        }
    }, [filter, setSearchParams]);

    const mergeData = useCallback((fetched?: Deal[]) => {
        if (!fetched) {
            return;
        }

        setAllData(v => {
            return [...v, ...fetched.filter(i => !v.find(j => j.id === i.id))];
        })
    }, [])

    useEffect(() => {
       mergeData(data);
    }, [data, mergeData]);

    return (
        <>
            <Header />
            <Breadcrumbs path={ [] } header="Deals" />
            <div className="mx-auto w-full max-w-[1200px]">
                <div className="flex">
                    <Filters filter={ filter } onChange={ setFilter } />

                    <div className="flex min-w-0 grow flex-col">
                        <div className="flex flex-col gap-8">
                            {
                                allData.length > 0 && <Feed items={ allData } />
                            }
                            {
                                isLoading && <div className="flex flex-col gap-y-1 justify-center items-center my-4">Loading...</div>
                            }
                            {
                                error && <FetchError />
                            }
                            <Pagination hasMore={ hasMore } onLoadMore={ () => setOffset(offset + limit) } />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DealsPage;
