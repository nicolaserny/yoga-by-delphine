import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { LandingBlock, YogaInfoBlock } from "~/components";
import { images } from "~/images";
import type { BlurredDataUrls } from "~/models/images.server";
import { getBlurredDataUrlsFromApi } from "~/models/images.server";

type LoaderData = {
  blurDataUrls: BlurredDataUrls;
};

export const loader: LoaderFunction = async () => {
  const blurDataUrls = await getBlurredDataUrlsFromApi([
    images["course-1"].id,
    images["course-2"].id,
    images["course-3"].id,
    images["course-4"].id,
    images["course-5"].id,
    images["course-yoga-balles"].id,
    images.course2.id,
  ]);
  return json<LoaderData>({ blurDataUrls }, { status: 200 });
};

export default function Index() {
  return (
    <main className="w-full">
      <LandingBlock />
      <YogaInfoBlock />
    </main>
  );
}
