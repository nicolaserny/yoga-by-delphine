import type { ImageBuilder } from "~/images";

export async function getBlurredDataUrl(imageBuilder: ImageBuilder) {
  const blurredImageUrl = imageBuilder({
    quality: "auto",
    format: "webp",
    resize: { width: 100 },
    effect: { name: "blur", value: 1000 },
  });
  const response = await fetch(blurredImageUrl);
  if (!response.ok) {
    return undefined;
  }
  const buffer = await response.arrayBuffer();
  const data = Buffer.from(buffer).toString("base64");
  return `data:image/webp;base64,${data}`;
}
