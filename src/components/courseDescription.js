import React from "react";
import Image from "gatsby-image";

const CourseDescription = ({
  title,
  description,
  description2,
  image,
  imageRight = true,
}) => {
  return (
    <>
      <div {...(!imageRight && { className: "col-start-2" })}>
        <h3 className="mb-2 lg:mb-4 text-lg lg:text-xl font-semibold font-normal text-gray-800">
          {title}
        </h3>
        <p className="text-gray-800 text-sm md:text-base font-normal leading-relaxed">
          {description}
        </p>
        <p className="mt-4 text-gray-800 text-sm md:text-base font-normal leading-relaxed">
          {description2}
        </p>
      </div>
      <Image
        className="mt-3 md:mt-0 mb-4 md:mb-0 rounded-lg"
        fluid={image.fluid}
        alt={title}
      />
    </>
  );
};

export default CourseDescription;
