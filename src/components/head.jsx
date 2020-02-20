import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const Head = ({
  title,
  author,
  description,
  pathname,
  meta,
}) => {
  const { site } = useStaticQuery(graphql`
    query HeadQuery {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
        }
      }
    }
  `);

  const data = {
    title: title ? `${site.siteMetadata.title} | ${title}` : site.siteMetadata.title,
    author: author || site.siteMetadata.author,
    description: description || site.siteMetadata.description,
    url: pathname ? `${site.siteMetadata.siteUrl}/${pathname}` : site.siteMetadata.siteUrl,
  };

  return (
    <Helmet
      title={data.title}
      meta={[
        {
          name: 'author',
          content: data.author,
        },
        {
          name: 'description',
          content: data.description,
        },
        {
          name: 'url',
          content: data.url,
        },
        {
          name: 'referrer',
          content: 'no-referrer-when-downgrade',
        },
        {
          name: 'theme-color',
          content: '#363636',
        },
        {
          name: 'color-scheme',
          content: 'only light',
        },
        {
          name: 'og:title',
          content: data.title,
        },
        {
          name: 'og:description',
          content: data.description,
        },
        {
          name: 'og:url',
          content: data.url,
        },
        {
          name: 'og:type',
          content: 'website',
        },
      ].concat(meta)}
    />
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

Head.defaultProps = {
  title: null,
  author: null,
  description: null,
  pathname: null,
  meta: [],
};
