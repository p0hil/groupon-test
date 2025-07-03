import type { Deal } from '../../../api/dto/deals.ts';
import DealCard from './DealCard.tsx';
import React from 'react';

type Props = {
    items: Deal[];
}

const Feed = (props: Props) => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-x-5 gap-y-10 last:mb-0 md:grid-cols-2 lg:grid-cols-3">
                { props.items.map((item) => (
                    <DealCard data={item} key={item.id} />
                )) }
            </div>
        </div>
    );
};

export default React.memo(Feed);
