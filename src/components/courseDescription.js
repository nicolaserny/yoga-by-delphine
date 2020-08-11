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
        <h2 className="mb-4 text-xl font-semibold font-normal text-gray-800">
          {title}
        </h2>
        <p className="text-gray-800 text-base font-normal leading-relaxed">
          {description}
        </p>
        <p className="mt-4 text-gray-800 text-base font-normal leading-relaxed">
          {description2}
        </p>
      </div>
      <Image className="rounded-lg" fluid={image.fluid} alt={title} />
    </>
  );
};

export default CourseDescription;
