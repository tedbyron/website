import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  color: ${props => props.theme.colorPrimary};
  background-color: ${props => props.theme.colorSecondary};
`

export default ({ children, href }) => (
  <Button href={href}>{children}</Button>
)
