/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: `Epta Layers`,
    description: `A SINGLE-POINT ENTERPRISE SOLUTIONS PROVIDER
We work with IT world leaders to deliver
tailor-made solutions.`,
    author: `@gatsbyjs`,
    siteUrl: `https://eptalayersmain.gatsbyjs.io/`,
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/apple.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
