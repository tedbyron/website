import { formatTitle } from '$lib'
import type { PageLoad } from './$types'

export const load: PageLoad = () => ({
  title: formatTitle('PGP'),
  description: "Teddy Byron's PGP info",
})
