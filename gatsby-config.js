require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Yoga by Delphine`,
    description: `Yoga by Delphine`,
    author: `Nicolas Erny`,
    twitterUsername: `@nicolaserny`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "yoga-by-delphine",
        accessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_API_TOKEN,
        apiVersion: "2020-07",
        includeCollections: ["shop", "content"],
      },
    },
    `gatsby-plugin-postcss`,
  ],
};
