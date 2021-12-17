import React from 'react'
import type { PropsWithChildren } from 'react'

import { classify } from '../utils'

type ModuleProps = PropsWithChildren<{
  borderColor: string
  className?: string
  name: string
}>

/**
 * Converter module.
 */
const Module = ({
  borderColor,
  className = '',
  children,
  name
}: ModuleProps): JSX.Element => (
  <form name={name}>
    <fieldset className={classify('p-3 border-2 rounded-lg', `border-${borderColor}`, className)}>
      <legend className={classify('mx-2 px-2 border-2 rounded-md font-bold', `border-${borderColor}`)}>{name}</legend>
      {children}
    </fieldset>
  </form>
)

export default Module
