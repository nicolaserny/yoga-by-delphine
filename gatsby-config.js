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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `400i`, `500`, `600`, `700`],
          },
          {
            family: `Merriweather`,
            variants: [`700`],
          },
        ],
      },
    },
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
