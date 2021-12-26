import React from 'react'
import { Helmet } from 'react-helmet'

import { useSiteMetadata } from '../../hooks'

export interface HeadProps {
  title?: string
  description?: string
  path?: string
  meta?: JSX.Element[]
}

const Head = ({
  title = '',
  description,
  path = '',
  meta = []
}: HeadProps): JSX.Element => {
  const siteMetadata = useSiteMetadata()

  // Set metadata using props or hook.
  const data = {
    title: title.length > 0
      ? `${title} | ${siteMetadata.title}`
      : siteMetadata.title,
    description: description ?? siteMetadata.description,
    path: path.length > 0
      ? `${siteMetadata.siteUrl}/${path}`
      : siteMetadata.siteUrl
  }

  return (
    <Helmet>
      <html lang='en' className='h-full bg-black text-white' />
      <body className='h-full' />
      <title>{data.title}</title>
      <meta charSet='UTF-8' />
      <meta name='author' content={siteMetadata.author} />
      <meta name='description' content={data.description} />
      <meta name='url' content={data.path} />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
        // FIXME: mobile zoom - maximum-scale=1?
      />
      <meta name='color-scheme' content={siteMetadata.themeColor} />
      <meta property='og:title' content={data.title} />
      <meta property='og:description' content={data.description} />
      <meta property='og:url' content={data.path} />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_US' />
      {meta}
    </Helmet>
  )
}

export default Head
