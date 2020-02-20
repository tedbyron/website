import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        {'Content licensed '}
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>
        {'. '}
        {'Source code licensed '}
        <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPLv3</a>
        .
      </p>
      <a href="https://github.com/tedbyron/tedbyron.com">
        See my website&apos;s source code on GitHub
      </a>
    </div>
  </footer>
);

export default Footer;
