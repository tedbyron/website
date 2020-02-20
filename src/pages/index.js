import React from 'react'
import Layout from '../components/layout'

const Index = () => (
  <Layout>
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title is-1">Teddy Byron</h1>
        <h2 className="subtitle">Site is under construction; updates soon! <span role="img" aria-label="grimacing emoji">🙂</span></h2>

        <a href="https://github.com/tedbyron/tedbyron.com" className="button is-link is-light is-centered">
          <span className="icon">
            <i className="fab fa-github"></i>
          </span>
          <span>tedbyron.com</span>
        </a>
      </div>
    </section>
  </Layout>
)

export default Index
