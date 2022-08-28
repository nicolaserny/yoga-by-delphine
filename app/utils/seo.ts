const defaultTitle = "Yoga by Delphine";
const defautDescription =
  "Je suis Delphine Leblanc, professeur de Yoga - Réservez vos cours de hatha yoga, vinyasa, yoga-balles et running yoga - 2 options : en ligne sur Zoom ou en studio sur Paris";
export const siteUrl = "https://www.yogabydelphine.com";

export function getSeo(metadata: { title?: string; description?: string }) {
  const title = metadata.title
    ? `${metadata.title} - ${defaultTitle}`
    : defaultTitle;
  const description = metadata.description || defautDescription;
  return {
    title: title,
    description: description,
    keywords: "yoga, cours en ligne, cours en studio, Paris",
    image: `${siteUrl}/ogimage.png`,
    "twitter:card": "summary_large_image",
    "twitter:site": "@nicolaserny",
    "twitter:creator": "@nicolaserny",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": `${siteUrl}/ogimage.png`,
    "twitter:alt": title,
    "og:image": `${siteUrl}/ogimage.png`,
    "og:image:secure_url": `${siteUrl}/ogimage.png`,
    "og:url": siteUrl,
    "og:title": title,
    "og:description": description,
  };
}
