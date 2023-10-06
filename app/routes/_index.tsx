import type { MetaFunction } from "@remix-run/node";
import { LandingBlock, YogaInfoBlock } from "~/components";
import { getSeo, getUrl } from "~/utils/seo";

export const meta: MetaFunction = ({ location }) => {
  return [
    ...getSeo({
      title: "Pratiquer le yoga avec Delphine Leblanc",
      url: getUrl(location),
    }),
  ];
};

export default function Index() {
  return (
    <main className="w-full">
      <LandingBlock />
      <YogaInfoBlock />
    </main>
  );
}
