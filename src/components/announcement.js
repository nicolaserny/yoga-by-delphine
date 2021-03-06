import React from "react";
import { Link } from "gatsby";

const Announcement = () => (
  <div className="w-full flex justify-center p-4 text-white font-medium text-base bg-gradient-to-r from-purple-600 to-red-600">
    <p className="">
      Découvrir les nouveaux cours de Yoga-balles à partir du 12 mars 2021.{" "}
      <Link
        className="text-white hover:no-underline font-medium underline focus:no-underline focus:outline-none focus:ring-1 focus:ring-white"
        to="/yoga-balles/"
      >
        En savoir plus...
      </Link>
    </p>
  </div>
);

export default Announcement;
