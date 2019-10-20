/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "backroads",
    description:
      "explore awesome worldwide tours and discover what makes each of them unique.",
    author: "@Jonny",
    data: {
      name: "john",
      age: 24,
    },
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-styled-components`],
}
