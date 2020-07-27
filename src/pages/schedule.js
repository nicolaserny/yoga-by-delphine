import React from "react";
import { Layout, SEO } from "../components";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    allShopifyProduct {
      nodes {
        title
        description
        variants {
          price
        }
        shopifyId
        productType
      }
    }
  }
`;

const Schedule = ({ data }) => (
  <Layout>
    <SEO title="Programme" />
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </Layout>
);

export default Schedule;
