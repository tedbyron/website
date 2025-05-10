import { findPost } from '$lib'
import type { ParamMatcher } from '@sveltejs/kit'

export const match: ParamMatcher = (param) => findPost(param) !== undefined
