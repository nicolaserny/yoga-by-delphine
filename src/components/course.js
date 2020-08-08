import React from "react";
import { ONLINE_CATEGORY, STUDIO_CATEGORY } from "../utils/constants";

const CourseIcon = (category, id) => {
  const onlineIcon = (
    <svg
      width="69"
      height="80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g clipPath={`url(#clip-${id})`} fill="currentColor">
        <path d="M52.525 37.7H20.623c-.644 0-1.074-.4-1.074-1V12.8c0-.6.43-1 1.074-1h31.902c.645 0 1.074.4 1.074 1v23.9c0 .6-.537 1-1.074 1zm-30.827-2H51.45V13.8H21.698v21.9z" />
        <path d="M40.924 23.9c.538-.8.967-1.8.967-2.9 0-2.8-2.363-5.2-5.37-5.2-3.008 0-5.371 2.3-5.371 5.2 0 1.1.322 2.1.967 2.9-2.041 1.2-3.438 3.4-3.438 5.9v2.8c0 .6.43 1 1.075 1h13.534c.644 0 1.074-.4 1.074-1v-2.8c0-2.4-1.29-4.6-3.438-5.9zm-4.404-6c1.72 0 3.223 1.4 3.223 3.2 0 1.8-1.397 3.2-3.223 3.2-1.826 0-3.222-1.4-3.222-3.2 0-1.8 1.504-3.2 3.222-3.2zm5.693 13.7H30.828v-1.8c0-1.9 1.181-3.6 2.9-4.4.859.5 1.826.8 2.792.8 1.075 0 2.041-.3 2.793-.8 1.719.8 2.9 2.5 2.9 4.4v1.8zM9.775 39.6c-3.975 0-7.197-3-7.197-6.7s3.222-6.7 7.197-6.7c3.974 0 7.196 3 7.196 6.7s-3.222 6.7-7.196 6.7zm0-11.3c-2.793 0-5.049 2.1-5.049 4.7s2.256 4.7 5.049 4.7c2.792 0 5.048-2.1 5.048-4.7s-2.256-4.7-5.048-4.7zM17.079 63H4.619c-1.934 0-3.545-1.5-3.545-3.3V49.3c0-2.3 1.182-4.5 3.222-5.8l.86-.5c3.007-1.7 6.767-1.7 9.774.1 3.008 1.8 4.834 4.9 4.834 8.2v9.1c0 1.5-1.181 2.6-2.685 2.6zm-7.09-19.3c-1.289 0-2.578.3-3.652 1l-.859.5c-1.396.9-2.256 2.4-2.256 4.1v10.4c0 .7.645 1.3 1.397 1.3h12.46c.322 0 .537-.2.537-.5v-9.1c0-2.7-1.397-5.1-3.867-6.6-1.074-.7-2.47-1.1-3.76-1.1zM61.548 12.4c-.645 0-1.074-.4-1.074-1 0-2-1.719-3.7-3.867-3.7-.645 0-1.074-.4-1.074-1s.43-1 1.074-1c3.33 0 6.015 2.5 6.015 5.7 0 .6-.43 1-1.074 1z" />
        <path d="M66.596 13.6c-.644 0-1.074-.4-1.074-1 0-5.3-4.619-9.6-10.204-9.6-.645 0-1.074-.4-1.074-1s.43-1 1.074-1C62.085 1 67.67 6.2 67.67 12.6c0 .6-.43 1-1.074 1zM56.5 12.7c-.86 0-1.612-.7-1.612-1.5s.752-1.5 1.611-1.5c.86 0 1.612.7 1.612 1.5s-.645 1.5-1.612 1.5z" />
      </g>
      <defs>
        <clipPath id={`clip-${id}`}>
          <path fill="#fff" d="M0 0h68.745v80H0z" />
        </clipPath>
      </defs>
    </svg>
  );
  switch (category) {
    case ONLINE_CATEGORY:
      return onlineIcon;
    case STUDIO_CATEGORY:
    default:
      return onlineIcon;
  }
};

const Course = ({ course }) => {
  return (
    <div
      key={course.shopifyId}
      className="grid grid-cols-course col-gap-4 items-baseline w-full mb-5 px-12 py-8 bg-white rounded-lg shadow"
    >
      <div className="row-span-2 self-center text-gray-600">
        <CourseIcon category={course.category} id={course.shopifyId} />
      </div>
      <div className="text-gray-800 font-medium text-lg leading-normal">
        {course.date}
      </div>
      <div className="text-gray-800 font-medium text-lg leading-normal">
        {course.yogaType} ({course.duration})
      </div>
      <div className="text-gray-900 font-medium text-3xl leading-normal">
        {course.price}
        <span className="text-xl">€</span>
      </div>
      <div className="text-gray-600 font-normal text-lg leading-normal">
        Zoom
      </div>
      <div className="text-gray-600 font-normal text-lg leading-normal">
        {course.description}
      </div>
      <button className="tertiary -ml-2">Payer</button>
    </div>
  );
};

export default Course;
