import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = ({ setHeaders }) => {
  setHeaders({
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'origin-when-cross-origin, strict-origin-when-cross-origin'
  })
}
