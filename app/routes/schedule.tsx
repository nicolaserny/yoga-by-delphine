import {
  type DataFunctionArgs,
  type LoaderFunction,
  json,
} from "@netlify/remix-runtime";
import { type MetaFunction, Link, useLoaderData } from "@remix-run/react";
import { BookingSection, PageTitle } from "../components";
import AnchorLink from "~/components/anchorLink";
import { type YogaProduct, getCoursesFromApi } from "~/models/courses.server";
import { parseCourseDate } from "~/utils/date";
import { getSeo, getUrl } from "~/utils/seo";

export const loader: LoaderFunction = async ({ context }: DataFunctionArgs) => {
  const buyerIP = (context.ip as string) || undefined;
  const courses = await getCoursesFromApi(buyerIP);
  return json<Array<YogaProduct>>(courses);
};

export const meta: MetaFunction = ({ location }) => [
  ...getSeo({ title: "Programme des cours de Yoga", url: getUrl(location) }),
];

function normalizeCourses(courses: Array<YogaProduct>) {
  return courses.map((course) => ({
    ...course,
    datetime: parseCourseDate(course),
  }));
}

function ScheduleRoute() {
  const coursesData = useLoaderData() as Array<YogaProduct>;
  const courses = normalizeCourses(coursesData);
  return (
    <main className="width-constraints">
      <PageTitle>Programme des cours de Yoga</PageTitle>
      <div className="mt-2 pb-1 text-base font-normal leading-normal text-gray-800 lg:pb-3">
        <p>Vous pouvez réserver des cours en ligne ou en studio.</p>
        <p>Annulation sans frais jusqu'à 24h avant le début du cours.</p>
        <p>
          Pour obtenir un <span className="font-medium">cours d’essai</span>, ou{" "}
          <span className="font-medium">des cours privés</span>{" "}
          <AnchorLink as={Link} to="/contact/">
            contacter-moi
          </AnchorLink>
          .
        </p>
      </div>

      <div className="mb-3 lg:mb-5">
        <BookingSection
          title="En ligne"
          description={
            <span>
              Les cours sont en direct sur la plateforme{" "}
              <AnchorLink
                href="https://zoom.us"
                target="_blank"
                rel="noreferrer noopener"
              >
                Zoom
              </AnchorLink>
            </span>
          }
          courses={courses.filter(
            (course) =>
              course.category === "online" ||
              course.category === "other_subscription",
          )}
        />
        <BookingSection
          title="En studio"
          description={
            <>
              Funny Club J2A Judo et Multis-sport <br />
              50 Rue Sébastien Mercier, 75015 Paris
            </>
          }
          courses={courses.filter((course) => course.category === "studio")}
        />
        <BookingSection
          title="Autres"
          description={
            <>
              <p>Cours privés ou en extérieur</p>
              <p>Autres formules d'abonnement</p>
            </>
          }
          courses={courses.filter(
            (course) =>
              course.category === "other_private" ||
              course.category === "other_subscription" ||
              course.category === "park",
          )}
        />
      </div>
    </main>
  );
}

export default ScheduleRoute;
