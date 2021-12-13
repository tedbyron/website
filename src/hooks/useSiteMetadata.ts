import { graphql, useStaticQuery } from 'gatsby'

interface SiteMetadata {
  title: string
  author: string
  description: string
  siteUrl: string
  themeColor: string
}

interface SiteMetadataQuery {
  site: {
    siteMetadata: SiteMetadata
  }
}

/**
 * Get site metadata using a [Gatsby useStaticQuery hook](https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/).
 *
 * @returns The site metadata.
 */
const useSiteMetadata = (): SiteMetadata => {
  const { site }: SiteMetadataQuery = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
          themeColor
        }
      }
    }
  `)

  return site.siteMetadata
}

export default useSiteMetadata
