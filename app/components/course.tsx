import { format } from "date-fns";
import { fr } from "date-fns/locale";
import React from "react";
import BuyButton from "./buyButton";
import type { YogaProduct, CourseCategory } from "~/models/courses.server";
import { getValidCourseDate } from "~/utils/date";

function getBuyButtonLabel(course: YogaProduct) {
  if (course.type === "REGULAR") {
    return "Réserver";
  }
  return "Acheter";
}

function formatCourseType(category: CourseCategory) {
  switch (category) {
    case "online":
      return "Zoom";
    case "studio":
      return "Studio";
    case "other_private":
      return "A domicile";
    case "other_subscription":
      return "Zoom / Extérieur";
    case "park":
      return "Parc André Citroën";
    default:
      return "Zoom";
  }
}

function formatTagLabel(course: YogaProduct) {
  if (course.category === "other_private") {
    return "Privé";
  }
  return course.type === "CARD" ? "Carte" : "Abo";
}

function formatPeriod(course: YogaProduct, date: Date | null) {
  if (course.category === "other_private") {
    return "Cours privés";
  }
  if (date) {
    return format(date, "MMMM yyyy", { locale: fr });
  }
  return typeof course.datetime === "string" ? course.datetime : undefined;
}

function formatTitleField(course: YogaProduct) {
  if (course.type === "REGULAR" && course.duration) {
    return (
      <>
        {course.title}{" "}
        <span className="font-medium text-gray-700">({course.duration})</span>
      </>
    );
  }
  return course.title;
}

const DateBadge: React.FC<{ date: Date }> = ({ date }) => (
  <div
    className="flex w-16 flex-col items-center rounded-lg bg-purple-100 px-1 py-2 text-purple-900 sm:w-[4.5rem]"
    aria-hidden="true"
  >
    <span className="text-2xl leading-none font-bold">
      {format(date, "d", { locale: fr })}
    </span>
    <span className="mt-1 text-xs font-semibold tracking-wide uppercase">
      {format(date, "MMM", { locale: fr })}
    </span>
    <span className="text-xs text-purple-700">
      {format(date, "eee", { locale: fr })}
    </span>
  </div>
);

const TagBadge: React.FC<{ label: string }> = ({ label }) => (
  <div
    className="flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100 p-1 text-center text-xs leading-tight font-bold tracking-wide text-purple-900 uppercase sm:h-[4.5rem] sm:w-[4.5rem]"
    aria-hidden="true"
  >
    {label}
  </div>
);

const MetaItem: React.FC<{
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ icon, children }) => (
  <span className="inline-flex items-center gap-1.5">
    <span className="text-gray-700" aria-hidden="true">
      {icon}
    </span>
    {children}
  </span>
);

const ClockIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);

const PinIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const Course: React.FC<{ course: YogaProduct; hideBuy?: boolean }> = ({
  course,
  hideBuy = false,
}) => {
  const date = getValidCourseDate(course);
  const isSession = course.type === "REGULAR" && date !== null;
  const period = isSession ? undefined : formatPeriod(course, date);

  return (
    <article className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-1 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:p-5 xl:gap-x-6 xl:px-8 xl:py-6">
      {isSession && date ? (
        <DateBadge date={date} />
      ) : (
        <TagBadge label={formatTagLabel(course)} />
      )}
      <div className="min-w-0">
        <h4 className="text-base leading-snug font-semibold text-gray-900 xl:text-lg">
          {formatTitleField(course)}
        </h4>
        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm leading-normal text-gray-700">
          {isSession && date && (
            <MetaItem icon={<ClockIcon />}>
              {format(date, "HH'h'mm", { locale: fr })}
            </MetaItem>
          )}
          {period && (
            <MetaItem icon={<CalendarIcon />}>
              <span className="inline-block first-letter:uppercase">
                {period}
              </span>
            </MetaItem>
          )}
          <MetaItem icon={<PinIcon />}>
            {formatCourseType(course.category)}
          </MetaItem>
        </div>
        <p className="mt-1 text-sm leading-normal text-gray-700">
          {course.description}
        </p>
      </div>
      {!hideBuy && (
        <div className="col-span-full mt-3 flex items-center justify-between gap-4 border-t border-gray-100 pt-3 sm:col-auto sm:mt-0 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
          <div className="text-gray-1000 text-2xl leading-none font-bold xl:text-3xl">
            {course.price}
            <span className="text-base font-semibold xl:text-xl">&nbsp;€</span>
          </div>
          <BuyButton
            shopifyId={course.shopifyId}
            variant="solid"
            ariaLabel={`${getBuyButtonLabel(course)} ${course.title}`}
          >
            {getBuyButtonLabel(course)}
          </BuyButton>
        </div>
      )}
    </article>
  );
};

export default Course;
