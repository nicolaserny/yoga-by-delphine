import React from "react";
import Illustration from "./illustration";
import Quote from "./quote";
import { Link } from "gatsby";

const LandingBlock = () => (
  <div className="width-constraints">
    <div className="flex justify-between items-stretch pb-16 pt-10 xl:pt-0">
      <div className="flex flex-col sm:w-3/5 lg:w-1/2 sm:pr-6 xl:pr-2 ">
        <div className="flex flex-col justify-center flex-grow">
          <h1 className="text-gray-800 text-left text-2xl lg:text-3xl xl:text-5xl leading-tight font-serif font-bold">
            Les bienfaits du Yoga <br />
            <span className="text-purple-600 text-left text-2xl lg:text-3xl xl:text-5xl leading-tight font-serif font-bold">
              pour se mouvoir en conscience
            </span>
          </h1>
          <p className="text-gray-700 text-left text-base font-sans font-normal leading-relaxed mt-3">
            Retrouvez votre alignement naturel et vivre avec cet alignement sur
            tous les plans : physique, énergétique, mental et émotionnel.
          </p>
          <p className="text-gray-700 text-left text-base font-sans font-normal leading-relaxed mt-3">
            Attendez-vous à avoir la tête en bas, les mains par terre, les
            jambes levées le tout sans prise de tête et dans la bonne humeur.
          </p>
          <p className="text-gray-700 text-left text-base font-sans font-normal leading-relaxed mt-3">
            Les cours sont pour tout le monde. Pas besoin d'être souple ou
            athlétique.{" "}
            <span className="text-purple-600 font-medium">
              Venez comme vous êtes!
            </span>
          </p>
          <div className="flex">
            <Link to="/schedule/" className="primary mt-4 text-lg xl:text-xl">
              Réserver un cours
            </Link>
          </div>
        </div>
        <Quote className="hidden xl:block" />
      </div>
      <div className="hidden sm:inline-block  sm:w-2/5 lg:w-1/2 lg:ml-3">
        <Illustration className="w-full" />
      </div>
    </div>
    <Quote className="mb-5 md:mb-8 lg:mb-16 xl:mb-0 xl:hidden" />
  </div>
);

export default LandingBlock;
