import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { BlurrableImage } from "~/components/BlurrableImage";
import { getImgProps, images } from "~/images";
import type { BlurredDataUrlsResponse } from "~/models/images.server";
import { getBlurredDataUrlsFromApi } from "~/models/images.server";

type LoaderData = {
  blurDataUrls: BlurredDataUrlsResponse;
};

export const loader: LoaderFunction = async () => {
  const blurDataUrls = await getBlurredDataUrlsFromApi([images.course2.id]);
  return json<LoaderData>({ blurDataUrls }, { status: 200 });
};

export default function Index() {
  const { blurDataUrls } = useLoaderData() as LoaderData;
  return (
    <>
      <h1>Test2</h1>
      <main>
        <BlurrableImage
          blurDataUrl={blurDataUrls[images.course2.id]}
          className="aspect-h-2 aspect-w-5 w-1/2"
          img={
            <img
              title="Test"
              className="rounded-lg object-cover object-center"
              {...getImgProps(images.course2, {
                widths: [280, 560, 840, 1100, 1650, 2500, 2100, 3100],
                sizes: ["50vw"],
              })}
            />
          }
        />
      </main>
    </>
  );
}
