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
        <h3 className="lg:0 mb-2 mt-5 text-lg font-semibold text-gray-800 md:mt-0 lg:mb-4 lg:text-xl">
          {title}
        </h3>
        <p className="text-base font-normal leading-relaxed text-gray-800">
          {description}
        </p>
        <p className="mt-4 text-base font-normal leading-relaxed text-gray-800">
          {description2}
        </p>
      </div>
      <BlurrableImage
        className="aspect-h-4 aspect-w-6 w-full"
        blurDataUrl={blurDataUrl}
        img={
          <img
            className="rounded-lg object-cover object-center"
            loading="lazy"
            {...getImgProps(image, {
              widths: [280, 560, 840, 1100, 1650],
              sizes: [
                "(max-width: 768px) 100vw",
                "(min-width:768px) and (max-width:1200px) 50vw",
                "600px",
              ],
            })}
          />
        }
      />
    </>
  );
};

export default CourseDescription;
