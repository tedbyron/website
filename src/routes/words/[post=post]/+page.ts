import { ErrorMessage, formatDate, formatTitle, findPost } from '$lib'
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
  const match = findPost(params.post)
  const post = await match?.[1]()

  if (!post?.metadata.published) {
    error(404, ErrorMessage.NotFound)
  }

  return {
    title: formatTitle(post.metadata.title),
    description: post.metadata.description,
    sourcePath: match?.[0],

    component: post.default,
    metadata: { ...post.metadata, date: formatDate(post.metadata.date) },
  }
}
