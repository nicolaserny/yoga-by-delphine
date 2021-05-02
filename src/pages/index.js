import React from "react";
import { Layout, Seo, LandingBlock, YogaInfoBlock } from "../components";

const Index = () => (
  <Layout mainWithFullWidth={true}>
    <Seo metadata={{ title: "Pratiquer le yoga avec Delphine Leblanc" }} />
    <LandingBlock />
    <YogaInfoBlock />
  </Layout>
);

export default Index;
