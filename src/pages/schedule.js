import React from "react";
import { Layout, SEO, BookingSection } from "../components";
import useShopifyCourses from "../hooks/useShopifyCourses";
import { Link } from "gatsby";
import { ONLINE_CATEGORY, STUDIO_CATEGORY } from "../utils/constants";

const Schedule = () => {
  const courses = useShopifyCourses();
  return (
    <Layout mainCentered={false}>
      <SEO title="Programme" />
      <h1 className="mt-12 text-gray-800 text-2xl font-semibold">
        Programme des cours
      </h1>
      <div className="mt-2 pb-3 text-gray-800 text-base font-normal leading-normal">
        <p>Vous pouvez réserver des cours en ligne ou en studio.</p>
        <p>
          Pour obtenir un{" "}
          <span className="font-medium">cours d’essai gratuit</span>,
          contactez-moi{" "}
          <Link
            className="text-purple-600 hover:text-purple-800 font-semibold"
            to="/contact"
          >
            ici
          </Link>
          .
        </p>
      </div>
      <BookingSection
        title="En ligne"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium."
        courses={courses.filter(
          (course) => course.category === ONLINE_CATEGORY,
        )}
      />
      <BookingSection
        title="En studio"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium."
        courses={courses.filter(
          (course) => course.category === STUDIO_CATEGORY,
        )}
      />
    </Layout>
  );
};

export default Schedule;
