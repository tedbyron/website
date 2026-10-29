import {
  ErrorMessage,
  formatDate,
  formatTitle,
  getPostsMetadata,
  posts,
} from '#lib'
import { error } from '@sveltejs/kit'
import type { EntryGenerator, PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
  const entry = posts.get(params.post)
  const post = await entry?.load()

  if (entry === undefined || !post?.metadata.published) {
    error(404, ErrorMessage.NotFound)
  }

  return {
    title: formatTitle(post.metadata.title),
    description: post.metadata.description ?? post.metadata.title,
    sourcePath: entry.path,
    component: post.default,
    metadata: { ...post.metadata, date: formatDate(post.metadata.date) },
  }
}

export const entries: EntryGenerator = async () =>
  (await getPostsMetadata()).map(({ slug }) => ({ post: slug }))
