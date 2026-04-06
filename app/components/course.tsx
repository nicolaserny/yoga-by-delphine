import { format } from "date-fns";
import { fr } from "date-fns/locale";
import React from "react";
import BuyButton from "./buyButton";
import type { YogaProduct, CourseCategory } from "~/models/courses.server";

function getBuyButtonLabel(course: YogaProduct) {
  if (course.type === "REGULAR") {
    return "Réserver";
  }
  return "Acheter";
}

const CourseIcon: React.FC<{ category: CourseCategory }> = ({ category }) => {
  const iconSrc =
    category === "online"
      ? "/icons/course-online.svg"
      : "/icons/course-studio.svg";

  return <img src={iconSrc} alt="" width="70" height="60" aria-hidden="true" />;
};

function formatCourseType(category: CourseCategory) {
  switch (category) {
    case "online":
      return "Zoom";
    case "studio":
      return "Studio";
    case "other_private":
      return "A domicile";
    case "other_subscription":
      return "Zoom / Extérieur";
    case "park":
      return "Parc Andre Citroen";
    default:
      return "Zoom";
  }
}

function formatDatetimeField(course: YogaProduct) {
  if (course.category === "other_private") {
    return "Cours privés";
  }
  if (course.type === "CARD") {
    return course.datetime as string;
  }
  return format(
    course.datetime as Date,
    course.type === "SUBSCRIPTION" ? "MMMM yyyy" : "eee dd MMM yyyy - HH'h'mm",
    {
      locale: fr,
    },
  );
}

function formatTitleField(course: YogaProduct) {
  if (course.type === "REGULAR") {
    return `${course.title} (${course.duration})`;
  }
  return course.title;
}

const Course: React.FC<{ course: YogaProduct }> = ({ course }) => {
  return (
    <div className="grid-cols-coursesm lg:grid-cols-courselg xl:grid-cols-course mb-5 grid w-full max-w-md items-baseline gap-x-1 rounded-lg bg-white px-4 py-2 shadow-sm last:mb-0 lg:max-w-full lg:gap-x-2 xl:gap-x-4 xl:px-10 xl:py-8">
      <div className="row-span-2 hidden self-center text-gray-600 xl:block">
        <CourseIcon category={course.category} />
      </div>
      <div className="text-base leading-normal font-medium whitespace-nowrap text-gray-800 xl:text-lg">
        {formatDatetimeField(course)}
      </div>
      <div className="col-start-1 row-start-2 text-base leading-normal font-medium text-gray-800 lg:col-start-2 lg:row-start-1 xl:col-start-3 xl:text-lg">
        {formatTitleField(course)}
      </div>
      <div className="justify-self-end text-right text-xl leading-normal font-medium text-gray-900 xl:text-3xl">
        {course.price}
        <span className="text-base xl:text-xl">€</span>
      </div>
      <div className="col-start-1 row-start-4 text-sm leading-normal font-normal text-gray-600 lg:col-start-1 lg:row-start-2 xl:col-start-2 xl:text-lg">
        {formatCourseType(course.category)}
      </div>
      <div className="col-start-1 row-start-3 text-sm leading-normal font-normal text-gray-600 lg:col-start-2 lg:row-start-2 xl:col-start-3 xl:text-lg">
        {course.description}
      </div>
      <div className="col-start-2 row-start-4 text-right lg:col-start-3 lg:row-start-2 xl:col-start-4">
        <BuyButton shopifyId={course.shopifyId}>
          {getBuyButtonLabel(course)}
        </BuyButton>
      </div>
    </div>
  );
};

export default Course;
