import React from "react";
import Illustration from "./illustration";

const LandingBlock = () => (
  <div className="w-full h-full flex justify-between items-stretch pb-16">
    <div className="flex flex-col w-1/2 pr-24 ">
      <div className="flex flex-col justify-center flex-grow">
        <h1 className="text-gray-800 text-left text-5xl leading-tight font-serif font-bold">
          Yoga et Méditation
        </h1>
        <h1 className="text-purple-600 text-left text-5xl leading-tight font-serif font-bold">
          Erat ut egestas
        </h1>
        <p className="text-gray-700 text-left text-lg font-sans font-normal leading-relaxed mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          architecto consequuntur. Fuga qui fugit sit ullam minima hic? Quos,
          ipsum similique. Perferendis repudiandae magni repellendus ipsam porro
          laudantium odio animi.
        </p>
        <div className="flex">
          <button className="primary mt-4">Réserver un cours</button>
        </div>
      </div>
      <blockquote>
        <p className="text-gray-700 text-lg text-left font-sans font-normal italic leading-relaxed mb-1">
          If you want to have ongoing joy and fulfillment in your life, the
          secret is just one word – progress. Progress equals happiness.
        </p>
        <span className="text-purple-500 text-base text-left font-sans font-semibold">
          Tony Robbins
        </span>
      </blockquote>
    </div>
    <Illustration className="inline-block w-1/2" />
  </div>
);

export default LandingBlock;