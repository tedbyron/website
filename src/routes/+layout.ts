import { defaultTitle } from '$lib'
import type { LayoutLoad } from './$types'

export const prerender = true

export const load: LayoutLoad = () => ({
  title: defaultTitle,
  description: 'Teddy Byron',
})
