import React, { useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'

import Module from './module'
import { classify } from '../../utils'

const RADICES = {
  2: 'bin',
  8: 'oct',
  10: 'dec',
  16: 'hex'
} as const

const handleRadixChange = (e: ChangeEvent<HTMLSelectElement>, setRadix: Function): void => {
  setRadix(Number.parseInt(e.target.value, 10))
}

const INVALID = 'border-red focus:border-red focus:ring-red'

const NumbersModule = (): JSX.Element => {
  const [num, setNum] = useState(Number.parseInt(localStorage.getItem('num') ?? '42', 10))

  const [leftRadix, setLeftRadix] = useState(Number.parseInt(localStorage.getItem('leftRadix') ?? '10', 10))
  const [left, setLeft] = useState(num.toString(leftRadix))
  const [leftValid, setLeftValid] = useState(true)

  const [rightRadix, setRightRadix] = useState(Number.parseInt(localStorage.getItem('rightRadix') ?? '2', 10))
  const [right, setRight] = useState(num.toString(rightRadix))
  const [rightValid, setRightValid] = useState(true)

  useEffect(() => {
    localStorage.setItem('num', num.toString())
  }, [num])
  useEffect(() => {
    localStorage.setItem('leftRadix', leftRadix.toString())
  }, [leftRadix])
  useEffect(() => {
    localStorage.setItem('rightRadix', rightRadix.toString())
  }, [rightRadix])

  useEffect(() => {
    setLeft(num.toString(leftRadix))
  }, [num, leftRadix])
  useEffect(() => {
    setRight(num.toString(rightRadix))
  }, [num, rightRadix])

  const handleNumChange = (
    e: ChangeEvent<HTMLInputElement>,
    radix: number,
    setValue: Function,
    setValid: Function
  ): void => {
    const n = Number.parseInt(e.target.value, radix)
    if (!isNaN(n)) {
      setNum(n)
      setValid(true)
    } else {
      setValue(e.target.value)
      setValid(false)
    }
  }

  return (
    <Module
      name='Numbers'
      color='text-orange'
      className='grid grid-cols-[auto_1fr] sm:grid-cols-[repeat(2,auto_1fr)] gap-1'
    >
      <select
        name='numbers-select-left'
        value={leftRadix}
        onChange={e => handleRadixChange(e, setLeftRadix)}
        className='bg-black border-2 border-gray rounded-l-md capitalize'
      >
        {Object.entries(RADICES).map(([k, v]) => (
          <option key={k} value={k}>{v}</option>
        ))}
      </select>

      <input
        type='text'
        name='numbers-input-left'
        value={left}
        onChange={e => handleNumChange(e, leftRadix, setLeft, setLeftValid)}
        onFocus={e => e.target.select()}
        className={classify(
          'min-w-0 sm:mr-1 bg-black border-2 border-gray rounded-r-md',
          leftValid ? '' : INVALID
        )}
      />

      <select
        name='numbers-select-right'
        value={rightRadix}
        onChange={e => handleRadixChange(e, setRightRadix)}
        className='sm:ml-1 bg-black border-2 border-gray rounded-l-md capitalize'
      >
        {Object.entries(RADICES).map(([k, v]) => (
          <option key={k} value={k}>{v}</option>
        ))}
      </select>

      <input
        type='text'
        name='numbers-input-right'
        value={right}
        onChange={e => handleNumChange(e, rightRadix, setRight, setRightValid)}
        onFocus={e => e.target.select()}
        className={classify(
          'min-w-0 bg-black border-2 border-gray rounded-r-md',
          rightValid ? '' : INVALID
        )}
      />
    </Module>
  )
}

export default NumbersModule
