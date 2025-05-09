import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  const res = await resolve(event)
  res.headers.set('x-frame-options', 'DENY')
  res.headers.set(
    'x-referrer-policy',
    'origin-when-cross-origin, strict-origin-when-cross-origin',
  )
  return res
}
