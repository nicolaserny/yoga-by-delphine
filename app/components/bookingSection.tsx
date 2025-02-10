import { compareAsc } from "date-fns";
import React from "react";
import Course from "./course";
import type { YogaProduct } from "~/models/courses.server";

const Separator = () => (
  <hr className="mt-3 mb-3 h-px w-full bg-gray-200 md:mt-4 lg:mt-6 lg:mb-6" />
);

const BookingSection: React.FC<{
  title: string;
  description: string | JSX.Element;
  courses: YogaProduct[];
  noCoursesMessage?: string | JSX.Element;
}> = ({ title, description, courses, noCoursesMessage }) => (
  <>
    <Separator />
    <section className="mt-3 lg:mt-4 lg:flex lg:flex-row">
      <div className="mb-2 w-full lg:mb-0 lg:w-1/3 lg:pr-10">
        <h2 className="text-lg leading-normal font-semibold text-gray-800 lg:text-xl">
          {title}
        </h2>
        <div className="mt-2 text-base leading-normal font-normal text-gray-800">
          {description}
        </div>
      </div>
      <div className="w-full lg:w-2/3">
        {courses.length === 0 && (
          <p className="mt-px pt-px text-base leading-relaxed font-medium text-gray-800 lg:text-lg">
            {noCoursesMessage || "Aucun cours pour le moment"}.
          </p>
        )}
        {courses
          .filter((course) => course.type === "CARD")
          .map((course) => (
            <Course key={course.shopifyId} course={course} />
          ))}
        {courses
          .filter((course) => course.type !== "CARD")
          .sort((a, b) => compareAsc(a.datetime as Date, b.datetime as Date))
          .map((course) => (
            <Course key={course.shopifyId} course={course} />
          ))}
      </div>
    </section>
  </>
);

export default BookingSection;
