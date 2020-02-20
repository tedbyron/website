import React from 'react';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title is-1">Teddy Byron</h1>
        {/* <h2 className="subtitle"></h2> */}

        <a href="https://github.com/tedbyron/tedbyron.com" className="button is-link is-light is-centered">
          <span className="icon">
            <i className="fab fa-github" />
          </span>
          <span>tedbyron.com</span>
        </a>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
