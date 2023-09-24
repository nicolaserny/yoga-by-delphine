import { setConfig, buildImageUrl } from "cloudinary-build-url";
import fetch from "@remix-run/web-fetch";
import { images } from "~/images";
import fs from "fs";
import path from "path";

setConfig({
  cloudName: "nicolaspika",
});

export type BlurredDataUrlsResponse = Record<string, string | undefined>;

export async function getBlurredDataUrl(imageId: string) {
  const blurredImageUrl = buildImageUrl(imageId, {
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

const filePath = process.argv[2];

if (!filePath) {
  console.error("No file path provided");
  process.exit(1);
}

async function generate(generatedPath: string) {
  if (fs.existsSync(generatedPath)) {
    fs.unlinkSync(generatedPath);
  }
  if (!fs.existsSync(path.dirname(generatedPath))) {
    fs.mkdirSync(path.dirname(generatedPath), { recursive: true });
  }
  const writeStream = fs.createWriteStream(generatedPath);
  try {
    writeStream.write("export const blurDataUrls = {\n");
    const allImages = Object.values(images).map((image) => image.id);
    const blurredDataUrls = await Promise.all(
      allImages.map(async (imageId) => {
        const dataUrl = await getBlurredDataUrl(imageId);
        return { imageId, dataUrl };
      }),
    );
    blurredDataUrls.forEach(({ dataUrl, imageId }) => {
      writeStream.write(`  "${imageId}": "${dataUrl}",\n`);
    });
    writeStream.write("};\n");
  } catch (e) {
    console.error(e);
  } finally {
    writeStream.end();
  }
}

console.log("Generating blurred data urls...");
generate(filePath);
