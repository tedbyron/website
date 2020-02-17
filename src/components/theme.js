import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'normalize.css'

const theme = {
  colorPrimary: `#282828`,
  colorSecondary: `#eeeeee`,
  colorSucccess: `#00c853`,
  colorDanger: `#d50000`,
  colorWarning: `#ff6d00`,
  colorInfo: `#304ffe`,
  colorBackground: `#ffffff`,
  colorDark: `#212121`,
  timeTransition: `.15s`
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }
`

export default ({ children }) => (
  <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
)
