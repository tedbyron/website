const path = require('path')

const HOST = 'tedbyron.com'
const URL = 'https://tedbyron.com'
const DESCRIPTION = 'Teddy Byron\'s website.'
const THEME_COLOR = '#282a36'

module.exports = {
  siteMetadata: {
    title: 'Teddy Byron',
    author: 'Teddy Byron <ted@tedbyron.com>',
    description: DESCRIPTION,
    siteUrl: URL,
    themeColor: THEME_COLOR
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
        description: DESCRIPTION,
        lang: 'en',
        display: 'minimal-ui',
        start_url: '/',
        background_color: THEME_COLOR,
        theme_color: THEME_COLOR,
        icon: path.join('src', 'images', 'favicon.png'),
        cache_busting_mode: 'none'
      }
    },
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify
    'gatsby-plugin-netlify',
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-offline
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: [path.join('**', 'icons', '*')]
        }
      }
    },
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss
    'gatsby-plugin-postcss',
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-preload-fonts
    'gatsby-plugin-preload-fonts',
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-purgecss
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
        // https://purgecss.com/configuration.html#options
        purgeCSSOptions: {
          content: [path.join(__dirname, 'src', '**', '!(*.d).{js,jsx,ts,tsx,md,mdx}')],
          fontFace: true,
          safelist: ['___gatsby', 'gatsby-focus-wrapper']
        }
      }
    },
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet
    'gatsby-plugin-react-helmet',
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
      }
    },
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap
    'gatsby-plugin-sitemap',
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript
    'gatsby-plugin-typescript',
    // https://www.gatsbyjs.com/plugins/gatsby-source-filesystem
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
