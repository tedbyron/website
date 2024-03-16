import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = ({ setHeaders }) => {
  setHeaders({
    'x-frame-options': 'DENY',
    'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
  })
}
