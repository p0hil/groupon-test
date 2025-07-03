import FilterSection from './FilterSection.tsx';
import React, { useState } from 'react';

type Props = {
    value?: number,
    onChange: (value?: number) => void,
}

const IconStar = ({ empty }: { empty: boolean }) => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-yellow-400 size-4">
            <g>
                <path
                    d="M6 0.769043L7.7 4.21304L11.5 4.76504L8.75 7.44504L9.399 11.231L6 9.44404L2.601 11.231L3.25 7.44504L0.5 4.76504L4.3 4.21304L6 0.769043Z"
                    fill={ !empty ? '#FFF5E9' : 'currentColor' } stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round"></path>
            </g>
            <defs>
                <clipPath>
                    <rect fill="white"></rect>
                </clipPath>
            </defs>
        </svg>
    );
};

type RatingRowProps = {
    value: number,
    isChecked: boolean,
    onClick: () => void,
}

const RatingRow = ({ value, onClick, isChecked }: RatingRowProps) => {

    const [stars] = useState<number[]>(new Array(5).fill(0));

    return (
        <label htmlFor={ 'v' + value } className="flex items-center">
            <button type="button" role="radio" aria-checked="false" value={ value } id={ 'v' + value }
                    onClick={ onClick }
                    className="peer relative aspect-square shrink-0 rounded-full border border-[#9EA3AE] text-white size-5 [--aspect-ratio:1/1] hover:border-blue radix-state-checked:border-blue"
            >
                {
                    isChecked && <span data-state="checked" className="absolute inset-0 flex items-center justify-center"><div
                        className="rounded-full bg-blue size-3"></div></span>
                }
            </button>
            <span className="ml-2 flex w-full items-center gap-2 text-sm font-medium">
                <span className="flex w-full flex-row items-center">
                    <span className="flex w-full flex-row items-center">
                        <div className="flex items-center gap-x-0.5">
                            { stars.map((_, i) => <IconStar key={ i } empty={ i < value } />) }
                        </div>
                        <span className="ml-2">{ value } &amp; Up</span></span>
                </span>
            </span>
        </label>
    );
};


const RatingSection = (props: Props) => {

    const [stars] = useState<number[]>([4, 3, 2, 1]);

    return (
        <>
            <FilterSection title={ 'Rating' }>
                <div className="mt-3 space-y-3">
                    { stars.map((v) => (
                        <RatingRow key={ v } value={ v } onClick={ () => props.onChange(v) } isChecked={ props.value === v } />
                    ))
                    }
                </div>
            </FilterSection>
        </>
    );
};

export default React.memo(RatingSection);
