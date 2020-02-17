import React from 'react'
import styled from 'styled-components'
import Theme from './theme'
import MDX from './mdx'

const Layout = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colorBackground};
`

export default ({ children }) => (
  <Theme>
    <MDX>
      <Layout>
        {children}
      </Layout>
    </MDX>
  </Theme>
)
