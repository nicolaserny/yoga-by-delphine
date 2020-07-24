import React from "react";
import { Layout, SEO, LandingBlock } from "../components";

const Index = () => (
  <Layout className="h-realsm lg:h-real min-h-landing lg:min-h-landinglg">
    <SEO title="Accueil" />
    <LandingBlock />
  </Layout>
);

export default Index;
