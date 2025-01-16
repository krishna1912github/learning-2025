
export const Fb = ( ) => {
    return (
<div className="group w-12 h-12">
    <svg
        className="w-full h-full"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Background */}
        <rect
            className="transition-colors duration-300 group-hover:fill-white border-black border-x-black"
            width="50"
            height="50"
            rx="4"
            fill="black"
        />
        {/* Icon Path */}
        <g clipPath="url(#clip0_320_341)">
            <path
                className="transition-colors duration-300 group-hover:fill-black border-x-black"
                d="M34 24C34 18.4771 29.5229 14 24 14C18.4771 14 14 18.4771 14 24C14 28.9912 17.6568 33.1283 22.4375 33.8785V26.8906H19.8984V24H22.4375V21.7969C22.4375 19.2906 23.9305 17.9063 26.2146 17.9063C27.3084 17.9063 28.4531 18.1016 28.4531 18.1016V20.5625H27.1922C25.95 20.5625 25.5625 21.3334 25.5625 22.125V24H28.3359L27.8926 26.8906H25.5625V33.8785C30.3432 33.1283 34 28.9912 34 24Z"
                fill="white"
            />
        </g>
        <defs>
            <clipPath id="clip0_320_341">
                <rect
                    width="30"
                    height="30"
                    fill="white"
                    transform="translate(14 14)"
                />
            </clipPath>
        </defs>
    </svg>
</div>

    )
}