import React from 'react';
import PropTypes from 'prop-types';

import Footer from './footer';
import Head from './head';
import Header from './header';

import '../styles/global.scss';

const Layout = ({
  children,
  title,
  author,
  description,
  pathname,
}) => (
  <>
    <Head
      title={title}
      author={author}
      description={description}
      pathname={pathname}
    />
    <Header />
    <main role="main">
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string,
};

Layout.defaultProps = {
  title: null,
  author: null,
  description: null,
  pathname: null,
};
