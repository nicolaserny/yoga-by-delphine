import React from "react";
import BlurrableImage from "./blurrableImage";
import { blurDataUrls } from "~/generated/blurDataUrls";
import { type ImageBuilder, getImgProps } from "~/images";

export type CourseDescriptionProps = {
  title: string;
  description: string | JSX.Element;
  description2: string | JSX.Element;
  image: ImageBuilder;
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
        <h3 className="lg:0 mt-5 mb-2 text-lg font-semibold text-gray-800 md:mt-0 lg:mb-4 lg:text-xl">
          {title}
        </h3>
        <p className="text-base leading-relaxed font-normal text-gray-800">
          {description}
        </p>
        <p className="mt-4 text-base leading-relaxed font-normal text-gray-800">
          {description2}
        </p>
      </div>
      <BlurrableImage
        className="aspect-h-4 aspect-w-6 w-full"
        blurDataUrl={blurDataUrls[image.id as keyof typeof blurDataUrls]}
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
