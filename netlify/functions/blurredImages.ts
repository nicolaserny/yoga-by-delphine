import type { Handler } from "@netlify/functions";
import { builder } from "@netlify/functions";
import { setConfig, buildImageUrl } from "cloudinary-build-url";
import fetch from "@remix-run/web-fetch";

setConfig({
  cloudName: "nicolaspika",
});

export type BlurredDataUrlsResponse = Record<string, string | undefined>;

export async function getBlurredDataUrl(imageId: string) {
  const blurredImageUrl = buildImageUrl(`${imageId}`, {
    transformations: {
      quality: "auto",
      format: "webp",
      resize: { width: 100 },
      effect: { name: "blur", value: 1000 },
    },
  });
  const response = await fetch(blurredImageUrl);
  if (!response.ok) {
    return undefined;
  }
  const buffer = await response.arrayBuffer();
  const data = Buffer.from(buffer).toString("base64");
  return `data:image/webp;base64,${data}`;
}

export async function getBlurredDataUrls(imageIds: Array<string>) {
  const data = await Promise.all(
    imageIds.map(async (imageId) => {
      const blurredDataUrl = await getBlurredDataUrl(imageId);
      return { id: imageId, blurredDataUrl };
    }),
  );
  return data.reduce((acc, curr) => {
    acc[curr.id] = curr.blurredDataUrl;
    return acc;
  }, {} as BlurredDataUrlsResponse);
}
const blurredImagesHandler: Handler = async (event) => {
  const imageIds = event.path
    .replace(new RegExp("/api/blurred-images/"), "")
    .split("/")
    .map((id) => decodeURIComponent(id));
  const blurredDataUrls = await getBlurredDataUrls(imageIds);
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blurredDataUrls),
    ttl: 31536000,
  };
};

const handler = builder(blurredImagesHandler);

export { handler };
