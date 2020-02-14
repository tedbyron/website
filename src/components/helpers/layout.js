import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import 'normalize.css'
import Theme from './theme'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  *:focus {

  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }
`

const Layout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colorBackground};
`

export default ({ children }) => (
  <>
    <GlobalStyle/>
    <Theme>
      <Layout>
        {children}
      </Layout>
    </Theme>
  </>
)
