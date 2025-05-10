import { formatTitle, postsMetadata, postTags } from '$lib'
import type { PageLoad } from './$types'

postsMetadata
  .then((posts) => {
    if (posts.some((post) => post.tags.some((tag) => !(tag in postTags)))) {
      throw new Error('Invalid tag')
    }
  })
  .catch(console.error)

export const load: PageLoad = async () => {
  const postsMeta = await postsMetadata

  return {
    title: formatTitle('Words'),
    description: 'Some words about things',
    postsMetadata: postsMeta,
  }
}
