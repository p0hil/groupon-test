import type { FilterCriteria } from '../../../../api/dto/deals.ts';
import PriceSection from './PriceSection.tsx';
import RatingSection from './RatingSection.tsx';
import React from 'react';

type Props = {
    filter: FilterCriteria,
    onChange: (filter: FilterCriteria) => void,
}

const Filters = (props: Props) => {
    const { filter, onChange } = props;

    // Here nice to fetch some metadata for filters, like min/max price, categories, counters, etc.
    // But it is far away from a 4-hour test case

    return <>
        <aside className="hidden h-fit shrink-0 overflow-x-hidden transition-all duration-300 lg:block mr-xl w-72 opacity-100 mr-8">
            <div className="flex w-72 flex-col gap-4 rounded-sm border border-separator px-4 py-6"><span
                className="text-h3">Filters</span>
                <div className="flex flex-col gap-2">
                    <PriceSection min={0} max={120}
                                  value={filter.maxPrice}
                                  onChange={(value) => onChange({ ...filter, maxPrice: value })} />
                    <hr className="mt-2 border-separator" />
                    <RatingSection value={filter.merchantRating}
                                  onChange={(value) => onChange({ ...filter, merchantRating: value })} />
                </div>
            </div>
        </aside>

    </>;
};

export default React.memo(Filters);
