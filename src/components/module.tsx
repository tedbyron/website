import React from 'react'
import type { PropsWithChildren } from 'react'

import { classify } from '../utils'

type ModuleProps = PropsWithChildren<{
  autoComplete?: 'on' | 'off'
  className?: string
  name: string
}>

/**
 * Converter module.
 */
const Module = ({
  autoComplete = 'on',
  className = '',
  children,
  name
}: ModuleProps): JSX.Element => (
  <form name={name} autoComplete={autoComplete} className={classify('', className)}>
    <fieldset className='p-3 pt-1 border-2 border-green rounded-lg '>
      <legend className='mx-2 px-2 border-2 border-green rounded-md font-bold'>Module</legend>
      {children}
    </fieldset>
  </form>
)

export default Module
