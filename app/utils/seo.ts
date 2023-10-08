import type { MetaDescriptor } from "@netlify/remix-runtime";
import type { Location } from "@remix-run/react";

const defaultTitle = "Yoga by Delphine";
const defautDescription =
  "Je suis Delphine Leblanc, professeur de Yoga - Réservez vos cours de hatha yoga, vinyasa, yoga-balles et running yoga - 2 options : en ligne sur Zoom ou en studio sur Paris";
export const siteUrl = "https://www.yogabydelphine.com";

export function getSeo(metadata: {
  title?: string;
  description?: string;
  url: string;
}): MetaDescriptor[] {
  const title = metadata.title
    ? `${metadata.title} - ${defaultTitle}`
    : defaultTitle;
  const description = metadata.description || defautDescription;
  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content: "yoga, cours en ligne, cours en studio, Paris",
    },
    { name: "image", content: `${siteUrl}/ogimage.png` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@nicolaserny" },
    { name: "twitter:creator", content: "@nicolaserny" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${siteUrl}/ogimage.png` },
    { name: "twitter:alt", content: title },
    { property: "og:image", content: `${siteUrl}/ogimage.png` },
    { property: "og:image:secure_url", content: `${siteUrl}/ogimage.png` },
    { property: "og:url", content: metadata.url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
  ];
}

export function getUrl(location: Location) {
  const pathname = location.pathname;
  return `${siteUrl}${pathname === "/" ? "" : pathname}`;
}
