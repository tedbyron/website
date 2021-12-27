import React from 'react'

import { Convert, Heading, Layout, Section } from '../components'

export default (): JSX.Element => (
  <Layout
    title='Convert'
    description='Simple conversions for data, colors, and images.'
    path='convert'
  >
    <Section>
      <Heading as='h1' className='text-center'>Convert</Heading>
      <Convert.NumbersModule />
      <Convert.ColorsModule />
    </Section>
  </Layout>
)
