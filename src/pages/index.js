import React from "react";
import { Layout, SEO, LandingBlock } from "../components";

const Index = () => (
  <Layout className="h-real min-h-landing">
    <SEO title="Accueil" />
    <LandingBlock />
  </Layout>
);

export default Index;
