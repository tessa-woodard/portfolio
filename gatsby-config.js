/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Tessa Woodard | UI/UX Front End Developer`,
    description: `Explore the personal portfolio of Tessa Woodard, a UI/UX Front End Developer committed to designing stunning and user-friendly web applications.`,
    author: `Tessa Woodard`,
    siteUrl: `https://tessawoodard.com`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
  ],
}
