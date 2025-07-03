type Props = {
    path: { title: string, href: string }[],
    header: string,
}

const Breadcrumbs = (props: Props) => {
    return (
        <>
            <div className="px-3 md:px-5 relative z-10">
                <div className="mx-auto w-full max-w-[1200px] flex flex-col">
                    <nav aria-label="Breadcrumb" className="-mx-3 py-2 md:-mx-5">
                    <ol className="hide-scrollbar flex items-center gap-2 overflow-y-auto whitespace-nowrap px-3 md:px-5">
                            <li className="group inline-flex items-center gap-2"><a
                                className="text-xs font-semibold underline decoration-solid decoration-from-font transition-colors text-muted hover:text-body active:text-body"
                                href="/">Home</a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     className="size-2.5 stroke-2 group-last-of-type:hidden text-neutral-400" role="img"
                                     aria-hidden="true">
                                    <path stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10"
                                          d="m8 2 10 10L8 22"></path>
                                </svg>
                            </li>
                            <li className="group inline-flex items-center gap-2"><a
                                className="text-xs font-semibold underline decoration-solid decoration-from-font transition-colors text-muted hover:text-body active:text-body"
                                >Deals</a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     className="size-2.5 stroke-2 group-last-of-type:hidden text-neutral-400" role="img"
                                     aria-hidden="true">
                                    <path stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10"
                                          d="m8 2 10 10L8 22"></path>
                                </svg>
                            </li>
                        </ol>
                    </nav>
                    <div className="grid grow place-content-center gap-y-2 pb-6"
                         style={ { gridTemplateColumns: 'min-content 1fr 30%' } }><a
                        className="col-start-1 mr-2 p-1"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6" role="img"
                        >
                        <path fill="currentColor"
                                  d="m2.5 12.5-.354-.354-.353.354.353.354.354-.354Zm6.646 7.354.354.353.707-.707-.353-.354-.708.708Zm.708-14 .353-.354-.707-.707-.354.353.708.708ZM22.5 12h-20v1h20v-1ZM9.854 19.146l-7-7-.708.708 7 7 .708-.708Zm-7-6.292 7-7-.708-.708-7 7 .708.708Z"></path>
                        </svg>
                    </a>
                        <div className="col-start-2 flex flex-wrap gap-1.5 text-h2 md:gap-2 md:text-h1 col-span-2">
                            <div>
                                <h1 className="block overflow-hidden">Deals</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrumbs;
