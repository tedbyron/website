const path = require('path')

const HOST = 'tedbyron.com'
const URL = 'https://tedbyron.com'
const ICON = path.join(__dirname, 'src', 'images', 'icon.png')

module.exports = {
  siteMetadata: {
    title: 'Teddy Byron',
    author: 'Teddy Byron <ted@tedbyron.com>',
    description: 'Teddy Byron\'s website.',
    siteUrl: URL,
    themeColor: '#282a36'
  },
  plugins: [
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-canonical-urls
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: URL,
        stripQueryString: true
      }
    },
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: HOST,
        short_name: HOST,
        description: 'Teddy Byron\'s website and blog.',
        lang: 'en',
        display: 'minimal-ui',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#b86bff',
        icon: ICON
        // TODO: once a little stable, don't bust favicon
        // cache_busting_mode: 'none'
      }
    },
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify
    'gatsby-plugin-netlify',
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-offline
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: [ICON]
        }
      }
    },
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss
    'gatsby-plugin-postcss',
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-preload-fonts
    'gatsby-plugin-preload-fonts',
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet
    'gatsby-plugin-react-helmet',
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap
    'gatsby-plugin-sitemap',
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript
    'gatsby-plugin-typescript',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.join(__dirname, 'src', 'pages')
      }
    },
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-image
    'gatsby-plugin-image',
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp
    'gatsby-plugin-sharp',
    // https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp
    'gatsby-transformer-sharp'
  ]
}
