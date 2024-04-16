import { ErrorMessage, formatTitle, postsMetadata, postTag } from '$lib'
import { error } from '@sveltejs/kit'

import type { PageServerLoad } from './$types'

export const load: PageServerLoad = ({ params }) => {
  if (!(params.tag in postTag)) {
    error(404, ErrorMessage.NotFound)
  }

  // Cast is validated in the above if statement.
  const tag = params.tag as keyof typeof postTag

  return {
    title: formatTitle('Tags'),
    description: 'Post tags',
    postTagLabel: postTag[tag].label,
    postsMetadata: postsMetadata.filter((post) => post.published && post.tags.includes(tag)),
  }
}
