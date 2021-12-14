import React from 'react'

import { Heading, Layout, Section } from '../components'

export default (): JSX.Element => (
  <Layout
    title='404'
    description='404 not found.'
    path='404'
  >
    {/* TODO */}
    <Section className='mx-auto flex flex-col justify-center items-center'>
      <Heading as='h1' className='inline-block'>404</Heading>
      <Heading as='h2' className='inline-block'>That route doesn't exist...</Heading>
    </Section>
  </Layout>
)
