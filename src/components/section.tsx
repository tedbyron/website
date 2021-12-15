import React from 'react'
import type { PropsWithChildren } from 'react'

import { classify } from '../utils'

type SectionProps = PropsWithChildren<{
  className?: string
}>

/**
 * A `section` element.
 */
const Section = ({
  className = '',
  children
}: SectionProps): JSX.Element => (
  <section className={classify('container px-3 sm:px-6', className)}>
    {children}
  </section>
)

export default Section
