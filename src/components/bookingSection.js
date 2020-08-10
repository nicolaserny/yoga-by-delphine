import React from "react";
import Course from "./course";
import { compareAsc } from "date-fns";

const Separator = () => (
  <div className="w-full h-px mt-3 lg:mt-6 mb-3 lg:mb-4 bg-gray-200" />
);

const BookingSection = ({ title, description, courses }) => (
  <>
    <Separator />
    <section className="lg:flex lg:flex-row mt-3 lg:mt-4">
      <div className="w-full lg:w-1/3 mb-2 lg:mb-0 lg:pr-10">
        <h2 className="font-semibold text-lg lg:text-xl text-gray-800 leading-normal">
          {title}
        </h2>
        <p className="mt-2 text-gray-800 text-base font-normal leading-normal">
          {description}
        </p>
      </div>
      <div className="w-full lg:w-2/3">
        {courses.length === 0 && (
          <p className="text-gray-800 font-medium text-base lg:text-lg leading-relaxed mt-px pt-px">
            Aucun cours pour le moment.
          </p>
        )}
        {courses
          .sort((a, b) => compareAsc(a.datetime, b.datetime))
          .map((course) => (
            <Course key={course.shopifyId} course={course} />
          ))}
      </div>
    </section>
  </>
);

export default BookingSection;
