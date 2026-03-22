import { Link } from "react-router";
import Button from "./button";
import Illustration from "./illustration";

const LandingBlock = () => (
  <div className="width-constraints">
    <div className="flex flex-col items-center gap-8 py-12 md:gap-10 md:py-16 lg:flex-row lg:items-center lg:gap-12 lg:py-20 xl:gap-24 xl:py-24">
      <div className="flex flex-1 flex-col lg:flex-4">
        <div className="flex grow flex-col justify-center">
          <h1 className="font-sans text-3xl leading-[1.1] font-bold text-balance text-gray-900 md:text-4xl lg:text-5xl">
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
              className="mt-6 sm:mt-8"
              size="hero"
            >
              Réserver votre cours
            </Button>
          </div>
        </div>
      </div>
      <Illustration className="w-full max-w-md self-center lg:flex-3" />
    </div>
  </div>
);

export default LandingBlock;
