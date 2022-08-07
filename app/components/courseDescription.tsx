import React from "react";
import type { ImageBuilder } from "~/images";
import { getImgProps } from "~/images";
import BlurrableImage from "./blurrableImage";

export type CourseDescriptionProps = {
  title: string;
  description: string | JSX.Element;
  description2: string | JSX.Element;
  image: ImageBuilder;
  imageRight?: boolean;
  blurDataUrl?: string;
};

const CourseDescription: React.FC<CourseDescriptionProps> = ({
  title,
  description,
  description2,
  image,
  blurDataUrl,
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
      <BlurrableImage
        className="aspect-h-4 aspect-w-6 w-full"
        blurDataUrl={blurDataUrl}
        img={
          <img
            className="rounded-lg object-cover object-center"
            {...getImgProps(image, {
              widths: [280, 560, 840, 1100, 1650],
              sizes: ["(min-width: 600px) 600px", "50vw"],
            })}
          />
        }
      />
    </>
  );
};

export default CourseDescription;
