import * as React from 'react'
import type { PropsWithChildren } from 'react'

import { classify } from '../utils'

const HeadingLevel = {
  h1: 1,
  h2: 2,
  h3: 3,
  h4: 4,
  h5: 5,
  h6: 6
} as const

type HeadingProps = PropsWithChildren<{
  className?: string
  level: HeadingLevel
}>

/**
 * A `heading` element.
 */
const Heading = ({
  className = '',
  level,
  children
}: HeadingProps): JSX.Element => {
  return React.createElement()
}

export default Heading
