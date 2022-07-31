export type BlurredDataUrlsResponse = Record<string, string | undefined>;

// We want to use the time to live feature of ondemand builders to cache blurredDataUrls.
export async function getBlurredDataUrlsFromApi(
  imageIds: Array<string>,
): Promise<BlurredDataUrlsResponse> {
  const url = process.env.URL || "http://localhost:3000";
  const response = await fetch(
    `${url}/api/blurred-images/${imageIds
      .map((e) => encodeURIComponent(e))
      .join("/")}`,
  );
  if (!response.ok) {
    return {} as BlurredDataUrlsResponse;
  }
  return await response.json();
}
