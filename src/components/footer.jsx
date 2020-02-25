import React from 'react';

const Footer = () => (
  <footer className="footer has-background-white">
    <div className="content has-text-centered">
      <div className="columns is-mobile">
        <div className="column has-text-right-desktop">
          <span>Website content</span>
          <span className="is-hidden-mobile" aria-hidden="true">: </span>
          <br className="is-hidden-tablet" />
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" className="has-text-link">CC BY-NC-SA 4.0</a>
        </div>
        <div className="column has-text-left-desktop">
          <span>Source code</span>
          <span className="is-hidden-mobile" aria-hidden="true">: </span>
          <br className="is-hidden-tablet" />
          <a href="https://raw.githubusercontent.com/tedbyron/tedbyron.com/master/license">MIT License</a>
        </div>
      </div>

      <a href="https://github.com/tedbyron/tedbyron.com">
        See the source code on GitHub →
      </a>
    </div>
  </footer>
);

export default Footer;
