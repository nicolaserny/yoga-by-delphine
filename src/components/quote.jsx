import React from "react";

const Quote = () => (
  <blockquote className="relative">
    <svg
      className="absolute top-0 left-0 -mt-6 -ml-6"
      width="59"
      height="64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.907 31.637c0-14.75 15.462-23.737 17.864-24.858 1.74-.834 3.35-1.395 4.453-1.395.96 0 1.597.412 1.597 1.12 0 .71-.805 1.545-1.597 2.105-2.22 1.406-8.452 8.713-8.452 15.596 0 1.818 1.117 3.499 2.389 4.07 1.44.698 8.14 1.967 8.14 9.399 0 4.357-3.986 8.14-9.569 8.14-7.334.001-14.825-4.904-14.825-14.177zM30.82 31.637c0-14.75 15.475-23.737 17.864-24.858 1.753-.834 3.35-1.395 4.466-1.395.96 0 1.584.412 1.584 1.12 0 .71-.791 1.545-1.584 2.105-2.233 1.406-8.451 8.713-8.451 15.596 0 1.818 1.116 3.499 2.389 4.07 1.44.698 8.14 1.967 8.14 9.4 0 4.356-4 8.14-9.582 8.14-7.323 0-14.827-4.905-14.827-14.178z"
        className="fill-purple-100"
      />
    </svg>
    <p className="relative text-gray-700 text-lg text-left font-sans font-normal italic leading-relaxed mb-1">
      If you want to have ongoing joy and fulfillment in your life, the secret
      is just one word – progress. Progress equals happiness.
    </p>
    <span className="relative text-purple-500 text-base text-left font-sans font-semibold">
      <span className="inline-block h-0 w-0 border-b-2 border-purple-600 pl-1 pr-1 mb-1 mr-1" />
      Tony Robbins
    </span>
  </blockquote>
);

export default Quote;
