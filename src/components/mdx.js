import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import * as Elements from './elements'

export default ({ children }) => (
  <MDXProvider
    components={{
      a: Elements.Button,
      h1: Elements.H1
    }}
  >
    {children}
  </MDXProvider>
)
