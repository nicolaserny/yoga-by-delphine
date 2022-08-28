import { Link } from "@remix-run/react";

const Announcement = () => (
  <div className="w-full flex justify-center p-4 text-white font-medium text-base bg-gradient-to-r from-purple-600 to-red-600">
    <p className="">
      Découvrez le planning de rentrée!{" "}
      <Link
        className="text-white hover:no-underline font-medium underline focus:no-underline focus:outline-none focus:ring-1 focus:ring-white"
        to="/schedule/"
        prefetch="intent"
      >
        En savoir plus...
      </Link>
    </p>
  </div>
);

export default Announcement;
