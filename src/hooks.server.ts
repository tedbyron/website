import type { Handle } from '@sveltejs/kit/hooks'

// Only runs for responses from the worker. Prerendered pages get these headers
// from _headers instead.
export const handle: Handle = async ({ event, resolve }) => {
  event.setHeaders({
    'x-frame-options': 'DENY',
    'referrer-policy': 'strict-origin-when-cross-origin',
  })

  return resolve(event)
}
