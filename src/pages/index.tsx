import React, { useEffect, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

import { Heading, Layout, Module, Section } from '../components'

const Radices: Record<number, string> = {
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
    }
  }

  return (
    <Module name='Numbers' borderColor='green' className='flex'>
      <select
        name='numbers-select-left'
        value={leftRadix}
        onChange={e => changeRadix(e, setLeftRadix)}
        className='mr-1 bg-black border-2 border-gray rounded-l-md capitalize'
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
        onInput={e => inputNum(e, leftRadix)}
        className='mr-3 bg-black border-2 border-gray rounded-r-md flex-grow'
      />

      <select
        name='numbers-select-right'
        value={rightRadix}
        onChange={e => changeRadix(e, setRightRadix)}
        className='mr-1 bg-black border-2 border-gray rounded-l-md capitalize'
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
        onInput={e => inputNum(e, rightRadix)}
        className='bg-black border-2 border-gray rounded-r-md flex-grow'
      />
    </Module>
  )
}

export default (): JSX.Element => (
  <Layout>
    <Section>
      <Heading as='h1' className='text-center'>Teddy Byron</Heading>
      <NumbersModule />
    </Section>
  </Layout>
)
