import React from 'react';
import Layout from '../components/layout';

const ProjectsIndexPage = () => (
  <Layout
    title="Projects"
    description="Teddy Byron's projects."
    pathname="projects"
  >
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title is-1">Projects</h1>
      </div>
    </section>
  </Layout>
);

export default ProjectsIndexPage;
