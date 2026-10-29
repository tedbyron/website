import { defineParams } from '@sveltejs/kit/params'
// SvelteKit imports this file with plain Node at build time, so only import
// modules that don't need Vite (no `import.meta.glob`, enums, etc.).
import { postTags, type PostTag } from '#lib/posts/tags.ts'

// Unknown or unpublished posts 404 in the post page's load function.
const matchPost = (param: string) => /^[\w-]+$/.test(param)

const matchTag = (param: string): param is PostTag =>
  Object.hasOwn(postTags, param)

export const params = defineParams({
  post: (param) => (matchPost(param) ? param : undefined),
  tag: (param) => (matchTag(param) ? param : undefined),
})
