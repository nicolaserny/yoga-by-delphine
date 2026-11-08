import { useState } from "react";
import {
  type LoaderFunctionArgs,
  type MetaFunction,
  Link,
  useLoaderData,
} from "react-router";
import { BookingSection, PageTitle } from "../components";
import AnchorLink from "~/components/anchorLink";
import Button from "~/components/button";
import StudioBanner from "~/components/studioBanner";
import { type YogaProduct, getCoursesFromApi } from "~/models/courses.server";
import { parseCourseDate } from "~/utils/date";
import { getBuyerIP } from "~/utils/netlify-context";
import { getSeo, getUrl } from "~/utils/seo";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const buyerIP = getBuyerIP(context);
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

type Filter = "all" | "online" | "studio" | "other";

const filters: Array<{ id: Filter; label: string }> = [
  { id: "all", label: "Tous les cours" },
  { id: "online", label: "En ligne" },
  { id: "studio", label: "En studio" },
  { id: "other", label: "Autres" },
];

const InfoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm leading-normal text-gray-800 shadow-sm">
    <span className="mt-0.5 shrink-0 text-purple-600" aria-hidden="true">
      {icon}
    </span>
    <div>
      <p className="font-semibold text-gray-900">{title}</p>
      {children}
    </div>
  </div>
);

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function ScheduleRoute() {
  const coursesData = useLoaderData<typeof loader>();
  const courses = normalizeCourses(coursesData);
  const [filter, setFilter] = useState<Filter>("all");
  const show = (id: Filter) => filter === "all" || filter === id;

  return (
    <main className="width-constraints">
      <PageTitle>Programme des cours de Yoga</PageTitle>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-800">
        Réservez vos cours en ligne, ou rejoignez les cours en studio avec
        l'association Asepgi92.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <InfoCard
          title="En ligne ou en studio"
          icon={
            <svg {...iconProps}>
              <rect x="3" y="5" width="18" height="12" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          }
        >
          Cours en direct sur Zoom ou à Issy-les-Moulineaux.
        </InfoCard>
        <InfoCard
          title="Annulation gratuite"
          icon={
            <svg {...iconProps}>
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
          }
        >
          Sans frais jusqu'à 24h avant le début du cours.
        </InfoCard>
        <InfoCard
          title="Cours d'essai et privés"
          icon={
            <svg {...iconProps}>
              <path d="M20 12v8H4v-8M2 7h20v5H2zM12 22V7M12 7H8a2.5 2.5 0 110-5c2 0 4 5 4 5zM12 7h4a2.5 2.5 0 100-5c-2 0-4 5-4 5z" />
            </svg>
          }
        >
          Sur demande,{" "}
          <AnchorLink as={Link} to="/contact">
            contactez-moi
          </AnchorLink>
          .
        </InfoCard>
      </div>

      <div className="bg-light/95 sticky top-0 z-10 -mx-8 mt-6 border-b border-gray-200 px-8 py-3 backdrop-blur lg:-mx-20 lg:px-20 xl:-mx-10 xl:px-10">
        <div
          role="group"
          aria-label="Filtrer les cours"
          className="flex [scrollbar-width:none] gap-2 overflow-x-auto"
        >
          {filters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
              className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:outline-hidden ${
                filter === id
                  ? "border-purple-600 bg-purple-600 font-semibold text-white"
                  : "border-gray-300 bg-white text-gray-800 hover:border-purple-600 hover:text-purple-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div>
        {show("online") && (
          <BookingSection
            id="online"
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
        )}
        {show("studio") && (
          <BookingSection
            id="studio"
            title="En studio"
            description={
              <>
                64 promenade du Verger
                <br />
                92130 Issy-les-Moulineaux
              </>
            }
            courses={courses.filter((course) => course.category === "studio")}
            hideBuy
            banner={<StudioBanner />}
            noCoursesMessage={
              <span>
                Information et inscription auprès de l'association{" "}
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
        )}
        {show("other") && (
          <BookingSection
            id="other"
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
        )}
      </div>

      <aside className="mb-8 flex flex-col gap-4 rounded-2xl bg-purple-100 p-6 sm:flex-row sm:items-center sm:justify-between lg:mb-12 lg:px-8">
        <div>
          <p className="text-lg font-semibold text-purple-900">
            Une question, un besoin particulier&nbsp;?
          </p>
          <p className="mt-1 text-base leading-relaxed text-gray-800">
            Cours d'essai, cours privés ou autres formules d'abonnement&nbsp;:
            écrivez-moi, je vous réponds rapidement.
          </p>
        </div>
        <Button
          as={Link}
          to="/contact"
          variant="outline"
          colorScheme="purple"
          responsive={false}
          className="bg-white text-center sm:shrink-0"
        >
          Contactez-moi
        </Button>
      </aside>
    </main>
  );
}

export default ScheduleRoute;
