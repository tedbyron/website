import { defaultTitle } from '$lib'
import type { LayoutServerLoad } from './$types'

export const prerender = true

export const load: LayoutServerLoad = () => ({
  title: defaultTitle,
  description: "Teddy Byron's website",
})
