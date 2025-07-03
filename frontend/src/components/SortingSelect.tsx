import { Popover } from 'react-tiny-popover';
import React, { useMemo, useState } from 'react';
import classNames from 'classnames';

type SelectRowProps = {
    label: string,
    value: string,
    isSelected: boolean,
    onClick: () => void,
}

const SelectRow = (props: SelectRowProps) => {
    return (
        <label className="flex w-fit items-center">
            <button type="button" role="radio" aria-checked="true" value="price:asc"
                    onClick={ props.onClick }
                    className={classNames('peer relative aspect-square shrink-0 rounded-full border border-secondary-subtle bg-white size-4 [--aspect-ratio:1/1] hover:border-info radix-state-checked:border-info radix-state-checked:bg-blue', { 'radix-state-checked': props.isSelected })}
            >
                {
                    props.isSelected &&
                    <span className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full bg-white size-1.5"></div>
                    </span>
                }
            </button>
            <span className="ml-2 flex w-full items-center gap-2 text-sm">{ props.label }</span>
        </label>
    );
};

interface SelectOption {
    label: string,
    value: string,
}

interface SelectOptionsProps {
    options: SelectOption[],
    selected: string,
    setSelected: (value: string) => void,
}

const SelectOptions = (props: SelectOptionsProps) => {
    return (
        <>
            <div className="h-auto max-h-full overflow-auto rounded-2xl bg-white p-6 shadow-xl-black w-[200px] min-w-[200px]">
                <div role="radiogroup" aria-required="false" dir="ltr" style={ { outline: 'none' } }>
                    <div className="space-y-3">
                        { props.options.map(option => (
                            <SelectRow label={option.label} value={option.value}
                                       key={option.value}
                                       isSelected={option.value === props.selected}
                                       onClick={ () => props.setSelected(option.value) } />
                        )) }
                    </div>
                </div>
            </div>
        </>
    );
};


interface SortingSelectButtonProps {
    value: string,
    onChange: (value: string) => void,
}

export const SortingSelectButton = React.memo((props: SortingSelectButtonProps) => {
    console.info('Render');
    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

    const options: SelectOption[] = useMemo(() => {
        return [
            { value: 'rating-desc', label: 'Rating' },
            { value: 'price-desc', label: 'Price: High to Low' },
            { value: 'price-asc', label: 'Price: Low to High' },
            { value: 'relevance-desc', label: 'Relevance' },
        ]
    }, []);

    return (
        <Popover
            isOpen={ isPopoverOpen }
            positions={ ['bottom'] }
            content={ <SelectOptions options={ options } selected={props.value} setSelected={ props.onChange } /> }
        >
            <div className="ml-auto flex gap-2">
                <div className="hidden lg:block">
                    <button
                        onClick={ () => setIsPopoverOpen(v => !v) }
                        className="relative block rounded-full transition-states disabled:pointer-events-none disabled:text-opacity-60 data-[disabled=true]:pointer-events-none data-[disabled=true]:text-opacity-60 border-0 disabled:border-transparent data-[disabled=true]:border-transparent text-body hover:text-body-subtle text-sm font-bold px-6 py-2.5 pl-4 pr-3 bg-secondary hover:bg-secondary-hover"
                        type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«r2i»">
                        <div className="flex h-full w-full items-center justify-center">
                            <div className="flex ml-1 mr-1.5 size-4.5">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_799_10541)">
                                        <path d="M3 6.33325H13.6667M1 2.33325H15.6667M5 10.3333H11.6667M7 14.3333H9.66667"
                                              stroke="currentColor" stroke-miterlimit="10" stroke-linecap="square"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_799_10541">
                                            <rect width="16" height="16" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="grow block text-center overflow-hidden text-ellipsis text-xs select-none">Sort</div>
                            <div className="flex ml-1.5 mr-1 size-4.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="" role="img">
                                    <path fill="currentColor"
                                          d="M11.222 15.635 6.258 9.773C5.672 9.083 6.148 8 7.038 8h9.926c.2 0 .394.059.561.17.168.111.3.27.383.457a1.102 1.102 0 0 1-.165 1.147l-4.963 5.86a1.039 1.039 0 0 1-.351.27 1.006 1.006 0 0 1-1.207-.27v.001Z"></path>
                                </svg>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </Popover>
    );
});
