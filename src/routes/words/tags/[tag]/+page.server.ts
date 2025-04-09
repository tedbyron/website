import { error } from '@sveltejs/kit'

import { ErrorMessage, formatTitle, postsMetadata, postTags } from '$lib'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = ({ params }) => {
  if (!(params.tag in postTags)) {
    error(404, ErrorMessage.NotFound)
  }

  // Cast is validated in the above if statement.
  const tag = params.tag as keyof typeof postTags

  return {
    title: formatTitle('Tags'),
    description: 'Post tags',

    postTag: tag,
    postsMetadata: postsMetadata.filter(
      (post) => post.published && post.tags.includes(tag),
    ),
  }
}
