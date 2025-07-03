import React from 'react';

export const Header: React.FC = () => (
    <div className="absolute inset-x-0 top-0 z-30 md:top-8 md:static">
        <header className="z-30 bg-white sticky">
        <div>
                <div className="pb-0 bg-white p-xs md:relative md:px-0 md:shadow pt-5">
                    <div
                        className="mx-auto max-w-[1232px] md:px-3 lg:px-4 flex justify-between items-center px-0 pb-0 pr-xxs md:px-s md:pb-xxs">
                        <div className="flex h-[44px] gap-1"><a className="flex grow items-center lg:grow-[unset]" aria-label="Home"
                                                                href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="none" viewBox="0 0 123 24"
                                 className="w-[90px] text-primary md:w-[123px]">
                                <path fill="currentColor"
                                      d="M19.634 10.78c.027.433.055.865.055 1.271 0 2.162-.54 3.999-1.647 5.62a9.955 9.955 0 0 1-8.184 4.295c-2.836 0-5.24-1.053-7.13-3.053C.917 16.995 0 14.617 0 11.78c0-2.648 1.026-5.079 2.916-6.944C4.807 2.972 7.184 2 9.911 2c4.106 0 7.697 2.513 9.237 6.62H13.8c-1.188-1.242-2.431-1.864-3.943-1.864-2.808 0-5.023 2.296-5.023 5.051 0 3.053 2.376 5.403 5.023 5.403 1.783 0 3.376-.918 4.321-2.594H8.696V10.78h10.938Zm10.724 4.215 4.699 6.592H29.25L25.577 15.4v6.187l-4.699.001V2.378h6.374c2.025 0 3.565.135 4.861 1.055 1.702 1.188 2.593 2.999 2.593 5.376.001 3.107-1.62 5.429-4.348 6.186Zm-.406-6.078c0-1.594-.999-2.243-3.079-2.243h-1.296v4.566h.918c2.323 0 3.457-.595 3.457-2.323Zm88.326-6.539V13.05l-7.05-10.672h-4.239v19.21h4.698V10.89l7.157 10.699h4.132V2.378h-4.698Zm-15.181 2.487c1.945 1.918 2.972 4.377 2.972 6.998 0 2.755-.973 5.214-2.782 7.079-1.864 1.945-4.404 2.999-7.077 2.999-2.836 0-5.267-1.026-7.157-3.026-1.81-1.918-2.729-4.295-2.729-7.133 0-2.649 1.026-5.081 2.916-6.945 1.891-1.864 4.267-2.809 6.996-2.809 2.568 0 4.998 1 6.861 2.837Zm-1.89 6.97c0-2.81-2.242-5.052-4.943-5.052-2.863 0-5.105 2.242-5.105 5.052 0 3.026 2.404 5.349 5.052 5.349 2.754 0 4.996-2.216 4.996-5.349Zm-48.999-6.97c1.945 1.918 2.972 4.377 2.972 6.998 0 2.755-.973 5.214-2.782 7.079-1.864 1.945-4.403 2.999-7.077 2.999-2.836 0-5.267-1.026-7.157-3.026-1.81-1.918-2.728-4.295-2.728-7.133 0-2.649 1.026-5.081 2.917-6.945 1.891-1.864 4.267-2.809 6.996-2.809 2.565 0 4.995 1 6.859 2.837Zm-1.891 6.97c0-2.81-2.242-5.052-4.943-5.052-2.863 0-5.105 2.242-5.105 5.052 0 3.026 2.404 5.349 5.051 5.349 2.756 0 4.997-2.216 4.997-5.349Zm35.388-2.999c0 2.486-1.135 4.539-3.052 5.7-1.216.729-2.729.864-4.728.864h-1.351v6.187l-4.699.001V2.378h6.374c2.024 0 3.564.135 4.861 1.055 1.703 1.188 2.595 2.999 2.595 5.403Zm-4.755.081c0-1.594-.999-2.243-3.079-2.243h-1.242v4.566h.863c2.324 0 3.458-.595 3.458-2.323Zm-15.129 5.295c0 2.188-.783 3.269-2.431 3.269-1.593 0-2.269-1.108-2.269-3.269V2.378h-4.727v12.023c0 4.81 2.619 7.483 6.968 7.483 4.294 0 7.157-2.782 7.157-7.483V2.378h-4.698v11.834Z"></path>
                            </svg>
                        </a></div>
                        <div className="hidden flex-1 mx-5 truncate max-w-searchBar md:block">
                        <div className="flex items-center">
                                <div
                                    className="z-10 flex h-12 w-full min-w-0 items-center gap-2 rounded-full border-2 border-green bg-white p-1">
                                <div
                                        className="flex h-full w-full items-center gap-1.5 px-2 text-sm outline-none md:w-1/2 lg:w-full">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                                 fill="none"
                                                 className="text-black size-4">
                                                <path
                                                    d="M18.8083 17.8647L13.4011 12.4565C14.4012 11.2428 15.0013 9.68908 15.0013 8.00194C15.0013 4.14087 11.861 1 8.00064 1C4.14029 1 1 4.14087 1 8.00194C1 11.863 4.14029 15.0039 8.00064 15.0039C9.69412 15.0039 11.2409 14.4037 12.4544 13.3968L17.8615 18.8049C18.1216 19.065 18.5416 19.065 18.8016 18.8049C19.0616 18.5449 19.0683 18.1248 18.8083 17.8647ZM2.33345 8.00194C2.33345 4.87441 4.87369 2.3337 8.00064 2.3337C11.1276 2.3337 13.6678 4.87441 13.6678 8.00194C13.6678 11.1295 11.1276 13.6702 8.00064 13.6702C4.87369 13.6702 2.33345 11.1295 2.33345 8.00194Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </div>
                                        <form method="GET" action="/" className="h-full w-full" onSubmit={(e) => { e.preventDefault() }}><input
                                            className="h-full w-full text-sm font-bold outline-none placeholder:font-normal placeholder:text-body disabled:bg-white"
                                            autoComplete="off" placeholder="Search for deals"
                                            id="ls-search"
                                            type="text" value="" name="query" /></form>
                                </div>
                                </div>
                            </div>
                        </div>
                        <nav className="flex gap-1 justify-center items-center md:gap-2"><a className="relative"
                                                                                            aria-label="Wishlists" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 24 25"
                                 className="m-2.5 h-6 w-6 text-neutral-900">
                                <path stroke="currentColor"
                                      d="m11.58 4.3.42.657.42-.656c.22-.343.474-.668.765-.97a5.89 5.89 0 0 1 8.538 0c2.37 2.452 2.37 6.434 0 8.886L12 22.28 2.277 12.217c-2.37-2.452-2.37-6.434 0-8.886a5.89 5.89 0 0 1 8.538 0c.29.3.544.627.764.97Z"></path>
                            </svg>
                        </a>
                            <div className="hidden md:flex">
                                <button className="relative" aria-label="Open Cart" type="button" aria-haspopup="dialog"
                                        aria-expanded="false"
                                        aria-controls="radix-«r12»" data-state="closed">
                                    <div className="flex rounded-full" data-bhw="CartWidget" data-bhd="{&quot;version&quot;:3}"
                                         data-bhw-path="Header|CartWidget">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                             className="m-2.5 h-6 w-6 text-neutral-900">
                                            <g clip-path="url(#clip0_425_49151)">
                                                <path
                                                    d="M5.4 23C6.61503 23 7.6 22.015 7.6 20.8C7.6 19.585 6.61503 18.6 5.4 18.6C4.18497 18.6 3.2 19.585 3.2 20.8C3.2 22.015 4.18497 23 5.4 23Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M18.6 23C19.815 23 20.8 22.015 20.8 20.8C20.8 19.585 19.815 18.6 18.6 18.6C17.385 18.6 16.4 19.585 16.4 20.8C16.4 22.015 17.385 23 18.6 23Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M1 0.5H0.5V1.5H1V0.5ZM4.3 1H4.8V0.5H4.3V1ZM4.3 16.4H3.8H4.3ZM18.05 19.1H18.55V18.1H18.05V19.1ZM23 5.4L23.4851 5.52127L23.6404 4.9H23V5.4ZM20.8 14.2V14.7H21.1904L21.2851 14.3213L20.8 14.2ZM1 1.5H4.3V0.5H1V1.5ZM3.8 1V16.4H4.8V1H3.8ZM3.8 16.4C3.8 17.1161 4.08446 17.8028 4.59081 18.3092L5.29792 17.6021C4.97911 17.2833 4.8 16.8509 4.8 16.4H3.8ZM4.59081 18.3092C5.09716 18.8155 5.78392 19.1 6.5 19.1V18.1C6.04913 18.1 5.61673 17.9209 5.29792 17.6021L4.59081 18.3092ZM6.5 19.1H18.05V18.1H6.5V19.1ZM4.3 5.9H23V4.9H4.3V5.9ZM22.5149 5.27873L20.3149 14.0787L21.2851 14.3213L23.4851 5.52127L22.5149 5.27873ZM20.8 13.7H4.3V14.7H20.8V13.7ZM7.1 20.8C7.1 21.7389 6.33888 22.5 5.4 22.5V23.5C6.89117 23.5 8.1 22.2912 8.1 20.8H7.1ZM5.4 22.5C4.46112 22.5 3.7 21.7389 3.7 20.8H2.7C2.7 22.2912 3.90883 23.5 5.4 23.5V22.5ZM3.7 20.8C3.7 19.8611 4.46112 19.1 5.4 19.1V18.1C3.90883 18.1 2.7 19.3088 2.7 20.8H3.7ZM5.4 19.1C6.33888 19.1 7.1 19.8611 7.1 20.8H8.1C8.1 19.3088 6.89117 18.1 5.4 18.1V19.1ZM20.3 20.8C20.3 21.7389 19.5389 22.5 18.6 22.5V23.5C20.0912 23.5 21.3 22.2912 21.3 20.8H20.3ZM18.6 22.5C17.6611 22.5 16.9 21.7389 16.9 20.8H15.9C15.9 22.2912 17.1088 23.5 18.6 23.5V22.5ZM16.9 20.8C16.9 19.8611 17.6611 19.1 18.6 19.1V18.1C17.1088 18.1 15.9 19.3088 15.9 20.8H16.9ZM18.6 19.1C19.5389 19.1 20.3 19.8611 20.3 20.8H21.3C21.3 19.3088 20.0912 18.1 18.6 18.1V19.1Z"
                                                    fill="currentColor"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_425_49151">
                                                    <rect width="24" height="24" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <div className="hidden items-center md:flex">
                                <button className="relative hidden w-full md:block" aria-label="Open Notifications"
                                        type="button" aria-haspopup="dialog"
                                        aria-expanded="false" aria-controls="radix-«r13»">
                                <div data-bhw="NotificationsInboxTrigger" data-bhw-path="Header|NotificationsInboxTrigger">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                             className="m-2.5 h-6 w-6">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M11.9975 1C10.0084 1 8.1007 1.79018 6.69418 3.1967C5.28766 4.60322 4.49748 6.51088 4.49748 8.5V13.497C4.46829 15.8767 3.80271 18.2053 2.5698 20.241L2.11011 21H2.99748H20.9975H21.8849L21.4252 20.241C20.1922 18.2053 19.5267 15.8767 19.4975 13.497V8.5C19.4975 6.51088 18.7073 4.60322 17.3008 3.1967C15.8943 1.79018 13.9866 1 11.9975 1ZM7.40129 3.90381C8.62027 2.68482 10.2736 2 11.9975 2C13.7214 2 15.3747 2.68482 16.5937 3.90381C17.8127 5.12279 18.4975 6.77609 18.4975 8.5V13.5H18.4974L18.4975 13.506C18.5248 15.7742 19.0899 17.9992 20.1411 20H3.85387C4.90503 17.9992 5.47013 15.7742 5.49744 13.506H5.49748V13.5V8.5C5.49748 6.77609 6.1823 5.12279 7.40129 3.90381ZM14.4975 23V22H9.49748V23H14.4975Z"
                                                  fill="currentColor"></path>
                                        </svg>
                                        <span data-testid="notification-count-badge"
                                              className="absolute right-0 top-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 pt-px text-xxs font-bold text-white">10</span>
                                    </div>
                                </button>
                            </div>
                            <div className="hidden md:block">
                                <button
                                    className="relative block rounded-full transition-states disabled:pointer-events-none disabled:text-opacity-60 data-[disabled=true]:pointer-events-none data-[disabled=true]:text-opacity-60 border border-solid active:outline-none active:ring disabled:border-opacity-60 data-[disabled=true]:border-opacity-60 border-input text-body hover:border-dark hover:bg-body hover:text-body active:border-input active:ring-input text-sm font-bold bg-white px-3 py-2.5"
                                    type="button" data-bhw="signin-btn" data-bhd="{&quot;version&quot;:3}" aria-haspopup="dialog"
                                    aria-expanded="false" aria-controls="radix-«r14»" data-state="closed"
                                    data-bhw-path="Header|signin-btn">
                                    <div className="flex h-full w-full items-center justify-center">
                                        <div className="grow block text-center overflow-hidden text-ellipsis text-xs select-none">
                                            <div className="flex items-center justify-between gap-3 text-body"><span
                                                className="flex items-center justify-between gap-1.25 text-sm"><svg width="24"
                                                                                                                    height="24"
                                                                                                                    viewBox="0 0 24 24"
                                                                                                                    fill="none"
                                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                                    className="h-6 w-6"><path
                                                d="M12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11Z"
                                                stroke="currentColor" stroke-miterlimit="10" stroke-linecap="square"></path><path
                                                d="M12 13C7.029 13 3 17.029 3 22H21C21 17.029 16.971 13 12 13Z" stroke="currentColor"
                                                stroke-miterlimit="10" stroke-linecap="square"></path></svg>Sign In</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     className="size-3 stroke-2" role="img">
                                                    <path stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10"
                                                          d="m2.5 7.5 10 10 10-10"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </nav>
                    </div>
                    <div className="mx-auto max-w-[1232px] md:px-3 hidden px-0 md:block md:px-4xs lg:px-0">
                    <div className="relative">
                            <div className="overflow-hidden">
                                <div
                                    className="hide-scrollbar overflow-x-auto overflow-y-hidden mx-0 hidden justify-between gap-px md:flex">
                                    <div className="flex-none w-4/5 min-w-fit first:pl-0 last:pr-0 md:w-auto lg:w-auto"
                                         role="button">
                                    <div className="hidden lg:block">
                                            <button
                                                className="ripple w-full rounded-t-xs border-b-[3px] border-b-transparent p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green"
                                                data-state="closed"><a className="block px-2 py-4 md:px-3 lg:px-4"
                                                                       data-bhc="navigationItem:beauty-and-spas"
                                                                        data-bhc-type-count="68"
                                                                       data-bhc-path="InlineNavigation|inlineNavigationItem:beauty-and-spas|navigationItem:beauty-and-spas">
                                                <div className="flex items-center gap-2 bg-white">
                                                    <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                                         className="h-4 w-4 lg:h-4 lg:w-4">
                                                        <path
                                                            d="M11.5 18.5C14.1522 18.5 16.6957 17.4464 18.5711 15.5711C20.4464 13.6957 21.5 11.1522 21.5 8.5C20.2935 8.50213 19.0974 8.72339 17.97 9.153"
                                                            stroke="currentColor" stroke-miterlimit="10"
                                                            stroke-linecap="square"></path>
                                                        <path
                                                            d="M11.5 18.5C10.1868 18.5 8.88642 18.2413 7.67317 17.7388C6.45991 17.2362 5.35752 16.4997 4.42893 15.5711C2.55357 13.6957 1.5 11.1522 1.5 8.5C2.7065 8.50213 3.90258 8.72339 5.03 9.153"
                                                            stroke="currentColor" stroke-miterlimit="10"
                                                            stroke-linecap="square"></path>
                                                        <path
                                                            d="M11.5 18.5C12.2181 19.1656 13.0603 19.6833 13.9785 20.0234C14.8967 20.3635 15.8729 20.5195 16.8513 20.4823C17.8298 20.4452 18.7914 20.2157 19.6811 19.8069C20.5709 19.3982 21.3714 18.8182 22.037 18.1C21.7216 17.8108 21.3821 17.5492 21.022 17.318"
                                                            stroke="currentColor" stroke-miterlimit="10"
                                                            stroke-linecap="square"></path>
                                                        <path
                                                            d="M11.5 1.5C9.24595 3.75449 7.97968 6.81198 7.97968 10C7.97968 13.188 9.24595 16.2455 11.5 18.5C13.7541 16.2455 15.0203 13.188 15.0203 10C15.0203 6.81198 13.7541 3.75449 11.5 1.5Z"
                                                            stroke="currentColor" stroke-miterlimit="10"></path>
                                                        <path
                                                            d="M11.5 18.5C10.7819 19.1656 9.93967 19.6833 9.02149 20.0234C8.1033 20.3635 7.12711 20.5195 6.14865 20.4823C5.1702 20.4452 4.20864 20.2157 3.31888 19.8069C2.42912 19.3982 1.62859 18.8182 0.962997 18.1C1.27837 17.8108 1.61794 17.5492 1.978 17.318"
                                                            stroke="currentColor" stroke-miterlimit="10"
                                                            stroke-linecap="square"></path>
                                                    </svg>
                                                    Beauty &amp; Spas
                                                </div>
                                            </a></button>
                                        </div>
                                        <div className="block lg:hidden">
                                            <button
                                                className="ripple flex w-full items-center gap-2 rounded-t-xs border-b-[3px] border-b-transparent p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green">
                                                <a className="px-2 py-4 md:px-3 lg:px-4" data-bhc="navigationItem:beauty-and-spas"
                                                  >
                                                    <div className="flex items-center gap-2 bg-white">
                                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                                             className="h-4 w-4 lg:h-4 lg:w-4">
                                                            <path
                                                                d="M11.5 18.5C14.1522 18.5 16.6957 17.4464 18.5711 15.5711C20.4464 13.6957 21.5 11.1522 21.5 8.5C20.2935 8.50213 19.0974 8.72339 17.97 9.153"
                                                                stroke="currentColor" stroke-miterlimit="10"
                                                                stroke-linecap="square"></path>
                                                            <path
                                                                d="M11.5 18.5C10.1868 18.5 8.88642 18.2413 7.67317 17.7388C6.45991 17.2362 5.35752 16.4997 4.42893 15.5711C2.55357 13.6957 1.5 11.1522 1.5 8.5C2.7065 8.50213 3.90258 8.72339 5.03 9.153"
                                                                stroke="currentColor" stroke-miterlimit="10"
                                                                stroke-linecap="square"></path>
                                                            <path
                                                                d="M11.5 18.5C12.2181 19.1656 13.0603 19.6833 13.9785 20.0234C14.8967 20.3635 15.8729 20.5195 16.8513 20.4823C17.8298 20.4452 18.7914 20.2157 19.6811 19.8069C20.5709 19.3982 21.3714 18.8182 22.037 18.1C21.7216 17.8108 21.3821 17.5492 21.022 17.318"
                                                                stroke="currentColor" stroke-miterlimit="10"
                                                                stroke-linecap="square"></path>
                                                            <path
                                                                d="M11.5 1.5C9.24595 3.75449 7.97968 6.81198 7.97968 10C7.97968 13.188 9.24595 16.2455 11.5 18.5C13.7541 16.2455 15.0203 13.188 15.0203 10C15.0203 6.81198 13.7541 3.75449 11.5 1.5Z"
                                                                stroke="currentColor" stroke-miterlimit="10"></path>
                                                            <path
                                                                d="M11.5 18.5C10.7819 19.1656 9.93967 19.6833 9.02149 20.0234C8.1033 20.3635 7.12711 20.5195 6.14865 20.4823C5.1702 20.4452 4.20864 20.2157 3.31888 19.8069C2.42912 19.3982 1.62859 18.8182 0.962997 18.1C1.27837 17.8108 1.61794 17.5492 1.978 17.318"
                                                                stroke="currentColor" stroke-miterlimit="10"
                                                                stroke-linecap="square"></path>
                                                        </svg>
                                                        Beauty &amp; Spas
                                                    </div>
                                                </a></button>
                                        </div>
                                    </div>
                                    <div data-bhc="inlineNavigationItem:things-to-do"
                                         className="flex-none w-4/5 min-w-fit first:pl-0 last:pr-0 md:w-auto lg:w-auto"
                                         data-slide-intersection-ratio="1" role="button" data-bhc-type-count="10"
                                         data-bhc-path="InlineNavigation|inlineNavigationItem:things-to-do">
                                        <div className="hidden lg:block">
                                            <button
                                                className="ripple w-full rounded-t-xs border-b-[3px] border-b-transparent p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green"
                                                data-state="closed"><a className="block px-2 py-4 md:px-3 lg:px-4"
                                                                       data-bhc="navigationItem:things-to-do"
                                                                        data-bhc-type-count="69"
                                                                       data-bhc-path="InlineNavigation|inlineNavigationItem:things-to-do|navigationItem:things-to-do">
                                                <div className="flex items-center gap-2 bg-white">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         className="h-4 w-4 lg:h-4 lg:w-4">
                                                        <g clip-path="url(#clip0_502_64115)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                  d="M18.7185 1.5744L18.9743 2.3419L19.7185 4.5744L22.1464 2.14646L22.8536 2.85357L20.4256 5.28151L22.6581 6.02567L23.4256 6.28151L22.8536 6.85357L19.8536 9.85357L19.635 10.0721L19.3419 9.97436L16.635 9.07208L14.7266 10.9805C15.5217 11.9342 16 13.1613 16 14.5C16 17.5376 13.5376 20 10.5 20C7.46243 20 5 17.5376 5 14.5C5 11.4625 7.46243 9.00002 10.5 9.00002C11.8387 9.00002 13.0658 9.47833 14.0195 10.2734L15.9279 8.36497L15.0257 5.65813L14.9279 5.36497L15.1464 5.14646L18.1464 2.14646L18.7185 1.5744ZM16.0721 5.63506L16.8953 8.10473L19.365 8.92796L21.5744 6.71852L19.3419 5.97436L19.1047 5.8953L19.0257 5.65813L18.2815 3.42563L16.0721 5.63506ZM2 14.5C2 9.80516 5.80514 6.00002 10.5 6.00002C10.8193 6.00002 11.1351 6.01796 11.4454 6.05203L11.9425 6.10658L12.0516 5.11255L11.5546 5.058C11.2089 5.02007 10.8567 5.00002 10.5 5.00002C5.25286 5.00002 1 9.25287 1 14.5C1 19.7472 5.25286 24 10.5 24C15.7471 24 20 19.7472 20 14.5C20 14.1433 19.9799 13.7911 19.942 13.4455L19.8875 12.9485L18.8934 13.0576L18.948 13.5546C18.9821 13.865 19 14.1807 19 14.5C19 19.1949 15.1949 23 10.5 23C5.80514 23 2 19.1949 2 14.5ZM6 14.5C6 12.0147 8.01472 10 10.5 10C11.5625 10 12.539 10.3683 13.3088 10.9841L10.1464 14.1465L10.8536 14.8536L14.0159 11.6912C14.6318 12.461 15 13.4375 15 14.5C15 16.9853 12.9853 19 10.5 19C8.01472 19 6 16.9853 6 14.5Z"
                                                                  fill="currentColor"></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_502_64115">
                                                                <rect width="24" height="24" fill="white"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    Things To Do
                                                </div>
                                            </a></button>
                                        </div>
                                        <div className="block lg:hidden">
                                            <button
                                                className="ripple flex w-full items-center gap-2 rounded-t-xs border-b-[3px] border-b-transparent p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green">
                                                <a className="px-2 py-4 md:px-3 lg:px-4" data-bhc="navigationItem:things-to-do"
                                                   >
                                                    <div className="flex items-center gap-2 bg-white">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                             className="h-4 w-4 lg:h-4 lg:w-4">
                                                            <g clip-path="url(#clip0_502_64115)">
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                      d="M18.7185 1.5744L18.9743 2.3419L19.7185 4.5744L22.1464 2.14646L22.8536 2.85357L20.4256 5.28151L22.6581 6.02567L23.4256 6.28151L22.8536 6.85357L19.8536 9.85357L19.635 10.0721L19.3419 9.97436L16.635 9.07208L14.7266 10.9805C15.5217 11.9342 16 13.1613 16 14.5C16 17.5376 13.5376 20 10.5 20C7.46243 20 5 17.5376 5 14.5C5 11.4625 7.46243 9.00002 10.5 9.00002C11.8387 9.00002 13.0658 9.47833 14.0195 10.2734L15.9279 8.36497L15.0257 5.65813L14.9279 5.36497L15.1464 5.14646L18.1464 2.14646L18.7185 1.5744ZM16.0721 5.63506L16.8953 8.10473L19.365 8.92796L21.5744 6.71852L19.3419 5.97436L19.1047 5.8953L19.0257 5.65813L18.2815 3.42563L16.0721 5.63506ZM2 14.5C2 9.80516 5.80514 6.00002 10.5 6.00002C10.8193 6.00002 11.1351 6.01796 11.4454 6.05203L11.9425 6.10658L12.0516 5.11255L11.5546 5.058C11.2089 5.02007 10.8567 5.00002 10.5 5.00002C5.25286 5.00002 1 9.25287 1 14.5C1 19.7472 5.25286 24 10.5 24C15.7471 24 20 19.7472 20 14.5C20 14.1433 19.9799 13.7911 19.942 13.4455L19.8875 12.9485L18.8934 13.0576L18.948 13.5546C18.9821 13.865 19 14.1807 19 14.5C19 19.1949 15.1949 23 10.5 23C5.80514 23 2 19.1949 2 14.5ZM6 14.5C6 12.0147 8.01472 10 10.5 10C11.5625 10 12.539 10.3683 13.3088 10.9841L10.1464 14.1465L10.8536 14.8536L14.0159 11.6912C14.6318 12.461 15 13.4375 15 14.5C15 16.9853 12.9853 19 10.5 19C8.01472 19 6 16.9853 6 14.5Z"
                                                                      fill="currentColor"></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_502_64115">
                                                                    <rect width="24" height="24" fill="white"></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        Things To Do
                                                    </div>
                                                </a></button>
                                        </div>
                                    </div>
                                    <div data-bhc="inlineNavigationItem:auto-and-home-improvement"
                                         className="flex-none w-4/5 min-w-fit first:pl-0 last:pr-0 md:w-auto lg:w-auto"
                                         data-slide-intersection-ratio="1" role="button" data-bhc-type-count="11"
                                         data-bhc-path="InlineNavigation|inlineNavigationItem:auto-and-home-improvement">
                                        <div className="hidden lg:block">
                                            <button
                                                className="ripple w-full rounded-t-xs border-b-[3px] border-b-transparent p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green"
                                                data-state="closed"><a className="block px-2 py-4 md:px-3 lg:px-4"
                                                                       data-bhc="navigationItem:auto-and-home-improvement"
                                                                        data-bhc-type-count="70"
                                                                       data-bhc-path="InlineNavigation|inlineNavigationItem:auto-and-home-improvement|navigationItem:auto-and-home-improvement">
                                                <div className="flex items-center gap-2 bg-white">
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-4 lg:w-4">
                                                        <g clip-path="url(#clip0_1092_169101)">
                                                            <path d="M5.75 13V23H9.5" stroke="currentColor" stroke-miterlimit="10"
                                                                  stroke-linecap="square"></path>
                                                            <path d="M22.61 9.249L13.75 2L2.75 11" stroke="currentColor"
                                                                  stroke-miterlimit="10"></path>
                                                            <g clip-path="url(#clip1_1092_169101)">
                                                                <path d="M15.75 21.5V23H12.75V21.5" stroke="currentColor"
                                                                      stroke-miterlimit="10" stroke-linecap="round"></path>
                                                                <path d="M24 21.5V23H21V21.5" stroke="currentColor"
                                                                      stroke-miterlimit="10"
                                                                      stroke-linecap="round"></path>
                                                                <path
                                                                    d="M12.75 17.75V17.25C12.4739 17.25 12.25 17.4739 12.25 17.75H12.75ZM24 17.75H24.5C24.5 17.4739 24.2761 17.25 24 17.25V17.75ZM24 21.5V22H24.5V21.5H24ZM12.75 21.5H12.25V22H12.75V21.5ZM12.75 18.25H24V17.25H12.75V18.25ZM23.5 17.75V21.5H24.5V17.75H23.5ZM24 21H12.75V22H24V21ZM13.25 21.5V17.75H12.25V21.5H13.25Z"
                                                                    fill="currentColor"></path>
                                                                <path
                                                                    d="M14.625 20.375C15.0392 20.375 15.375 20.0392 15.375 19.625C15.375 19.2108 15.0392 18.875 14.625 18.875C14.2108 18.875 13.875 19.2108 13.875 19.625C13.875 20.0392 14.2108 20.375 14.625 20.375Z"
                                                                    fill="currentColor"></path>
                                                                <path
                                                                    d="M22.125 20.375C22.5392 20.375 22.875 20.0392 22.875 19.625C22.875 19.2108 22.5392 18.875 22.125 18.875C21.7108 18.875 21.375 19.2108 21.375 19.625C21.375 20.0392 21.7108 20.375 22.125 20.375Z"
                                                                    fill="currentColor"></path>
                                                                <path d="M12.75 17.9L14.35 13H22.35L24 17.9"
                                                                      stroke="currentColor"></path>
                                                            </g>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1092_169101">
                                                                <rect width="24" height="24" fill="white"
                                                                      transform="translate(0.75)"></rect>
                                                            </clipPath>
                                                            <clipPath id="clip1_1092_169101">
                                                                <rect width="14" height="14" fill="white"
                                                                      transform="translate(10.75 10)"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    Auto &amp; Home
                                                </div>
                                            </a></button>
                                        </div>
                                        <div className="block lg:hidden">
                                            <button
                                                className="ripple flex w-full items-center gap-2 rounded-t-xs border-b-[3px] border-b-transparent p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green">
                                                <a className="px-2 py-4 md:px-3 lg:px-4"
                                                   data-bhc="navigationItem:auto-and-home-improvement"
                                                   >
                                                    <div className="flex items-center gap-2 bg-white">
                                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-4 lg:w-4">
                                                            <g clip-path="url(#clip0_1092_169101)">
                                                                <path d="M5.75 13V23H9.5" stroke="currentColor" stroke-miterlimit="10"
                                                                      stroke-linecap="square"></path>
                                                                <path d="M22.61 9.249L13.75 2L2.75 11" stroke="currentColor"
                                                                      stroke-miterlimit="10"></path>
                                                                <g clip-path="url(#clip1_1092_169101)">
                                                                    <path d="M15.75 21.5V23H12.75V21.5" stroke="currentColor"
                                                                          stroke-miterlimit="10" stroke-linecap="round"></path>
                                                                    <path d="M24 21.5V23H21V21.5" stroke="currentColor"
                                                                          stroke-miterlimit="10" stroke-linecap="round"></path>
                                                                    <path
                                                                        d="M12.75 17.75V17.25C12.4739 17.25 12.25 17.4739 12.25 17.75H12.75ZM24 17.75H24.5C24.5 17.4739 24.2761 17.25 24 17.25V17.75ZM24 21.5V22H24.5V21.5H24ZM12.75 21.5H12.25V22H12.75V21.5ZM12.75 18.25H24V17.25H12.75V18.25ZM23.5 17.75V21.5H24.5V17.75H23.5ZM24 21H12.75V22H24V21ZM13.25 21.5V17.75H12.25V21.5H13.25Z"
                                                                        fill="currentColor"></path>
                                                                    <path
                                                                        d="M14.625 20.375C15.0392 20.375 15.375 20.0392 15.375 19.625C15.375 19.2108 15.0392 18.875 14.625 18.875C14.2108 18.875 13.875 19.2108 13.875 19.625C13.875 20.0392 14.2108 20.375 14.625 20.375Z"
                                                                        fill="currentColor"></path>
                                                                    <path
                                                                        d="M22.125 20.375C22.5392 20.375 22.875 20.0392 22.875 19.625C22.875 19.2108 22.5392 18.875 22.125 18.875C21.7108 18.875 21.375 19.2108 21.375 19.625C21.375 20.0392 21.7108 20.375 22.125 20.375Z"
                                                                        fill="currentColor"></path>
                                                                    <path d="M12.75 17.9L14.35 13H22.35L24 17.9"
                                                                          stroke="currentColor"></path>
                                                                </g>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1092_169101">
                                                                    <rect width="24" height="24" fill="white"
                                                                          transform="translate(0.75)"></rect>
                                                                </clipPath>
                                                                <clipPath id="clip1_1092_169101">
                                                                    <rect width="14" height="14" fill="white"
                                                                          transform="translate(10.75 10)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        Auto &amp; Home
                                                    </div>
                                                </a></button>
                                        </div>
                                    </div>
                                    <div data-bhc="inlineNavigationItem:food-and-drink"
                                         className="flex-none w-4/5 min-w-fit first:pl-0 last:pr-0 md:w-auto lg:w-auto"
                                         data-slide-intersection-ratio="1" role="button" data-bhc-type-count="12"
                                         data-bhc-path="InlineNavigation|inlineNavigationItem:food-and-drink">
                                        <div className="hidden lg:block">
                                            <button
                                                className="ripple w-full rounded-t-xs border-b-[3px] border-b-transparent p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green"
                                                data-state="closed"><a className="block px-2 py-4 md:px-3 lg:px-4"
                                                                       data-bhc="navigationItem:food-and-drink"
                                                                       data-bhc-type-count="71"
                                                                       data-bhc-path="InlineNavigation|inlineNavigationItem:food-and-drink|navigationItem:food-and-drink">
                                                <div className="flex items-center gap-2 bg-white">
                                                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none"
                                                         className="h-4 w-4 lg:h-4 lg:w-4">
                                                        <path d="M16.5 16.5L19.5 19.5" stroke="currentColor" stroke-miterlimit="10"
                                                              stroke-linecap="square"></path>
                                                        <path d="M3.5 3.5L11.5 11.5" stroke="currentColor" stroke-miterlimit="10"
                                                              stroke-linecap="square"></path>
                                                        <path d="M5.5 1.5L10.5 6.5L6.5 10.5L1.5 5.5" stroke="currentColor"
                                                              stroke-miterlimit="10" stroke-linecap="square"></path>
                                                        <path
                                                            d="M3.5 19.5L20.5 2.5C20.9121 3.89051 20.9439 5.36606 20.5922 6.77305C20.2405 8.18004 19.518 9.46702 18.5 10.5C14.964 14.036 12.5 14.5 12.5 14.5"
                                                            stroke="currentColor" stroke-miterlimit="10"
                                                            stroke-linecap="square"></path>
                                                    </svg>
                                                    Food &amp; Drink
                                                </div>
                                            </a></button>
                                        </div>
                                        <div className="block lg:hidden">
                                            <button
                                                className="ripple flex w-full items-center gap-2 rounded-t-xs border-b-[3px] border-b-transparent p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green">
                                                <a className="px-2 py-4 md:px-3 lg:px-4" data-bhc="navigationItem:food-and-drink"
                                                   >
                                                    <div className="flex items-center gap-2 bg-white">
                                                        <svg width="22" height="21" viewBox="0 0 22 21" fill="none"
                                                             className="h-4 w-4 lg:h-4 lg:w-4">
                                                            <path d="M16.5 16.5L19.5 19.5" stroke="currentColor" stroke-miterlimit="10"
                                                                  stroke-linecap="square"></path>
                                                            <path d="M3.5 3.5L11.5 11.5" stroke="currentColor" stroke-miterlimit="10"
                                                                  stroke-linecap="square"></path>
                                                            <path d="M5.5 1.5L10.5 6.5L6.5 10.5L1.5 5.5" stroke="currentColor"
                                                                  stroke-miterlimit="10" stroke-linecap="square"></path>
                                                            <path
                                                                d="M3.5 19.5L20.5 2.5C20.9121 3.89051 20.9439 5.36606 20.5922 6.77305C20.2405 8.18004 19.518 9.46702 18.5 10.5C14.964 14.036 12.5 14.5 12.5 14.5"
                                                                stroke="currentColor" stroke-miterlimit="10"
                                                                stroke-linecap="square"></path>
                                                        </svg>
                                                        Food &amp; Drink
                                                    </div>
                                                </a></button>
                                        </div>
                                    </div>
                                    <div data-bhc="inlineNavigationItem:gifts"
                                         className="flex-none w-4/5 min-w-fit first:pl-0 last:pr-0 md:w-auto lg:w-auto"
                                         data-slide-intersection-ratio="1" role="button" data-bhc-type-count="13"
                                         data-bhc-path="InlineNavigation|inlineNavigationItem:gifts">
                                        <div className="hidden lg:block">
                                            <button
                                                className="ripple w-full rounded-t-xs border-b-[3px] border-b-transparent p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green"
                                                data-state="closed"><a className="block px-2 py-4 md:px-3 lg:px-4"
                                                                       data-bhc="navigationItem:gifts"
                                                                       data-bhc-type-count="72"
                                                                       data-bhc-path="InlineNavigation|inlineNavigationItem:gifts|navigationItem:gifts">
                                                <div className="flex items-center gap-2 bg-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"
                                                         viewBox="0 0 24 25" className="h-4 w-4 lg:h-4 lg:w-4">
                                                        <path stroke="currentColor"
                                                              d="M12 6.002s-1.389-5-5.333-5A2.587 2.587 0 0 0 4 3.502a2.587 2.587 0 0 0 2.667 2.5H12Zm0 0h5.333A2.587 2.587 0 0 0 20 3.502a2.587 2.587 0 0 0-2.667-2.5c-3.944 0-5.333 5-5.333 5Zm0 0v17m9-10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8m-2-7h22v4H1v-4Z"></path>
                                                    </svg>
                                                    Gifts
                                                </div>
                                            </a></button>
                                        </div>
                                        <div className="block lg:hidden">
                                            <button
                                                className="ripple flex w-full items-center gap-2 rounded-t-xs border-b-[3px] border-b-transparent p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green">
                                                <a className="px-2 py-4 md:px-3 lg:px-4" data-bhc="navigationItem:gifts" >
                                                    <div className="flex items-center gap-2 bg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"
                                                             viewBox="0 0 24 25" className="h-4 w-4 lg:h-4 lg:w-4">
                                                            <path stroke="currentColor"
                                                                  d="M12 6.002s-1.389-5-5.333-5A2.587 2.587 0 0 0 4 3.502a2.587 2.587 0 0 0 2.667 2.5H12Zm0 0h5.333A2.587 2.587 0 0 0 20 3.502a2.587 2.587 0 0 0-2.667-2.5c-3.944 0-5.333 5-5.333 5Zm0 0v17m9-10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8m-2-7h22v4H1v-4Z"></path>
                                                        </svg>
                                                        Gifts
                                                    </div>
                                                </a></button>
                                        </div>
                                    </div>
                                    <div data-bhc="inlineNavigationItem:local"
                                         className="flex-none w-4/5 min-w-fit first:pl-0 last:pr-0 md:w-auto lg:w-auto"
                                         data-slide-intersection-ratio="1" role="button" data-bhc-type-count="14"
                                         data-bhc-path="InlineNavigation|inlineNavigationItem:local">
                                        <div className="hidden lg:block">
                                            <button
                                                className="ripple w-full rounded-t-xs border-b-[3px] border-b-transparent p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green"
                                                data-state="closed"><a className="block px-2 py-4 md:px-3 lg:px-4"
                                                                       data-bhc="navigationItem:local"
                                                                       data-bhc-type-count="73"
                                                                       data-bhc-path="InlineNavigation|inlineNavigationItem:local|navigationItem:local">
                                                <div className="flex items-center gap-2 bg-white">
                                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                                         className="h-4 w-4 lg:h-4 lg:w-4">
                                                        <path
                                                            d="M18.5 7.5C18.5 11.82 11.5 18.875 11.5 18.875C11.5 18.875 4.5 11.82 4.5 7.5C4.5 3.07 8.117 0.5 11.5 0.5C14.883 0.5 18.5 3.07 18.5 7.5Z"
                                                            stroke="currentColor" stroke-miterlimit="10"
                                                            stroke-linecap="square"></path>
                                                        <path
                                                            d="M11.5 9.5C12.6046 9.5 13.5 8.60457 13.5 7.5C13.5 6.39543 12.6046 5.5 11.5 5.5C10.3954 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 10.3954 9.5 11.5 9.5Z"
                                                            stroke="currentColor" stroke-miterlimit="10"
                                                            stroke-linecap="square"></path>
                                                        <path
                                                            d="M17.5 16.985C20.51 17.52 22.5 18.447 22.5 19.5C22.5 21.157 17.575 22.5 11.5 22.5C5.425 22.5 0.5 21.157 0.5 19.5C0.5 18.447 2.49 17.52 5.5 16.985"
                                                            stroke="currentColor" stroke-miterlimit="10"></path>
                                                    </svg>
                                                    Local
                                                </div>
                                            </a></button>
                                        </div>
                                        <div className="block lg:hidden">
                                            <button
                                                className="ripple flex w-full items-center gap-2 rounded-t-xs border-b-[3px] border-b-transparent p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green">
                                                <a className="px-2 py-4 md:px-3 lg:px-4" data-bhc="navigationItem:local">
                                                    <div className="flex items-center gap-2 bg-white">
                                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                                             className="h-4 w-4 lg:h-4 lg:w-4">
                                                            <path
                                                                d="M18.5 7.5C18.5 11.82 11.5 18.875 11.5 18.875C11.5 18.875 4.5 11.82 4.5 7.5C4.5 3.07 8.117 0.5 11.5 0.5C14.883 0.5 18.5 3.07 18.5 7.5Z"
                                                                stroke="currentColor" stroke-miterlimit="10"
                                                                stroke-linecap="square"></path>
                                                            <path
                                                                d="M11.5 9.5C12.6046 9.5 13.5 8.60457 13.5 7.5C13.5 6.39543 12.6046 5.5 11.5 5.5C10.3954 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 10.3954 9.5 11.5 9.5Z"
                                                                stroke="currentColor" stroke-miterlimit="10"
                                                                stroke-linecap="square"></path>
                                                            <path
                                                                d="M17.5 16.985C20.51 17.52 22.5 18.447 22.5 19.5C22.5 21.157 17.575 22.5 11.5 22.5C5.425 22.5 0.5 21.157 0.5 19.5C0.5 18.447 2.49 17.52 5.5 16.985"
                                                                stroke="currentColor" stroke-miterlimit="10"></path>
                                                        </svg>
                                                        Local
                                                    </div>
                                                </a></button>
                                        </div>
                                    </div>
                                    <div className="flex-none w-4/5 min-w-fit first:pl-0 last:pr-0 md:w-auto lg:w-auto" role="button">
                                    <div className="hidden lg:block">
                                            <button
                                                className="ripple w-full rounded-t-xs border-b-[3px] border-b-transparent p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green"
                                            ><a className="block px-2 py-4 md:px-3 lg:px-4" >
                                            <div className="flex items-center gap-2 bg-white">
                                                    <svg width="23" height="19" viewBox="0 0 23 19" fill="none"
                                                         className="h-4 w-4 lg:h-4 lg:w-4">
                                                        <path d="M20.5 6.5V0.5H2.5V6.5" stroke="currentColor" stroke-miterlimit="10"
                                                              stroke-linecap="square"></path>
                                                        <path d="M6.5 6.5V4.5H11.5V6.5" stroke="currentColor" stroke-miterlimit="10"
                                                              stroke-linecap="square"></path>
                                                        <path d="M11.5 6.5V4.5H16.5V6.5" stroke="currentColor" stroke-miterlimit="10"
                                                              stroke-linecap="square"></path>
                                                        <path
                                                            d="M22.5 18.5V11.5C22.5 10.9696 22.2893 10.4609 21.9142 10.0858C21.5391 9.71071 21.0304 9.5 20.5 9.5H2.5C1.96957 9.5 1.46086 9.71071 1.08579 10.0858C0.710714 10.4609 0.5 10.9696 0.5 11.5V18.5"
                                                            stroke="currentColor" stroke-miterlimit="10"
                                                            stroke-linecap="square"></path>
                                                        <path d="M0.5 15.5H22.5" stroke="currentColor" stroke-miterlimit="10"></path>
                                                    </svg>
                                                    Travel
                                                </div>
                                            </a></button>
                                        </div>
                                        <div className="block lg:hidden">
                                            <button
                                                className="ripple flex w-full items-center gap-2 rounded-t-xs border-b-[3px] border-b-transparent p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green">
                                                <a className="px-2 py-4 md:px-3 lg:px-4" data-bhc="navigationItem:travel"
                                                   >
                                                    <div className="flex items-center gap-2 bg-white">
                                                        <svg width="23" height="19" viewBox="0 0 23 19" fill="none"
                                                             className="h-4 w-4 lg:h-4 lg:w-4">
                                                            <path d="M20.5 6.5V0.5H2.5V6.5" stroke="currentColor"
                                                                  stroke-miterlimit="10"
                                                                  stroke-linecap="square"></path>
                                                            <path d="M6.5 6.5V4.5H11.5V6.5" stroke="currentColor"
                                                                  stroke-miterlimit="10"
                                                                  stroke-linecap="square"></path>
                                                            <path d="M11.5 6.5V4.5H16.5V6.5" stroke="currentColor"
                                                                  stroke-miterlimit="10"
                                                                  stroke-linecap="square"></path>
                                                            <path
                                                                d="M22.5 18.5V11.5C22.5 10.9696 22.2893 10.4609 21.9142 10.0858C21.5391 9.71071 21.0304 9.5 20.5 9.5H2.5C1.96957 9.5 1.46086 9.71071 1.08579 10.0858C0.710714 10.4609 0.5 10.9696 0.5 11.5V18.5"
                                                                stroke="currentColor" stroke-miterlimit="10"
                                                                stroke-linecap="square"></path>
                                                            <path d="M0.5 15.5H22.5" stroke="currentColor"
                                                                  stroke-miterlimit="10"></path>
                                                        </svg>
                                                        Travel
                                                    </div>
                                                </a></button>
                                        </div>
                                    </div>
                                    <div data-bhc="inlineNavigationItem:goods"
                                         className="flex-none w-4/5 min-w-fit first:pl-0 last:pr-0 md:w-auto lg:w-auto"
                                         data-slide-intersection-ratio="1" role="button" data-bhc-type-count="16"
                                         data-bhc-path="InlineNavigation|inlineNavigationItem:goods">
                                        <div className="hidden lg:block">
                                            <button
                                                className="ripple w-full rounded-t-xs border-b-[3px] p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green border-green"
                                                data-state="closed"><a className="block px-2 py-4 md:px-3 lg:px-4"
                                                                       data-bhc="navigationItem:goods"
                                                                       data-bhc-type-count="75"
                                                                       data-bhc-path="InlineNavigation|inlineNavigationItem:goods|navigationItem:goods">
                                                <div className="flex items-center gap-2 bg-white">
                                                    <svg width="19" height="23" viewBox="0 0 19 23" fill="none"
                                                         className="h-4 w-4 lg:h-4 lg:w-4">
                                                        <path d="M18.5 22.5H0.5V5.5H18.5V22.5Z" stroke="currentColor"
                                                              stroke-miterlimit="10" stroke-linecap="square"></path>
                                                        <path d="M5.5 8.5V4.5C5.5 2.3 7.3 0.5 9.5 0.5C11.7 0.5 13.5 2.3 13.5 4.5V8.5"
                                                              stroke="currentColor" stroke-miterlimit="10"
                                                              stroke-linecap="square"></path>
                                                    </svg>
                                                    Goods
                                                </div>
                                            </a></button>
                                        </div>
                                        <div className="block lg:hidden">
                                            <button
                                                className="ripple flex w-full items-center gap-2 rounded-t-xs border-b-[3px] p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green border-green">
                                                <a className="px-2 py-4 md:px-3 lg:px-4" data-bhc="navigationItem:goods" >
                                                    <div className="flex items-center gap-2 bg-white">
                                                        <svg width="19" height="23" viewBox="0 0 19 23" fill="none"
                                                             className="h-4 w-4 lg:h-4 lg:w-4">
                                                            <path d="M18.5 22.5H0.5V5.5H18.5V22.5Z" stroke="currentColor"
                                                                  stroke-miterlimit="10" stroke-linecap="square"></path>
                                                            <path
                                                                d="M5.5 8.5V4.5C5.5 2.3 7.3 0.5 9.5 0.5C11.7 0.5 13.5 2.3 13.5 4.5V8.5"
                                                                stroke="currentColor" stroke-miterlimit="10"
                                                                stroke-linecap="square"></path>
                                                        </svg>
                                                        Goods
                                                    </div>
                                                </a></button>
                                        </div>
                                    </div>
                                    <div data-bhc="inlineNavigationItem:coupons"
                                         className="flex-none w-4/5 min-w-fit first:pl-0 last:pr-0 md:w-auto lg:w-auto"
                                         data-slide-intersection-ratio="1" role="button" data-bhc-type-count="17"
                                         data-bhc-path="InlineNavigation|inlineNavigationItem:coupons">
                                        <div className="hidden lg:block">
                                            <button
                                                className="ripple w-full rounded-t-xs border-b-[3px] border-b-transparent p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green"
                                                data-state="closed"><a className="block px-2 py-4 md:px-3 lg:px-4"
                                                                       data-bhc="navigationItem:coupons"
                                                                       data-bhc-type-count="76"
                                                                       data-bhc-path="InlineNavigation|inlineNavigationItem:coupons|navigationItem:coupons">
                                                <div className="flex items-center gap-2 bg-white">
                                                    <svg width="23" height="19" viewBox="0 0 23 19" fill="none"
                                                         className="h-4 w-4 lg:h-4 lg:w-4">
                                                        <path
                                                            d="M19.5 9.5C19.4927 9.10402 19.5653 8.71063 19.7134 8.34334C19.8616 7.97605 20.0823 7.64241 20.3624 7.36236C20.6424 7.08231 20.976 6.8616 21.3433 6.71343C21.7106 6.56526 22.104 6.49267 22.5 6.5V2.5C22.5 1.96957 22.2893 1.46086 21.9142 1.08579C21.5391 0.710714 21.0304 0.5 20.5 0.5H2.5C1.96957 0.5 1.46086 0.710714 1.08579 1.08579C0.710714 1.46086 0.5 1.96957 0.5 2.5V6.5C1.29565 6.5 2.05871 6.81607 2.62132 7.37868C3.18393 7.94129 3.5 8.70435 3.5 9.5C3.5 10.2956 3.18393 11.0587 2.62132 11.6213C2.05871 12.1839 1.29565 12.5 0.5 12.5V16.5C0.5 17.0304 0.710714 17.5391 1.08579 17.9142C1.46086 18.2893 1.96957 18.5 2.5 18.5H20.5C21.0304 18.5 21.5391 18.2893 21.9142 17.9142C22.2893 17.5391 22.5 17.0304 22.5 16.5V12.5C22.104 12.5073 21.7106 12.4347 21.3433 12.2866C20.976 12.1384 20.6424 11.9177 20.3624 11.6376C20.0823 11.3576 19.8616 11.024 19.7134 10.6567C19.5653 10.2894 19.4927 9.89598 19.5 9.5Z"
                                                            stroke="currentColor" stroke-miterlimit="10"
                                                            stroke-linecap="square"></path>
                                                        <path d="M15.5 6.5H7.5V12.5H15.5V6.5Z" stroke="currentColor"
                                                              stroke-miterlimit="10"
                                                              stroke-linecap="square"></path>
                                                    </svg>
                                                    Coupons
                                                </div>
                                            </a></button>
                                        </div>
                                        <div className="block lg:hidden">
                                            <button
                                                className="ripple flex w-full items-center gap-2 rounded-t-xs border-b-[3px] border-b-transparent p-0 text-sm outline-none transition delay-100 ease-in-out hover:border-green">
                                                <a className="px-2 py-4 md:px-3 lg:px-4" data-bhc="navigationItem:coupons"
                                                   >
                                                    <div className="flex items-center gap-2 bg-white">
                                                        <svg width="23" height="19" viewBox="0 0 23 19" fill="none"
                                                             className="h-4 w-4 lg:h-4 lg:w-4">
                                                            <path
                                                                d="M19.5 9.5C19.4927 9.10402 19.5653 8.71063 19.7134 8.34334C19.8616 7.97605 20.0823 7.64241 20.3624 7.36236C20.6424 7.08231 20.976 6.8616 21.3433 6.71343C21.7106 6.56526 22.104 6.49267 22.5 6.5V2.5C22.5 1.96957 22.2893 1.46086 21.9142 1.08579C21.5391 0.710714 21.0304 0.5 20.5 0.5H2.5C1.96957 0.5 1.46086 0.710714 1.08579 1.08579C0.710714 1.46086 0.5 1.96957 0.5 2.5V6.5C1.29565 6.5 2.05871 6.81607 2.62132 7.37868C3.18393 7.94129 3.5 8.70435 3.5 9.5C3.5 10.2956 3.18393 11.0587 2.62132 11.6213C2.05871 12.1839 1.29565 12.5 0.5 12.5V16.5C0.5 17.0304 0.710714 17.5391 1.08579 17.9142C1.46086 18.2893 1.96957 18.5 2.5 18.5H20.5C21.0304 18.5 21.5391 18.2893 21.9142 17.9142C22.2893 17.5391 22.5 17.0304 22.5 16.5V12.5C22.104 12.5073 21.7106 12.4347 21.3433 12.2866C20.976 12.1384 20.6424 11.9177 20.3624 11.6376C20.0823 11.3576 19.8616 11.024 19.7134 10.6567C19.5653 10.2894 19.4927 9.89598 19.5 9.5Z"
                                                                stroke="currentColor" stroke-miterlimit="10"
                                                                stroke-linecap="square"></path>
                                                            <path d="M15.5 6.5H7.5V12.5H15.5V6.5Z" stroke="currentColor"
                                                                  stroke-miterlimit="10" stroke-linecap="square"></path>
                                                        </svg>
                                                        Coupons
                                                    </div>
                                                </a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                    className="rounded-full transition-states disabled:pointer-events-none disabled:text-opacity-60 data-[disabled=true]:pointer-events-none data-[disabled=true]:text-opacity-60 border border-solid active:outline-none active:ring disabled:border-opacity-60 data-[disabled=true]:border-opacity-60 text-body hover:text-body-outlined-hover border-specialDark-100 hover:border-specialDark-100 active:ring-specialDark-100-subtle text-xs font-bold absolute bg-white top-1.5 mx-4 p-2.5 left-1.5 -translate-x-1/2 rotate-180 hidden md:block opacity-0 duration-700 ease-in-out hover:scale-110 hover:bg-white hover:shadow-circleIcon motion-reduce:hover:scale-100 will-change-transform"
                                    type="button" data-testid="navigationButton" aria-label="previous">
                                <div className="flex h-full w-full items-center justify-center">
                                    <div className="grow block text-center overflow-hidden text-ellipsis text-xs select-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             className="size-4 stroke-2"
                                             role="img">
                                            <path stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10"
                                                  d="m8 2 10 10L8 22"></path>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                            <button
                                className="rounded-full transition-states disabled:pointer-events-none disabled:text-opacity-60 border border-solid active:outline-none active:ring disabled:border-opacity-60 text-body hover:text-body-outlined-hover border-specialDark-100 hover:border-specialDark-100 active:ring-specialDark-100-subtle text-xs font-bold absolute bg-white top-1.5 mx-4 p-2.5 right-1.5 translate-x-1/2 hidden md:block opacity-0 duration-700 ease-in-out hover:scale-110 hover:bg-white hover:shadow-circleIcon motion-reduce:hover:scale-100 will-change-transform"
                                type="button" aria-label="next">
                            <div className="flex h-full w-full items-center justify-center">
                                    <div className="grow block text-center overflow-hidden text-ellipsis text-xs select-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             className="size-4 stroke-2"
                                             role="img">
                                            <path stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10"
                                                  d="m8 2 10 10L8 22"></path>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden"></div>
        </header>
    </div>
);
