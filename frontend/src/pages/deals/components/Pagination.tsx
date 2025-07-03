type Props = {
    hasMore: boolean;
    onLoadMore: () => void;
}

const Pagination = (props: Props) => {
    if (!props.hasMore) {
        return (
            <div className="flex flex-col gap-y-1 justify-center items-center my-4"><h3 className="text-h3">That’s All for Now</h3>
                <p className="font-normal text-h6">Check back later for updated deals.</p>
            </div>
        )
    }

    return (
        <button
            onClick={ props.onLoadMore }
            className="relative block rounded-full transition-states disabled:pointer-events-none disabled:text-opacity-60 data-[disabled=true]:pointer-events-none data-[disabled=true]:text-opacity-60 border border-solid bg-transparent active:outline-none active:ring disabled:border-opacity-60 data-[disabled=true]:border-opacity-60 text-body hover:text-body-outlined-hover border-secondary hover:bg-secondary hover:border-secondary active:ring-secondary-subtle text-base font-bold px-[calc(2rem_-_1px)] py-[calc(0.875rem)] mx-auto mt-l w-full md:w-auto md:min-w-[400px]"
            type="button">
            <div className="flex h-full w-full items-center justify-center">
                <div className="grow block text-center overflow-hidden text-ellipsis text-xs select-none">Load more</div>
            </div>
        </button>
    );
};

export default Pagination;
