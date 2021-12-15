import React from 'react'

import { Heading, Layout, Section } from '../components'

export default (): JSX.Element => (
  <Layout
    title='About'
    description='About Teddy Byron.'
    path='about'
  >
    <Section>
      <Heading as='h1' className='text-center'>About</Heading>
    </Section>
  </Layout>
)
