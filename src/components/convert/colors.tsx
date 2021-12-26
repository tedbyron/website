import React, { useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'

import Module from './module'

const radices = {
  2: 'bin',
  8: 'oct',
  10: 'dec',
  16: 'hex'
} as const

const ColorsModule = (): JSX.Element => {
  const [num, setNum] = useState(Number.parseInt(localStorage.getItem('convert-color') ?? '42', 10))

  const [leftRadix, setLeftRadix] = useState(10)
  const [left, setLeft] = useState(num.toString(leftRadix))

  const [rightRadix, setRightRadix] = useState(2)
  const [right, setRight] = useState(num.toString(rightRadix))

  useEffect(() => {
    localStorage.setItem('convert-color', num.toString())
  }, [num])

  useEffect(() => {
    setLeft(num.toString(leftRadix))
  }, [num, leftRadix])

  useEffect(() => {
    setRight(num.toString(rightRadix))
  }, [num, rightRadix])

  const handleRadixChange = (e: ChangeEvent<HTMLSelectElement>, f: Function): void => {
    f(Number.parseInt(e.target.value, 10))
  }

  const handleNumChange = (e: ChangeEvent<HTMLInputElement>, radix: number, f: Function): void => {
    const n = Number.parseInt(e.target.value, radix)
    if (!isNaN(n)) {
      setNum(n)
    } else {
      f(e.target.value)
    }
  }

  return (
    <Module
      name='Colors'
      color='text-purple'
      className='grid grid-cols-[auto_1fr] sm:grid-cols-[repeat(2,auto_1fr)] gap-1'
    >
      <select
        name='colors-select-left'
        value={leftRadix}
        onChange={e => handleRadixChange(e, setLeftRadix)}
        className='bg-black border-2 border-gray rounded-l-md capitalize'
      >
        {Object.entries(radices).map(([k, v]) => (
          <option key={k} value={k}>{v}</option>
        ))}
      </select>

      <input
        type='text'
        id='colors-input-left'
        name='colors'
        value={left}
        onChange={e => handleNumChange(e, leftRadix, setLeft)}
        className='min-w-0 sm:mr-1 bg-black border-2 border-gray rounded-r-md'
      />

      <select
        name='colors-select-right'
        value={rightRadix}
        onChange={e => handleRadixChange(e, setRightRadix)}
        className='sm:ml-1 bg-black border-2 border-gray rounded-l-md capitalize'
      >
        {Object.entries(radices).map(([k, v]) => (
          <option key={k} value={k}>{v}</option>
        ))}
      </select>

      <input
        type='text'
        id='colors-input-right'
        name='colors'
        value={right}
        onChange={e => handleNumChange(e, rightRadix, setRight)}
        className='min-w-0 bg-black border-2 border-gray rounded-r-md'
      />
    </Module>
  )
}

export default ColorsModule
