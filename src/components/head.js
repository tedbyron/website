import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

const Head = props => (
  <StaticQuery
    query={query}
    render={
      ({
        site: {
          siteMetadata: {
            defaultTitle,
            defaultAuthor,
            defaultDescription,
            siteUrl,
          }
        }
      }) => {
        const data = {
          title: props.title ? defaultTitle + ` | ` + props.title : defaultTitle,
          author: props.author || defaultAuthor,
          description: props.description || defaultDescription,
          url: props.pathname ? siteUrl + `/` + props.pathname : siteUrl
        }

        return (
          <Helmet
            title={data.title}
            meta={[
              {
                name: `author`,
                content: data.author
              },
              {
                name: `description`,
                content: data.description
              },
              {
                name: `url`,
                content: data.url
              },
              {
                name: `referrer`,
                content: `no-referrer-when-downgrade`
              },
              {
                name: `theme-color`,
                content: `#363636`
              },
              {
                name: `color-scheme`,
                content: `only light`
              },
              {
                name: `og:title`,
                content: data.title
              },
              {
                name: `og:description`,
                content: data.description
              },
              {
                name: `og:url`,
                content: data.url
              },
              {
                name: `og:type`,
                content: `website`
              }
            ].concat(props.meta)}
          />
        )
      }
    }
  />
)

export default Head

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object)
}

Head.defaultProps = {
  title: null,
  description: null,
  pathname: null,
  meta: []
}

const query = graphql`
  query Head {
    site {
      siteMetadata {
        defaultTitle: title
        defaultAuthor: author
        defaultDescription: description
        siteUrl: siteUrl
      }
    }
  }
`
