import React from 'react'
import styled from 'styled-components'

const Heading1 = styled.h1`
  color: ${props => props.theme.colorPrimary};
`

export const H1 = ({ children }) => (
  <Heading1>{children}</Heading1>
)
