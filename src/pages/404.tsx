import React from 'react'

import { Heading, Layout, Section } from '../components'

export default (): JSX.Element => (
  <Layout
    title='404'
    description='404 not found.'
    path='404'
  >
    <Section>
      <Heading as='h1' className='text-center'>404</Heading>
      <Heading as='h2' className='text-center'>That route doesn't exist...</Heading>
    </Section>
  </Layout>
)
