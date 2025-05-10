import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  event.setHeaders({
    'x-frame-options': 'DENY',
    'x-referrer-policy':
      'origin-when-cross-origin, strict-origin-when-cross-origin',
  })

  return await resolve(event)
}
