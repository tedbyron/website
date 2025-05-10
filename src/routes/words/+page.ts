import { formatTitle, postsMetadata, postTags } from '$lib'
import type { PageLoad } from './$types'

if (postsMetadata.some((post) => post.tags.some((tag) => !(tag in postTags)))) {
  throw new Error('Invalid tag')
}

export const load: PageLoad = () => ({
  title: formatTitle('Words'),
  description: 'Some words about things',
  postsMetadata,
})
