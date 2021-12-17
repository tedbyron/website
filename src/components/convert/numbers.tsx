import React, { useEffect, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

import Module from './module'

const Radices = {
  2: 'bin',
  8: 'oct',
  10: 'dec',
  16: 'hex'
} as const

const NumbersModule = (): JSX.Element => {
  const [num, setNum] = useState(42)

  const [leftRadix, setLeftRadix] = useState(10)
  const [left, setLeft] = useState(num.toString(leftRadix))

  const [rightRadix, setRightRadix] = useState(2)
  const [right, setRight] = useState(num.toString(rightRadix))

  useEffect(() => {
    setLeft(num.toString(leftRadix))
  }, [num, leftRadix])

  useEffect(() => {
    setRight(num.toString(rightRadix))
  }, [num, rightRadix])

  const changeRadix = (e: ChangeEvent<HTMLSelectElement>, f: Function): void => {
    f(Object.keys(Radices).find(key => key === e.target.value))
  }

  const inputNum = (e: FormEvent<HTMLInputElement>, radix: number): void => {
    const n = Number.parseInt(e.target.value, radix)
    if (!isNaN(n)) {
      setNum(n)
    } else {
      e.target.value
    }
  }

  return (
    <Module name='Numbers' color='border-green' className='grid grid-cols-[auto_1fr] sm:grid-cols-[repeat(2,auto_1fr)] gap-1'>
      <select
        name='numbers-select-left'
        value={leftRadix}
        onChange={e => changeRadix(e, setLeftRadix)}
        className='bg-black border-2 border-gray rounded-l-md capitalize'
      >
        {Object.entries(Radices).filter(([k]) => k !== `${rightRadix}`).map(([k, v]) => (
          <option key={k} value={k}>{v}</option>
        ))}
      </select>

      <input
        type='text'
        id='numbers-input-left'
        name='numbers'
        value={left}
        onChange={e => inputNum(e, leftRadix)}
        className='min-w-0 sm:mr-1 bg-black border-2 border-gray rounded-r-md'
      />

      <select
        name='numbers-select-right'
        value={rightRadix}
        onChange={e => changeRadix(e, setRightRadix)}
        className='sm:ml-1 bg-black border-2 border-gray rounded-l-md capitalize'
      >
        {Object.entries(Radices).filter(([k]) => k !== `${leftRadix}`).map(([k, v]) => (
          <option key={k} value={k}>{v}</option>
        ))}
      </select>

      <input
        type='text'
        id='numbers-input-right'
        name='numbers'
        value={right}
        onChange={e => inputNum(e, rightRadix)}
        className='min-w-0 bg-black border-2 border-gray rounded-r-md'
      />
    </Module>
  )
}

export default NumbersModule
