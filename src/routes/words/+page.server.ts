import { formatTitle, postsMetadata, postTags } from '$lib'
import type { PageServerLoad } from './$types'

if (postsMetadata.some((post) => post.tags.some((tag) => !(tag in postTags)))) {
  throw new Error('Invalid tag')
}

export const load: PageServerLoad = () => ({
  title: formatTitle('Words'),
  description: 'Some words about things',
  postsMetadata,
})
