require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteMetadata = {
  title: `Python Cheat Sheet`,
  siteUrl: `https://pysheet.io`,
  gitHubUrl: `https://github.com/lukemiloszewski/pysheet`,
  siteTitle: `Python Cheat Sheet`,
  titleTemplate: `%s · Modern web development hints and tips.`,
  description: `Everyday commands, config, hints and tips used for modern web development.`,
  image: `/favicon.png`,
  twitterUsername: `@lukemiloszewski`,
  authorName: `Luke Miloszewski`,
  faviconPng: `./static/favicon.png`,
  backgroundColour: `#f7f0eb`,
  themeColour: `#a2466c`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
}

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `@chakra-ui/gatsby-plugin`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/sheets`,
        name: `sheets`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Jost`,
          `Open Sans`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Python Cheat Sheet`,
        short_name: `Python Cheat Sheet`,
        start_url: `/`,
        background_color: siteMetadata.backgroundColour,
        theme_color: siteMetadata.themeColour,
        display: `standalone`,
        icon: siteMetadata.faviconPng,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
