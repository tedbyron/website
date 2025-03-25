import { defaultTitle } from '$lib'
import type { LayoutServerLoad } from './$types'

export const csr = false
export const prerender = true

export const load: LayoutServerLoad = ({ setHeaders }) => {
  setHeaders({
    'x-frame-options': 'DENY',
    'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
  })

  return {
    title: defaultTitle,
    description: "Teddy Byron's website",
  }
}
