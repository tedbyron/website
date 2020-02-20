import React from 'react'
import { Layout } from '../components'

const AboutPage = () => (
  <Layout
    title="About"
    description="About Teddy Byron."
    pathname="about"
  >
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title is-1">About</h1>
      </div>
    </section>
  </Layout>
)

export default AboutPage
