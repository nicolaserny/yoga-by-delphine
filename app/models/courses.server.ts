import { getSiteUrl } from "~/utils/misc.server";

export type CourseType = "REGULAR" | "SUBSCRIPTION" | "CARD";
export type CourseCategory =
  | "online"
  | "studio"
  | "other_private"
  | "other_subscription"
  | "park";

export type YogaProduct = {
  id: string;
  type: CourseType;
  title: string;
  duration?: string;
  description: string;
  datetime: Date | string;
  price: number;
  category: CourseCategory;
  shopifyId: string;
};

export async function getCoursesFromApi(): Promise<Array<YogaProduct>> {
  const url = getSiteUrl();
  const response = await fetch(`${url}/api/courses`);
  if (!response.ok) {
    return [];
  }
  return await response.json();
}