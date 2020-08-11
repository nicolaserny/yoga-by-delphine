import React from "react";
import { SEO, Layout, PageTitle, CourseDescription } from "../components";

const courses = [
  {
    title: "Hatha yoga",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur rem sed accusamus? Facilis a itaque sint? Facilis officia ab molestiae assumenda ullam cumque obcaecati. Adipisci mollitia odio repudiandae ipsa!",
    description2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur rem sed accusamus? Facilis a itaque sint? Facilis officia ab molestiae assumenda ullam cumque obcaecati. Adipisci mollitia odio repudiandae ipsa!",
    imageName: "hatha",
  },
  {
    title: "Vinyassa yoga",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur rem sed accusamus? Facilis a itaque sint? Facilis officia ab molestiae assumenda ullam cumque obcaecati. Adipisci mollitia odio repudiandae ipsa!",
    description2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur rem sed accusamus? Facilis a itaque sint? Facilis officia ab molestiae assumenda ullam cumque obcaecati. Adipisci mollitia odio repudiandae ipsa!",
    imageName: "vinyassa",
    imageRight: false,
  },
  {
    title: "Cours en ligne sur zoom",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur rem sed accusamus? Facilis a itaque sint? Facilis officia ab molestiae assumenda ullam cumque obcaecati. Adipisci mollitia odio repudiandae ipsa!",
    description2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur rem sed accusamus? Facilis a itaque sint? Facilis officia ab molestiae assumenda ullam cumque obcaecati. Adipisci mollitia odio repudiandae ipsa!",
    imageName: "zoom",
  },
  {
    title: "Cours en studio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur rem sed accusamus? Facilis a itaque sint? Facilis officia ab molestiae assumenda ullam cumque obcaecati. Adipisci mollitia odio repudiandae ipsa!",
    description2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur rem sed accusamus? Facilis a itaque sint? Facilis officia ab molestiae assumenda ullam cumque obcaecati. Adipisci mollitia odio repudiandae ipsa!",
    imageName: "studio",
    imageRight: false,
  },
];

const Courses = () => (
  <Layout mainCentered={false}>
    <SEO title="Courses" />
    <PageTitle>Mes cours de yoga à découvrir</PageTitle>
    <div className="grid grid-cols-2 grid-flow-row-dense col-gap-24 row-gap-12 items-center my-16 w-full">
      {courses.map((course) => (
        <CourseDescription
          key={course.title}
          title={course.title}
          description={course.description}
          description2={course.description2}
          imageName={course.imageName}
          imageRight={course.imageRight}
        />
      ))}
    </div>
  </Layout>
);

export default Courses;
