import { error } from '@sveltejs/kit'

import { ErrorMessage, formatDate, formatTitle, postModules, postPath } from '$lib'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
  const match = Object.entries(postModules).find(([path]) => postPath(path) === params.post)
  const post = await match?.[1]()

  if (post?.metadata.published !== true) {
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
