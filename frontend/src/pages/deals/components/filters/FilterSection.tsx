import { type PropsWithChildren, useState } from 'react';
import classNames from 'classnames';

type Props = PropsWithChildren & {
    title: string,
}


const FilterSection = (props: Props) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(true);

    return (
        <>
            <div className="flex flex-col gap-2 overflow-hidden pt-4">
                <div className="flex items-center gap-2"><span className="text-h5 hover:cursor-pointer">{ props.title }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         onClick={ () => setIsExpanded(!isExpanded) }
                         className={classNames('size-6 stroke-1 transition-all hover:cursor-pointer ml-auto', { 'rotate-180': isExpanded })} role="img">
                    <path stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10"
                              d="m2.5 7.5 10 10 10-10"></path>
                    </svg>
                </div>
                <div className={classNames('h-auto interpolate-size-keywords duration-500 ease-in-out motion-safe:transition-height', {'hidden': !isExpanded})}>
                    { props.children }
                </div>
            </div>
        </>
    );
};

export default FilterSection;
