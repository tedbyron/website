import React from 'react';
import PropTypes from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faGitlab, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Footer from './footer';
import Head from './head';
import Header from './header';

import '../styles/global.scss';

library.add(faGithub, faGitlab, faInstagram, faEnvelope);

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skipIsFocused: false,
    };
    this.main = React.createRef();
  }

  handleSkipFocus = () => {
    this.setState((state) => ({
      skipIsFocused: !state.skipIsFocused,
    }));
  }

  handleSkipClick = () => {
    this.main.current.focus();
  }

  render() {
    const {
      title,
      author,
      description,
      pathname,
      children,
    } = this.props;
    const { skipIsFocused } = this.state;

    return (
      <>
        <Head
          title={title}
          author={author}
          description={description}
          pathname={pathname}
        />

        {/* TODO: style */}
        <button type="button" className={`button${skipIsFocused ? '' : ' is-sr-only'}`} onFocus={this.handleSkipFocus} onBlur={this.handleSkipFocus} onClick={this.handleSkipClick}>
          Skip to main content
        </button>

        <Header />
        <main ref={this.main} role="main">
          {children}
        </main>
        <Footer />
      </>
    );
  }
}

export default Layout;

Layout.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  title: null,
  author: null,
  description: null,
  pathname: null,
};
