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
  <section className={classify('container p-2 md:p-6', className)}>
    {children}
  </section>
)

export default Section
