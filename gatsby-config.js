require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Yoga by Delphine`,
    description: `Je suis Delphine Leblanc, professeur de Yoga - Réservez vos cours de hatha yoga, vinyasa, yoga-balles et running yoga - 2 options : en ligne sur Zoom ou en studio sur Paris`,
    siteUrl: "https://www.yogabydelphine.com",
    author: `Nicolas Erny`,
    twitterUsername: `@nicolaserny`,
    ogimage: "/ogimage.png",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yoga by Delphine`,
        short_name: `Yoga by Delphine`,
        start_url: `/`,
        background_color: `#F5F7FA`,
        theme_color: `#653CAD`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.yogabydelphine.com`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-shopify",
      options: {
        storeUrl: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
        password: process.env.GATSBY_SHOPIFY_PASSWORD,
        shopifyConnections: ["collections"],
        downloadImages: false,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/error", "/sent"],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-remove-serviceworker`,
    // Enable HTTP/2 push for critical assets.
    "gatsby-plugin-netlify",
  ],
};
