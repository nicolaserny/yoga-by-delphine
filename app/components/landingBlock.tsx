import { Link } from "react-router";
import Button from "./button";
import Illustration from "./illustration";
import Quote from "./quote";

const LandingBlock = () => (
  <div className="width-constraints">
    <div className="flex items-stretch justify-between pt-10 pb-16 xl:pt-0">
      <div className="flex flex-col sm:w-3/5 sm:pr-6 lg:w-1/2 xl:pr-2">
        <div className="flex grow flex-col justify-center">
          <h1 className="text-left font-serif text-3xl leading-tight font-bold text-gray-800 lg:text-4xl xl:text-5xl">
            Pratiquer le yoga <br />
            <span className="text-left font-serif text-3xl leading-tight font-bold text-purple-600 lg:text-4xl xl:text-5xl">
              avec Delphine Leblanc
            </span>
          </h1>
          <p className="mt-3 text-left font-sans text-base leading-relaxed font-normal text-gray-700">
            Retrouvez votre alignement naturel et vivez avec cet alignement sur
            tous les plans : physique, énergétique, mental et émotionnel.
          </p>
          <p className="mt-3 text-left font-sans text-base leading-relaxed font-normal text-gray-700">
            Attendez-vous à avoir la tête en bas, les mains par terre, les
            jambes levées le tout sans prise de tête et dans la bonne humeur.
          </p>
          <p className="mt-3 text-left font-sans text-base leading-relaxed font-normal text-gray-700">
            Les cours sont pour tout le monde. Pas besoin d'être souple ou
            athlétique.{" "}
            <span className="font-medium text-gray-800">
              Venez comme vous êtes!
            </span>
          </p>
          <div className="flex">
            <Button
              as={Link}
              variant="solid"
              colorScheme="red"
              to="/schedule"
              prefetch="intent"
              className="mt-4"
              size="large"
            >
              Réserver un cours
            </Button>
          </div>
        </div>
        <Quote className="hidden xl:block" />
      </div>
      <div className="hidden sm:inline-block sm:w-2/5 lg:ml-3 lg:w-1/2">
        <Illustration className="w-full" />
      </div>
    </div>
    <Quote className="mb-5 md:mb-8 lg:mb-16 xl:mb-0 xl:hidden" />
  </div>
);

export default LandingBlock;
