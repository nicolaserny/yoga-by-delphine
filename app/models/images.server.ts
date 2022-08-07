export type BlurredDataUrls = Record<string, string | undefined>;

export type BlurredDataUrlsLoader = {
  blurDataUrls: BlurredDataUrls;
};

// We want to use the time to live feature of ondemand builders to cache blurredDataUrls.
export async function getBlurredDataUrlsFromApi(
  imageIds: Array<string>,
): Promise<BlurredDataUrls> {
  const url = process.env.URL || "http://localhost:3000";
  const response = await fetch(
    `${url}/api/blurred-images/${imageIds
      .map((e) => encodeURIComponent(e))
      .join("/")}`,
  );
  if (!response.ok) {
    return {} as BlurredDataUrls;
  }
  return await response.json();
}
