import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { LandingBlock, YogaInfoBlock } from "~/components";
import { images } from "~/images";
import type { BlurredDataUrlsLoader } from "~/models/images.server";
import { getBlurredDataUrlsFromApi } from "~/models/images.server";
import { getSeo } from "~/utils/seo";

export const loader: LoaderFunction = async () => {
  const blurDataUrls = await getBlurredDataUrlsFromApi([
    images["course-1"].id,
    images["course-2"].id,
    images["course-3"].id,
    images["course-4"].id,
    images["course-5"].id,
    images["course-yoga-balles"].id,
  ]);
  return json<BlurredDataUrlsLoader>({ blurDataUrls }, { status: 200 });
};

export const meta: MetaFunction = () => ({
  ...getSeo({ title: "Pratiquer le yoga avec Delphine Leblanc" }),
});

export default function Index() {
  return (
    <main className="w-full">
      <LandingBlock />
      <YogaInfoBlock />
    </main>
  );
}
