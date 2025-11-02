import {
  type LoaderFunctionArgs,
  type MetaFunction,
  Link,
  useLoaderData,
} from "react-router";
import { BookingSection, PageTitle } from "../components";
import AnchorLink from "~/components/anchorLink";
import { type YogaProduct, getCoursesFromApi } from "~/models/courses.server";
import { parseCourseDate } from "~/utils/date";
import { getSeo, getUrl } from "~/utils/seo";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const buyerIP = (context.ip as string) || undefined;
  const courses = await getCoursesFromApi(buyerIP);
  return courses;
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
  const coursesData = useLoaderData<typeof loader>();
  const courses = normalizeCourses(coursesData);
  return (
    <main className="width-constraints">
      <PageTitle>Programme des cours de Yoga</PageTitle>
      <div className="mt-2 pb-1 text-base leading-normal font-normal text-gray-800 lg:pb-3">
        <p>Vous pouvez réserver des cours en ligne ou en studio.</p>
        <p>Annulation sans frais jusqu'à 24h avant le début du cours.</p>
        <p>
          Pour obtenir un <span className="font-medium">cours d’essai</span>, ou{" "}
          <span className="font-medium">des cours privés</span>{" "}
          <AnchorLink as={Link} to="/contact">
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
              64 promenade du Verger
              <br />
              92130 Issy-les-Moulineaux
            </>
          }
          courses={courses.filter((course) => course.category === "studio")}
          noCoursesMessage={
            <span>
              Information et inscription auprès de l’association{" "}
              <AnchorLink
                href="https://asepgi92.fr/yoga/"
                target="_blank"
                rel="noreferrer noopener"
                size="base"
                responsive={true}
              >
                Asepgi92
              </AnchorLink>
            </span>
          }
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
