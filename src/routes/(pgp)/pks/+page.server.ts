import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

// Prerendering would turn the 303 into a <meta> refresh.
export const prerender = false

export const load: PageServerLoad = () => redirect(303, '/pgp')
