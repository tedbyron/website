import React, { useState } from 'react'
// import type { ChangeEvent } from 'react'

import Module from './module'
import { useLocalStorage, useLocalStorageNumber } from '../../hooks'

interface Rgb {
  red: number
  green: number
  blue: number
}
interface Rgba extends Rgb {
  alpha: number
}

interface Hsl {
  hue: number
  saturation: number
  lightness: number
}
interface Hsla extends Hsl {
  alpha: number
}

const hexToRgb = (hex: string): Rgb => {
  const red = parseInt(hex.slice(1, 3), 16)
  const green = parseInt(hex.slice(3, 5), 16)
  const blue = parseInt(hex.slice(5, 7), 16)

  return { red, green, blue }
}
// const hexToHsl = (): Hsl => {}

const ColorsModule = (): JSX.Element => {
  const [color, setColor] = useLocalStorage('color', '#bd93f9')
  const [alpha, setAlpha] = useLocalStorageNumber('alpha', 1)

  const [rgba, setRgba]: [Rgba, React.Dispatch<React.SetStateAction<Rgba>>] = useState()
  const [hsla, setHsla]: [Hsla, React.Dispatch<React.SetStateAction<Hsla>>] = useState()

  return (
    <Module
      name='Colors'
      color={`text-[${color}]`}
      className='grid grid-cols-[auto_1fr] sm:grid-cols-[repeat(3,auto_1fr)] gap-1'
    >
      <label
        htmlFor='colors-input-hex'
        className='border-2 border-gray rounded-l-md text-center'
      >
        Hex
      </label>
      <input
        type='text'
        id='colors-input-hex'
        name='colors'
        value={color}
        onFocus={e => e.target.select()}
        className='min-w-0 sm:mr-1 bg-black border-2 border-gray rounded-r-md'
      />

      <label
        htmlFor='colors-input-rgba'
        className='sm:ml-1 border-2 border-gray rounded-l-md text-center'
      >
        RGBA
      </label>
      <input
        type='text'
        id='colors-input-rgba'
        name='colors'
        value={rgba}
        onFocus={e => e.target.select()}
        className='min-w-0 sm:mr-1 bg-black border-2 border-gray rounded-r-md'
      />

      <label
        htmlFor='colors-input-hsla'
        className='sm:ml-1 border-2 border-gray rounded-l-md text-center'
      >
        HSLA
      </label>
      <input
        type='text'
        id='colors-input-hsla'
        name='colors'
        value={hsla}
        onFocus={e => e.target.select()}
        className='min-w-0 bg-black border-2 border-gray rounded-r-md'
      />
    </Module>
  )
}

export default ColorsModule
