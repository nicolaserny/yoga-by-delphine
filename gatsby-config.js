require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Yoga by Delphine`,
    description: `Je suis Delphine Leblanc, professeur de Yoga - Réservez vos cours de hatha yoga, vinyasa et running yoga - 2 options : en ligne sur Zoom ou en studio sur Paris`,
    siteUrl: "https://yogabydelphine.com",
    author: `Nicolas Erny`,
    twitterUsername: `@nicolaserny`,
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "src/images",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.yogabydelphine.com`,
      },
    },
    {
      resolve: "gatsby-transformer-cloudinary",
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: "yoga-by-delphine",
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_API_TOKEN,
        apiVersion: "2020-07",
        includeCollections: ["shop", "content"],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: ["/error", "/sent"],
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map((edge) => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `weekly`,
              priority: 0.7,
            };
          }),
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-remove-serviceworker`,
    // Enable HTTP/2 push for critical assets.
    "gatsby-plugin-netlify",
  ],
};
