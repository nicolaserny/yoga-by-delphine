import React from "react";
import Course from "./course";

const Separator = () => <div className="w-full h-px mt-6 mb-4 bg-gray-200" />;

const BookingSection = ({ title, description, courses }) => (
  <>
    <Separator />
    <section className="flex flex-row mt-4">
      <div className="w-1/2 pr-10">
        <h2 className="font-semibold text-xl text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-800 text-base font-normal leading-normal">
          {description}
        </p>
      </div>
      <div className="w-1/2">
        {courses.length === 0 && <p>Aucun cours pour le moment.</p>}
        {courses.map((course) => (
          <Course course={course} />
        ))}
      </div>
    </section>
  </>
);

export default BookingSection;
