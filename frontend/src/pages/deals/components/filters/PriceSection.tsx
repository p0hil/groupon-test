import FilterSection from './FilterSection.tsx';

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import React, { useEffect, useState } from 'react';

type Props = {
    min?: number,
    max?: number,
    value?: number,
    onChange: (value?: number) => void,
}

const PriceSection = (props: Props) => {

    const defValue = 50;
    const [value, setValue] = useState<[number, number]>([0, props.value ?? defValue]);

    useEffect(() => {
        setValue([0, props.value ?? 50]);
    }, [props.value]);

    return (
        <>
            <FilterSection title={ 'Max Price' }>
                <div>
                    <div className="mb-2">
                        <RangeSlider
                            onThumbDragEnd={() => props.onChange(value[1])}
                            min={props.min ?? 0} max={props.max ?? 100}
                            thumbsDisabled={[true, false]}
                            onInput={setValue}
                            value={ value }
                        />
                    </div>
                    <div className="flex items-center gap-4 text-base font-semibold">
                        <div className="border px-3 py-2 rounded-lg flex border-input h-11 w-full">
                            <span>$</span>
                            <input className="w-full outline-none"
                                   onBlur={ () => props.onChange(value[1]) }
                                   onKeyUp={ (e) => e.key === 'Enter' && props.onChange(value[1]) }
                                   type="number" value={ value[1] }
                                   onChange={ (e) => setValue([0, parseInt(e.target.value) ?? defValue]) } />
                        </div>
                    </div>
                </div>
            </FilterSection>
        </>
    );
};

export default React.memo(PriceSection);
