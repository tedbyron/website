import { formatTitle, getPostsMetadata } from '#lib'
import type { PageLoad } from './$types'

export const load: PageLoad = async () => ({
  title: formatTitle('Notes'),
  description: 'Some notes about things',
  postsMetadata: await getPostsMetadata(),
})
