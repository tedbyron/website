import React from 'react'

import { Heading, Layout, Section } from '../components'
import { NumbersModule } from '../components/convert'

export default (): JSX.Element => (
  <Layout>
    <Section>
      <Heading as='h1' className='text-center'>Teddy Byron</Heading>
      <NumbersModule />
    </Section>
  </Layout>
)
