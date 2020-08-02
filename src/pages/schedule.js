import React from "react";
import { Layout, SEO } from "../components";
import useShopifyCourses from "../hooks/useShopifyCourses";
import { Link } from "gatsby";

const Schedule = () => {
  const courses = useShopifyCourses();
  return (
    <Layout mainCentered={false}>
      <SEO title="Programme" />
      <h1 className="mt-12 text-gray-800 text-2xl font-semibold">
        Programme des cours
      </h1>
      <div className="mt-2 text-gray-800 text-base font-normal leading-normal">
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
      <div className="w-full h-px mt-6 mb-4 bg-gray-200" />
      <pre>{JSON.stringify(courses, null, 2)}</pre>
    </Layout>
  );
};

export default Schedule;
