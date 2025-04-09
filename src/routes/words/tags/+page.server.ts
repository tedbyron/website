import { formatTitle, postsMetadata, postTag } from '$lib'

import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => ({
  title: formatTitle('Tags'),
  description: 'Post tags',
  postTags: Object.entries(postTag)
    .filter(([tag]) =>
      postsMetadata.some(
        (post) => post.published === true && post.tags.includes(tag),
      ),
    )
    .toSorted((a, b) => (a[1].label < b[1].label ? -1 : 1)),
})
