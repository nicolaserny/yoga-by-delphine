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
    `gatsby-plugin-postcss`,
  ],
};
