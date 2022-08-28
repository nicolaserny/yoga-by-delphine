const Footer = () => (
  <footer>
    <div className="flex justify-center text-gray-500 pb-3 lg:pb-4">
      <a
        href="https://www.instagram.com/wecket/"
        target="_blank"
        rel="noreferrer noopener"
        className="mr-5 hover:text-gray-700"
      >
        <svg
          width="25"
          height="26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7.257 0C3.26 0 0 3.39 0 7.547v10.906C0 22.61 3.26 26 7.257 26h10.486C21.74 26 25 22.61 25 18.453V7.547C25 3.39 21.74 0 17.743 0H7.257zm0 2h10.486c2.956 0 5.334 2.469 5.334 5.547v10.906c0 3.074-2.374 5.547-5.334 5.547H7.257c-2.956 0-5.334-2.469-5.334-5.547V7.547C1.923 4.473 4.297 2 7.257 2zm12.455 2c-.797 0-1.443.672-1.443 1.5S18.915 7 19.712 7c.796 0 1.442-.672 1.442-1.5S20.508 4 19.712 4zM12.5 6c-3.707 0-6.73 3.145-6.73 7s3.023 7 6.73 7c3.707 0 6.73-3.145 6.73-7s-3.023-7-6.73-7zm0 2c2.667 0 4.808 2.227 4.808 5s-2.141 5-4.808 5-4.808-2.227-4.808-5S9.833 8 12.5 8z"
            className="fill-current"
          />
        </svg>
        <span className="sr-only">Delphine's instagram</span>
      </a>
      <a
        href="https://www.facebook.com/delphineleblancyoga"
        target="_blank"
        rel="noreferrer noopener"
        className="hover:text-gray-700"
      >
        <svg
          width="25"
          height="26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g clipPath="url(#clipFacebook)">
            <path
              d="M20 .5H5c-2.757 0-5 2.243-5 5v15c0 2.757 2.243 5 5 5h15c2.757 0 5-2.243 5-5v-15c0-2.757-2.243-5-5-5zM19.5 9H18c-1.073 0-1.5.252-1.5 1v1.5h3l-.5 3h-2.5v10H13v-10h-1.5v-3H13V10c0-2.338.79-4 3.5-4 1.451 0 3 .5 3 .5V9z"
              className="fill-current"
            />
          </g>
          <defs>
            <clipPath id="clipFacebook">
              <path fill="#fff" transform="translate(0 .5)" d="M0 0h25v25H0z" />
            </clipPath>
          </defs>
        </svg>
        <span className="sr-only">Delphine's facebook page</span>
      </a>
    </div>
    <p className="text-xs text-gray-700 text-center pb-5">
      © Nicolas Erny 2022
    </p>
  </footer>
);

export default Footer;
