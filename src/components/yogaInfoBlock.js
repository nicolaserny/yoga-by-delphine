import React from "react";
import { CourseDescription } from ".";
import { useCourseImages } from "../hooks";

const SubSection = ({ title, elements, className }) => (
  <div className={`-mx-8 lg:-mx-20 py-16 ${className}`}>
    <section className="width-constraints">
      <h1 className="text-gray-800 text-xl lg:text-2xl font-semibold">
        {title}
      </h1>
      <div className="grid grid-cols-2 grid-flow-row-dense col-gap-24 row-gap-12 items-center mt-12 w-full">
        {elements.map((element) => (
          <CourseDescription
            key={element.title}
            title={element.title}
            description={element.description}
            description2={element.description2}
            image={element.image}
            imageRight={element.imageRight}
          />
        ))}
      </div>
    </section>
  </div>
);

const YogaInfoBlock = () => {
  const images = useCourseImages();
  const yogaDetails = [
    {
      title: "Hatha yoga",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur rem sed accusamus? Facilis a itaque sint? Facilis officia ab molestiae assumenda ullam cumque obcaecati. Adipisci mollitia odio repudiandae ipsa!",
      description2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur rem sed accusamus? Facilis a itaque sint? Facilis officia ab molestiae assumenda ullam cumque obcaecati. Adipisci mollitia odio repudiandae ipsa!",
      image: images["course-1"],
    },
    {
      title: "Vinyassa yoga",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur rem sed accusamus? Facilis a itaque sint? Facilis officia ab molestiae assumenda ullam cumque obcaecati. Adipisci mollitia odio repudiandae ipsa!",
      description2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur rem sed accusamus? Facilis a itaque sint? Facilis officia ab molestiae assumenda ullam cumque obcaecati. Adipisci mollitia odio repudiandae ipsa!",
      image: images["course-2"],
      imageRight: false,
    },
  ];
  const courses = [
    {
      title: "Cours en ligne sur zoom",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur rem sed accusamus? Facilis a itaque sint? Facilis officia ab molestiae assumenda ullam cumque obcaecati. Adipisci mollitia odio repudiandae ipsa!",
      description2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur rem sed accusamus? Facilis a itaque sint? Facilis officia ab molestiae assumenda ullam cumque obcaecati. Adipisci mollitia odio repudiandae ipsa!",
      image: images["course-3"],
    },
    {
      title: "Cours en studio",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur rem sed accusamus? Facilis a itaque sint? Facilis officia ab molestiae assumenda ullam cumque obcaecati. Adipisci mollitia odio repudiandae ipsa!",
      description2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur rem sed accusamus? Facilis a itaque sint? Facilis officia ab molestiae assumenda ullam cumque obcaecati. Adipisci mollitia odio repudiandae ipsa!",
      image: images["course-4"],
      imageRight: false,
    },
  ];
  return (
    <>
      <SubSection
        title="Les styles de yoga"
        elements={yogaDetails}
        className="bg-white"
      />
      <SubSection title="Les différents cours de yoga" elements={courses} />
    </>
  );
};

export default YogaInfoBlock;