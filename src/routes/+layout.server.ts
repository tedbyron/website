import type { LayoutServerLoad } from './$types'

export const load = (({ setHeaders }) => {
  setHeaders({
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'origin-when-cross-origin, strict-origin-when-cross-origin'
  })
}) satisfies LayoutServerLoad
