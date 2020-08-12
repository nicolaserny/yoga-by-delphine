import React from "react";
import { Layout, SEO, LandingBlock, YogaInfoBlock } from "../components";

const Index = () => (
  <Layout mainWithFullWidth={true}>
    <SEO title="Accueil" />
    <LandingBlock />
    <YogaInfoBlock />
  </Layout>
);

export default Index;
