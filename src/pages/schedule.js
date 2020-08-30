import React from "react";
import { Layout, SEO, BookingSection, PageTitle } from "../components";
import { useShopifyCourses } from "../hooks";
import { Link } from "gatsby";
import { ONLINE_CATEGORY, STUDIO_CATEGORY } from "../utils/constants";

const Schedule = () => {
  const courses = useShopifyCourses();
  return (
    <Layout>
      <SEO title="Programme des cours de Yoga" />
      <PageTitle>Programme des cours de Yoga</PageTitle>
      <div className="mt-2 pb-1 lg:pb-3 text-gray-800 text-base font-normal leading-normal">
        <p>Vous pouvez réserver des cours en ligne ou en studio.</p>
        <p>Annulation sans frais jusqu'à 24h avant le début du cours.</p>
        <p>
          Pour obtenir un <span className="font-medium">cours d’essai</span>, ou{" "}
          <span className="font-medium">des cours privés</span>{" "}
          <Link
            className="text-purple-600 hover:text-purple-800 font-semibold underline"
            to="/contact/"
          >
            contacter-moi
          </Link>
          .
        </p>
      </div>
      <div className="mb-3 lg:mb-5">
        <BookingSection
          title="En ligne"
          description={
            <span>
              Les cours sont en direct sur la plateforme{" "}
              <a
                className="text-purple-600 hover:text-purple-800 font-semibold underline"
                href="https://zoom.us"
                target="_blank"
                rel="noreferrer noopener"
              >
                Zoom
              </a>
            </span>
          }
          courses={courses.filter(
            (course) => course.category === ONLINE_CATEGORY,
          )}
        />
        <BookingSection
          title="En studio"
          description="IWKA - 7 impasse Crozatier 75012 Paris"
          courses={courses.filter(
            (course) => course.category === STUDIO_CATEGORY,
          )}
        />
      </div>
    </Layout>
  );
};

export default Schedule;
