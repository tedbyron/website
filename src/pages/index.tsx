import React from 'react'

import { Heading, Layout, Module, Section } from '../components'

export default (): JSX.Element => (
  <Layout>
    <Section>
      <Heading as='h1' className='text-center'>Teddy Byron</Heading>
      <Module name='test'><input type='text' placeholder='test' className='text-black' /></Module>
    </Section>
  </Layout>
)
