import React, { useState, useEffect } from 'react'

/**
 * Create a stateful string and also store it in the browser's `localStorage`.
 *
 * @param key The `localStorage` key.
 * @param defaultValue A default value.
 * @returns The string and a function to set it.
 */
export const useLocalStorage = (
  key: string,
  defaultValue: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const browser = typeof window !== 'undefined'

  const [value, setValue] = useState((browser && (localStorage.getItem(key) ?? defaultValue)) || defaultValue)

  useEffect(() => {
    browser && localStorage.setItem(key, value)
  }, [value])

  return [value, setValue]
}

/**
 * Create a stateful number and also store it in the browser's `localStorage`.
 *
 * @param key The `localStorage` key.
 * @param defaultValue A default value.
 * @returns The number and a function to set it.
 */
export const useLocalStorageNumber = (
  key: string,
  defaultValue: number
): [number, React.Dispatch<React.SetStateAction<number>>] => {
  const browser = typeof window !== 'undefined'

  const [value, setValue] = useState((browser && (Number.parseInt(localStorage.getItem(key) ?? defaultValue.toString(), 10))) || defaultValue)

  useEffect(() => {
    browser && localStorage.setItem(key, value.toString())
  }, [value])

  return [value, setValue]
}
