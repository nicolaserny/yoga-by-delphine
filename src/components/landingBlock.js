import React from "react";
import Illustration from "./illustration";
import Quote from "./quote";
import { Link } from "gatsby";

const LandingBlock = () => (
  <div className="width-constraints">
    <div className="flex justify-between items-stretch pb-16">
      <div className="flex flex-col sm:w-3/5 lg:w-1/2 pr-6 xl:pr-24 ">
        <div className="flex flex-col justify-center flex-grow">
          <h1 className="text-gray-800 text-left text-3xl lg:text-4xl xl:text-5xl leading-tight font-serif font-bold">
            Yoga et Méditation
          </h1>
          <h1 className="text-purple-600 text-left text-3xl lg:text-4xl xl:text-5xl leading-tight font-serif font-bold">
            Erat ut egestas
          </h1>
          <p className="text-gray-700 text-left text-sm lg:text-base xl:text-lg font-sans font-normal leading-relaxed mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
            architecto consequuntur. Fuga qui fugit sit ullam minima hic? Quos,
            ipsum similique. Perferendis repudiandae magni repellendus ipsam
            porro laudantium odio animi.
          </p>
          <div className="flex">
            <Link to="/schedule/" className="primary mt-4 text-lg xl:text-xl">
              Réserver un cours
            </Link>
          </div>
        </div>
        <Quote className="hidden xl:block" />
      </div>
      <div className="hidden sm:inline-block  sm:w-2/5 lg:w-1/2">
        <Illustration className="w-full" />
      </div>
    </div>
    <Quote className="mb-5 md:mb-8 lg:mb-16 xl:mb-0 xl:hidden" />
  </div>
);

export default LandingBlock;
