import { compareAsc, format } from "date-fns";
import { fr } from "date-fns/locale";
import React from "react";
import Course from "./course";
import type { YogaProduct } from "~/models/courses.server";
import { getValidCourseDate } from "~/utils/date";

type CourseGroup = { key: string; label?: string; courses: YogaProduct[] };

/**
 * Undated items (cards, private lessons) come first without heading, then one
 * group per month: the monthly subscription first, then sessions by date.
 */
function groupCourses(courses: YogaProduct[]): CourseGroup[] {
  const undated: YogaProduct[] = [];
  const byMonth = new Map<string, YogaProduct[]>();
  for (const course of courses) {
    const date = getValidCourseDate(course);
    if (!date) {
      undated.push(course);
      continue;
    }
    const key = format(date, "yyyy-MM");
    byMonth.set(key, [...(byMonth.get(key) ?? []), course]);
  }
  const groups: CourseGroup[] = [];
  if (undated.length > 0) {
    groups.push({ key: "undated", courses: undated });
  }
  [...byMonth.keys()].sort().forEach((key) => {
    const items = byMonth.get(key) ?? [];
    const subscriptions = items.filter((c) => c.type === "SUBSCRIPTION");
    const sessions = items
      .filter((c) => c.type !== "SUBSCRIPTION")
      .sort((a, b) =>
        compareAsc(
          getValidCourseDate(a) as Date,
          getValidCourseDate(b) as Date,
        ),
      );
    groups.push({
      key,
      label: format(getValidCourseDate(items[0]) as Date, "MMMM yyyy", {
        locale: fr,
      }),
      courses: [...subscriptions, ...sessions],
    });
  });
  return groups;
}

const BookingSection: React.FC<{
  title: string;
  description: string | React.ReactElement;
  courses: YogaProduct[];
  noCoursesMessage?: string | React.ReactElement;
  id?: string;
  banner?: React.ReactElement;
  hideBuy?: boolean;
}> = ({
  title,
  description,
  courses,
  noCoursesMessage,
  id,
  banner,
  hideBuy = false,
}) => {
  const groups = groupCourses(courses);
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-gray-200 py-8 last:border-b-0 lg:flex lg:flex-row lg:gap-12 lg:py-12"
    >
      <div className="mb-4 w-full lg:mb-0 lg:w-[30%] lg:shrink-0">
        <div className="lg:sticky lg:top-28">
          <h2 className="flex items-center gap-2.5 text-xl leading-normal font-semibold text-gray-900 lg:text-2xl">
            {title}
            <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-sm font-semibold text-purple-800">
              {courses.length}
            </span>
          </h2>
          <div className="mt-2 text-base leading-relaxed font-normal text-gray-700">
            {description}
          </div>
        </div>
      </div>
      <div className="flex w-full min-w-0 flex-col gap-3 lg:flex-1">
        {courses.length === 0 ? (
          <p className="rounded-xl border border-dashed border-gray-300 bg-white p-5 text-base leading-relaxed font-medium text-gray-800">
            {noCoursesMessage || "Aucun cours pour le moment"}.
          </p>
        ) : (
          banner
        )}
        {groups.map((group) => (
          <React.Fragment key={group.key}>
            {group.label && (
              <h3 className="mt-3 border-b-2 border-purple-100 pb-2 text-sm font-bold tracking-wider text-purple-800 uppercase first:mt-0">
                {group.label}
              </h3>
            )}
            {group.courses.map((course) => (
              <Course
                key={course.shopifyId}
                course={course}
                hideBuy={hideBuy}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default BookingSection;
