import React from 'react'
import type { PropsWithChildren } from 'react'

import { classify } from '../../utils'

type ModuleProps = PropsWithChildren<{
  /** A `border-[color]` tailwind class. */
  color: string
  className?: string
  /** The name of the module. */
  name: string
}>

/**
 * Converter module.
 */
const Module = ({
  color,
  className = '',
  children,
  name
}: ModuleProps): JSX.Element => (
  <form name={name}>
    <fieldset className={classify('p-3 border-2 rounded-lg', color, className)}>
      <legend className={classify('mx-2 px-2 border-2 rounded-md font-serif font-bold', color)}>{name}</legend>
      {children}
    </fieldset>
  </form>
)

export default Module
