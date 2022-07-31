import type { TransformerOption } from "@cld-apis/types";
import { setConfig, buildImageUrl } from "cloudinary-build-url";

setConfig({
  cloudName: "nicolaspika",
});
const cloudinaryImagePrefix = "yoga-by-delphine/";

export type ImageBuilder = {
  (transformations?: TransformerOption): string;
  alt: string;
  id: string;
};

export function getImageBuilder(id: string, alt: string = ""): ImageBuilder {
  function imageBuilder(transformations?: TransformerOption) {
    return buildImageUrl(id, { transformations });
  }
  imageBuilder.alt = alt;
  imageBuilder.id = id;
  return imageBuilder;
}

export function getImgProps(
  imageBuilder: ImageBuilder,
  {
    widths,
    sizes,
    transformations,
  }: {
    widths: Array<number>;
    sizes: Array<string>;
    transformations?: TransformerOption;
  },
) {
  const averageSize = Math.ceil(widths.reduce((a, s) => a + s) / widths.length);

  return {
    alt: imageBuilder.alt,
    src: imageBuilder({
      quality: "auto",
      format: "auto",
      ...transformations,
      resize: { width: averageSize, ...transformations?.resize },
    }),
    srcSet: widths
      .map((width) =>
        [
          imageBuilder({
            quality: "auto",
            format: "auto",
            ...transformations,
            resize: { width, ...transformations?.resize },
          }),
          `${width}w`,
        ].join(" "),
      )
      .join(", "),
    sizes: sizes.join(", "),
  };
}

const createImages = <
  ImageType extends Record<string, { id: string; alt: string }>,
>(
  images: ImageType,
) => {
  const imageBuilders: Record<string, ImageBuilder> = {};
  for (const [name, { id, alt }] of Object.entries(images)) {
    imageBuilders[name] = getImageBuilder(`${cloudinaryImagePrefix}${id}`, alt);
  }
  return imageBuilders as { [Name in keyof ImageType]: ImageBuilder };
};

// TODO images with blurredDataUrls add helper method imagesWithBlurredDataUrls
export const images = createImages({
  course2: {
    id: "course-2.jpg",
    alt: "Course2",
  },
  course3: {
    id: "course-3.jpg",
    alt: "Course3",
  },
});
