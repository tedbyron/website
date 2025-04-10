import { formatTitle, postsMetadata, postTags } from '$lib'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => ({
  title: formatTitle('Tags'),
  description: 'Post tags',
  postTags: Object.entries(postTags)
    .filter(([tag]) =>
      postsMetadata.some((post) => post.published && post.tags.includes(tag)),
    )
    .toSorted((a, b) => a[0].localeCompare(b[0], 'en')),
})
