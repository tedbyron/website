import React from 'react'
import type { PropsWithChildren } from 'react'

import { classify } from '../utils'

const enum HeadingLevel {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

type HeadingProps = PropsWithChildren<{
  className?: string
  as: keyof typeof HeadingLevel
}>

/**
 * A heading element.
 */
const Heading = ({
  className,
  as,
  children
}: HeadingProps): JSX.Element => {
  switch (as) {
    case HeadingLevel.h1:
      className = classify('text-4xl md:text-6xl', className)
      break
    case HeadingLevel.h2:
      className = classify('text-2xl md:text-4xl', className)
      break
    case HeadingLevel.h3:
      className = classify('text-xl', className)
      break
    case HeadingLevel.h4:
      className = classify('text-base', className)
      break
    case HeadingLevel.h5:
      className = classify('text-sm', className)
      break
    case HeadingLevel.h6:
      className = classify('text-xs', className)
      break
    default:
      throw new Error('Heading component has a missing or invalid `as` prop.')
  }

  return React.createElement(
    as,
    { className: classify('font-serif font-bold leading-normal', className) },
    children
  )
}

export default Heading
