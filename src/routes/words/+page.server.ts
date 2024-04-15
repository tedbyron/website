import { formatTitle, postPath, posts } from '$lib'

import type { PageServerLoad } from './$types'

const postPromises = Object.entries(posts).map(([path, resolve]) =>
  resolve().then(({ metadata }) => ({
    ...metadata,
    slug: postPath(path),
    date: new Date(metadata.date),
  })),
)
const postsResolved: App.PostMetadataParsed[] = (await Promise.all(postPromises))
  .filter((post) => post.published)
  .sort((a, b) => a.date.getTime() - b.date.getTime())

export const load: PageServerLoad = () => ({
  title: formatTitle('Words'),
  description: 'Some words about things',
  posts: postsResolved,
})
