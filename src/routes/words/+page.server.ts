import { formatTitle, postsMetadata, postTag } from '$lib'

import type { PageServerLoad } from './$types'

if (postsMetadata.some((post) => post.tags.some((tag) => !(tag in postTag)))) {
  throw new Error('Invalid tag')
}

export const load: PageServerLoad = () => ({
  title: formatTitle('Words'),
  description: 'Some words about things',
  postsMetadata,
})
