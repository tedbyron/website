import { formatTitle, postsMetadata } from '$lib'
import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
  const postsMeta = await postsMetadata

  return {
    title: formatTitle('Notes'),
    description: 'Some notes about things',
    postsMetadata: postsMeta,
  }
}
