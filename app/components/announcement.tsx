import { Link } from "@remix-run/react";
import Button from "./button";

const Announcement = () => (
  <div className="flex w-full justify-center bg-gradient-to-r from-purple-600 to-red-600 p-4 text-base font-medium text-white">
    <p className="">
      Le planning de novembre est en ligne !{" "}
      <Button
        as={Link}
        variant="link"
        colorScheme="white"
        size="base"
        responsive={false}
        to="/schedule/"
        prefetch="intent"
      >
        En savoir plus...
      </Button>
    </p>
  </div>
);

export default Announcement;
