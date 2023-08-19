import { Link } from "@remix-run/react";
import Button from "./button";

const Announcement = () => (
  <div className="flex w-full justify-center bg-gradient-to-r from-purple-600 to-red-600 p-4 text-base font-medium text-white">
    <p className="">
      Planning de cours allégé en Septembre (vacances).{" "}
      <Button
        as={Link}
        variant="link"
        colorScheme="white"
        size="base"
        responsive={false}
        to="/schedule/"
        prefetch="intent"
        className="group"
      >
        En savoir plus
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="inline-block h-5 w-5 transition-transform duration-300 ease-in group-hover:scale-110 group-hover:duration-150 group-hover:ease-out motion-reduce:transition-none motion-reduce:group-hover:transform-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </Button>
    </p>
  </div>
);

export default Announcement;
