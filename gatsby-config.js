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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`, `Merriweather`],
      },
    },
  ],
};
