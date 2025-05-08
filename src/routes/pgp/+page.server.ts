import { formatTitle } from '$lib'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => ({
  title: formatTitle('PGP'),
  description: "Teddy Byron's PGP info",
})
