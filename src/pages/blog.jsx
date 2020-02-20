import React from 'react';
import Layout from '../components/layout';

const BlogIndexPage = () => (
  <Layout
    title="Blog"
    description="Teddy Byron's blog."
    pathname="blog"
  >
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title is-1">Blog</h1>
      </div>
    </section>
  </Layout>
);

export default BlogIndexPage;
