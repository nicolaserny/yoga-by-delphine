import { Link } from "react-router";
import Button from "./button";
import Illustration from "./illustration";

const LandingBlock = () => (
  <div className="width-constraints">
    <div className="flex items-center justify-between gap-12 py-20 lg:gap-24 xl:py-24">
      <div className="flex flex-col sm:flex-4">
        <div className="flex grow flex-col justify-center">
          <h1 className="font-sans text-[48px] leading-[1] font-bold text-gray-900">
            Le yoga qui vous fait bouger, respirer et briller
          </h1>
          <p className="mt-6 max-w-[610px] text-left font-sans text-lg leading-relaxed text-gray-800">
            Plongez dans la pratique de yoga dynamique de Delphine Leblanc et
            découvrez comment elle peut transformer votre vie.
          </p>
          <div className="flex">
            <Button
              as={Link}
              variant="solid"
              colorScheme="purple"
              to="/schedule"
              prefetch="intent"
              className="mt-8"
              size="hero"
            >
              Réserver votre cours
            </Button>
          </div>
        </div>
      </div>
      <Illustration className="hidden h-auto w-full shrink-0 sm:flex sm:flex-3" />
    </div>
  </div>
);

export default LandingBlock;
