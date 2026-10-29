import { formatTitle, getUsedTags } from '#lib'
import type { PageLoad } from './$types'

export const load: PageLoad = async () => ({
  title: formatTitle('Tags'),
  description: 'Post tags',
  postTags: await getUsedTags(),
})
