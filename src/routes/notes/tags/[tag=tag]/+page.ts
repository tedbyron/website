import { ErrorMessage, formatTitle, getPostsMetadata, getUsedTags } from '#lib'
import { error } from '@sveltejs/kit'
import type { EntryGenerator, PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
  const postsMetadata = (await getPostsMetadata()).filter((post) =>
    post.tags.includes(params.tag),
  )

  if (postsMetadata.length === 0) {
    error(404, ErrorMessage.NotFound)
  }

  return {
    title: formatTitle(`#${params.tag}`),
    description: `Notes about #${params.tag}`,
    postTag: params.tag,
    postsMetadata,
  }
}

export const entries: EntryGenerator = async () =>
  (await getUsedTags()).map((tag) => ({ tag }))
