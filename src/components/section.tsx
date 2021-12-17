import React from 'react'
import type { PropsWithChildren } from 'react'

import { classify } from '../utils'

type SectionProps = PropsWithChildren<{
  className?: string
}>

/**
 * `section` element.
 */
const Section = ({
  className = '',
  children
}: SectionProps): JSX.Element => (
  <section className={classify('container px-3 pt-3 sm:px-6 sm:pt-6', className)}>
    {children}
  </section>
)

export default Section
