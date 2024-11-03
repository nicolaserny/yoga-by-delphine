import { parse } from "date-fns";
import { fr } from "date-fns/locale";
import type { YogaProduct } from "~/models/courses.server";

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
