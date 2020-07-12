import React from "react";
import { Layout, SEO } from "../components";

const Index = () => (
  <Layout className="h-real">
    <SEO title="Accueil" />
    <header className="w-full">
      <nav className="flex flex-no-wrap items-baseline w-full ">
        <span className="inline-block flex-grow flex-shrink-0 text-gray-800 text-lg font-semibold text-left align-baseline">
          Yoga <span className="text-purple-700">by</span> Delphine
        </span>
        <ul className="flex flex-grow-0 list-none items-baseline">
          <li className="mr-8 font-bold">Accueil</li>
          <li className="mr-8 font-medium">Programme</li>
          <li className="mr-8 font-medium">Cours</li>
          <li className="mr-8 font-medium">A propos</li>
          <li className="mr-8 font-medium">Contact</li>
        </ul>
      </nav>
    </header>
    <h1 className="font-serif text-lg text-gray-1000">🏗 Work in progress</h1>
    <span> footer</span>
  </Layout>
);

export default Index;
