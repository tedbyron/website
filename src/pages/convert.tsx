import React from 'react'

import { Layout, Section } from '../components'
import { NumbersModule } from '../components/convert'

export default (): JSX.Element => (
  <Layout
    title='Convert'
    description='Simple conversions for data, colors, and images.'
    path='convert'
  >
    <Section>
      <NumbersModule />
    </Section>
  </Layout>
)
