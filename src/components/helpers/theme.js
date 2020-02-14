import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colorPrimary: '#ffffff',
  colorSecondary: '#3500d3',
  colorTertiary: '#240090',
  colorQuaternary: '#190061',
  colorQuinary: '#0c0032',
  colorSucccess: '#00c853',
  colorDanger: '#d50000',
  colorWarning: '#ff6d00',
  colorInfo: '#304ffe',
  colorBackground: '#282828',
  colorDark: '#212121'
}

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
