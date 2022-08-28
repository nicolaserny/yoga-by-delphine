import type { BlurredDataUrls } from "~/models/images.server";
import { useMatchesData } from "~/utils";

export const useBlurDataUrls = (routeId: string) => {
  const data = useMatchesData(routeId);
  return {
    blurDataUrls: data?.blurDataUrls as BlurredDataUrls,
  };
};
