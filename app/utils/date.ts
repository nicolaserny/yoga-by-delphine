import { isValid, parse } from "date-fns";
import { fr } from "date-fns/locale";
import type { YogaProduct } from "~/models/courses.server";

/** Returns the course date when it is a valid Date, otherwise null (cards, private lessons). */
export function getValidCourseDate(course: YogaProduct): Date | null {
  if (course.category === "other_private") {
    return null;
  }
  return course.datetime instanceof Date && isValid(course.datetime)
    ? course.datetime
    : null;
}

export function parseCourseDate(course: YogaProduct): Date | string {
  let format = undefined;
  switch (course.type) {
    case "REGULAR":
      format = "dd/MM/yyyy à HH:mm";
      break;
    case "SUBSCRIPTION":
      format = "MM/yyyy";
      break;
  }
  if (format) {
    return parse(course.datetime as string, format, new Date(), {
      locale: fr,
    });
  }
  return course.datetime;
}
