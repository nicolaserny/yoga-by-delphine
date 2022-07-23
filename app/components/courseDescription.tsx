import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

export type CourseDescriptionProps = {
  title: string;
  description: string | JSX.Element;
  description2: string | JSX.Element;
  image: IGatsbyImageData;
  imageRight?: boolean;
};

const CourseDescription: React.FC<CourseDescriptionProps> = ({
  title,
  description,
  description2,
  image,
  imageRight = true,
}) => {
  return (
    <>
      <div {...(!imageRight && { className: "md:col-start-2" })}>
        <h3 className="mt-5 md:mt-0 lg:0 mb-2 lg:mb-4 text-lg lg:text-xl font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-gray-800 text-base font-normal leading-relaxed">
          {description}
        </p>
        <p className="mt-4 text-gray-800 text-base font-normal leading-relaxed">
          {description2}
        </p>
      </div>
      <GatsbyImage
        className="mt-3 md:mt-0 mb-4 md:mb-0 rounded-lg"
        image={image}
        alt={title}
      />
    </>
  );
};

export default CourseDescription;
