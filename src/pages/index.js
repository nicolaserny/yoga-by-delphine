import React from "react";
import { Layout, SEO, LandingBlock, YogaInfoBlock } from "../components";

const Index = () => (
  <Layout mainWithFullWidth={true}>
    <SEO title="Un yoga plus intelligent pour une vie plus consciente" />
    <LandingBlock />
    <YogaInfoBlock />
  </Layout>
);

export default Index;
