import { postTags } from '$lib'
import type { ParamMatcher } from '@sveltejs/kit'

export const match = ((param): param is keyof typeof postTags =>
  Object.hasOwn(postTags, param)) satisfies ParamMatcher
