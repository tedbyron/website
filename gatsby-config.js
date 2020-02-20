const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Teddy Byron`,
    author: `Teddy Byron`,
    description: `Teddy Byron's website and blog.`,
    siteUrl: `https://tedbyron.com`
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tedbyron.com`,
        short_name: `tedbyron.com`,
        start_url: `/`,
        // TODO: background_color: `#ffffff`,
        // TODO: theme_color: `#3030ff`,
        display: `standalone`,
        // TODO: icon: `src/images/icon.png`
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        purgeOnly: `/style.scss`
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 75
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: path.join(__dirname, `static`, `assets`)
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.join(__dirname, `src`, `pages`)
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`
  ]
}
