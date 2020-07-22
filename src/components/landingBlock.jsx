import React from "react";
import Illustration from "./illustration";
import Quote from "./quote";

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
      <Quote />
    </div>
    <Illustration className="inline-block w-1/2" />
  </div>
);

export default LandingBlock;
