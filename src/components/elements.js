import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.a`
  color: ${props => props.theme.colorPrimary};
  border: 1px solid ${props => props.theme.colorPrimary};
  padding: .5rem;
  text-decoration: none;
  transition: all ${props => props.theme.timeTransition};

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colorSecondary};
  }

  &:focus {
    background-color: ${props => props.theme.colorTertiary};
  }
`

export const Button = ({ children, href }) => (
  <StyledButton href={href}>{children}</StyledButton>
)

const StyledH1 = styled.h1`
  color: ${props => props.theme.colorPrimary};
`

export const H1 = ({ children }) => (
  <StyledH1>{children}</StyledH1>
)
