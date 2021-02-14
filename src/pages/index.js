import React from "react";
import { Layout, SEO, LandingBlock, YogaInfoBlock } from "../components";

const Index = () => (
  <Layout mainWithFullWidth={true}>
    <SEO metadata={{ title: "Pratiquer le yoga avec Delphine Leblanc" }} />
    <LandingBlock />
    <YogaInfoBlock />
  </Layout>
);

export default Index;
