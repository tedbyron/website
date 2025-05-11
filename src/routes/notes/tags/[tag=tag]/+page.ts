import { formatTitle, postsMetadata, postTags } from '$lib'
import type { EntryGenerator, PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
  const postsMeta = await postsMetadata

  return {
    title: formatTitle('Tags'),
    description: 'Post tags',
    postTag: params.tag,
    postsMetadata: postsMeta.filter(
      (post) => post.published && post.tags.includes(params.tag),
    ),
  }
}

export const entries: EntryGenerator = () => {
  return Object.keys(postTags).map((tag) => ({
    tag: tag as keyof typeof postTags,
  }))
}
