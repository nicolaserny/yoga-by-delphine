import React from "react";
import { Layout, SEO, LandingBlock, YogaInfoBlock } from "../components";

const Index = () => (
  <Layout mainWithFullWidth={true}>
    <SEO title="Les bienfaits du Yoga" />
    <LandingBlock />
    <YogaInfoBlock />
  </Layout>
);

export default Index;
