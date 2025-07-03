import type { Deal } from '../../../api/dto/deals.ts';
import React from 'react';

type Props = {
    data: Deal;
}


const DealCard = (props: Props) => {
    const { data } = props;

    return (
        <div>
        <article><a className="group content-visibility-auto contain-intrinsic-size-[17.5rem]"
                    href=""
                    onClick={ (e) => e.preventDefault()}
                    style={ { WebkitTapHighlightColor: 'transparent' } }>
        <div className="relative mb-3 aspect-video overflow-hidden rounded-xs bg-secondary [--aspect-ratio:16/9]">
                    <div className="relative h-full w-full overflow-hidden">
                        <div className="flex h-full w-full transition-transform duration-300"
                             style={ { transform: 'translateX(0%)' } }>
                            <img
                                alt="Custom Photo Books from Shutterfly" fetchPriority="high" decoding="async"
                                className="h-full w-full object-cover absolute inset-0"
                                src={ data.imageUrl }
                                style={ { color: 'transparent', borderRadius: '0.5rem' } }
                            />
                        </div>
                    </div>
                    <div className="absolute right-2 top-2">
                        <button
                            className="flex aspect-square items-center justify-center rounded-full bg-white [--aspect-ratio:1/1] w-9 transition-colors duration-300"
                            title="Add to wishlist" aria-label="Wishlist">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"
                                 viewBox="0 0 24 25" className="md:hover:fill-red md:hover:text-red h-5 w-5">
                                <path stroke="currentColor"
                                      d="m11.58 4.3.42.657.42-.656c.22-.343.474-.668.765-.97a5.89 5.89 0 0 1 8.538 0c2.37 2.452 2.37 6.434 0 8.886L12 22.28 2.277 12.217c-2.37-2.452-2.37-6.434 0-8.886a5.89 5.89 0 0 1 8.538 0c.29.3.544.627.764.97Z"></path>
                            </svg>
                        </button>
                    </div>
                    {
                        data.featuredDeal &&
                        <div
                            className="flex p-1 items-center justify-center gap-4xs whitespace-nowrap rounded-xxs px-xxs py-4xs !text-xxs font-bold leading-none border border-specialDark-100 absolute left-2 top-2 bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" fill="none"
                                 viewBox="0 0 14 15" className="text-special-pink size-3.5">
                                <path fill="currentColor"
                                      d="M13.417 3.466H12.02c.14-.278.219-.583.23-.894A2.1 2.1 0 0 0 10.11.549 3.624 3.624 0 0 0 7 2.601 3.607 3.607 0 0 0 3.908.549h-.066A2.097 2.097 0 0 0 1.75 2.572v.038c.011.298.087.59.221.856H.583A.583.583 0 0 0 0 4.049V5.8a.583.583 0 0 0 .583.584h12.834A.583.583 0 0 0 14 5.799V4.05a.583.583 0 0 0-.583-.583Zm-3.288-1.75a.933.933 0 0 1 .954.856.926.926 0 0 1-.918.894H7.862c.363-.734 1.085-1.75 2.267-1.75Zm-7.212.875a.933.933 0 0 1 .941-.875c1.207.005 1.914 1.01 2.281 1.75H3.864a.943.943 0 0 1-.947-.875Zm5.25 4.958v7h2.916a1.75 1.75 0 0 0 1.75-1.75V7.55H8.167Zm-7 0h4.666v7H2.917a1.75 1.75 0 0 1-1.75-1.75V7.55Z"></path>
                            </svg>
                            <span className="ml-1">Popular Gift</span>
                        </div>
                    }
                </div>
                <h2 title={ data.title }
                    className="line-clamp-2 group-hover:underline text-dealCardTitle">{ data.title }</h2>
                <div className="flex flex-row gap-x-2 py-1">
                    <div className="flex w-full flex-row justify-between gap-4xs text-muted"><span
                        className="truncate break-words text-sm text-body">{ data.description }</span>
                    </div>
                </div>
                <div className="flex flex-col gap-0.5">
                    <div className="flex flex-nowrap items-center justify-between gap-x-2 overflow-hidden">
                        <div
                            className="relative overflow-hidden before:pointer-events-none after:pointer-events-none before:opacity-1 after:opacity-1">
                            <div
                                className="overflow-auto hide-scrollbars hide-scrollbar flex flex-wrap items-center gap-x-1.5 justify-start">
                                <div
                                    className="relative items-center whitespace-nowrap flex notranslate after:absolute after:border-b after:border-inherit after:w-full after:mb-0.5 text-muted">
                                <span className="text-price font-normal">$</span>
                                    <span className="text-price font-normal">{data.originalPrice}</span>
                                </div>
                                <div className="relative items-center whitespace-nowrap flex notranslate text-green">
                                <span className="font-extrabold text-price">$</span>
                                    <span className="font-extrabold text-price">{ data.discountPrice }</span></div>
                                <div
                                    className="relative flex items-center justify-center gap-4xs rounded-xxs px-xxs py-4xs leading-none gap-y-0.5 whitespace-nowrap font-bold tracking-wide !px-1 !py-0.5 !text-xxs bg-green-50 text-primary">
                                    -{ data.discountPercentage }%
                                </div>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-1 text-xs font-bold shrink-0">
                            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" width="14"
                                 height="14" className="mb-0.5 text-yellow-400">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M6.36376 1.00501C6.22877 0.675007 5.76752 0.675007 5.63252 1.00501L4.41752 3.96001C4.36127 4.09876 4.23002 4.19251 4.08377 4.20376L0.926266 4.45876C0.573766 4.48876 0.435016 4.93126 0.701266 5.16001L3.10502 7.24126C3.21752 7.33876 3.26627 7.49251 3.23252 7.63876L2.49752 10.7513C2.41502 11.0963 2.79002 11.37 3.09002 11.1863L5.79377 9.51751C5.92127 9.43876 6.07876 9.43876 6.20626 9.51751L8.91002 11.1863C9.21002 11.37 9.58126 11.1 9.50251 10.7513L8.76751 7.63876C8.73376 7.49251 8.78251 7.33876 8.89501 7.24126L11.2988 5.16001C11.565 4.92751 11.4225 4.48501 11.0738 4.45876L7.91627 4.20376C7.77002 4.19251 7.63876 4.09876 7.58251 3.96001L6.36376 1.00501Z"
                                      fill="currentColor"></path>
                            </svg>
                            <div className="top-px whitespace-nowrap leading-none">
                                {data.averageRating}
                                <span className="ml-0.5 whitespace-nowrap text-muted">({ data.reviewCount })</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a></article>
        </div>
    )
}

export default React.memo(DealCard);
