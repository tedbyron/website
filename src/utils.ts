type ClassList = string | string[]
type ClassListObject = Record<string, boolean>

/**
 * Generate a string of class names given any number of `string`s, `Array`s of `string`s, or
 * `Objects` with `string` keys and `boolean` values. Performs minimal parsing of class names and
 * does not check their validity.
 *
 * @param args Class names in any form.
 * @returns A string of classnames.
 */
export const classify = (...args: Array<ClassList | ClassListObject>): string => {
  const tmp: string[] = []

  args.forEach(a => {
    if (Array.isArray(a)) {
      tmp.push(
        ...a.flat(Infinity)
          .map(v => v.trim())
      )
    } else if (typeof a === 'string' || a instanceof String) {
      tmp.push(
        ...a.split(/\s+/)
      )
    } else if (typeof a === 'object' && a !== null) {
      tmp.push(
        ...Object.entries(a)
          .filter(([_k, v]) => v)
          .map(([k, _v]) => k.trim())
      )
    }
  })

  return tmp.join(' ')
}
