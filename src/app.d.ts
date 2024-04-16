import 'unplugin-icons/types/svelte'

import type { ErrorMessage, postTag } from '$lib'
import type { ComponentType } from 'svelte'

declare global {
  namespace App {
    interface Error {
      message: ErrorMessage
    }

    interface PageData {
      title: string
      description: string
      sourcePath?: string

      postsMetadata?: PostMetadataParsed[]
      postTagLabel?: (typeof postTag)[PostTag]['label']
      postTags?: [PostTag, (typeof postTag)[PostTag]][]

      component?: ComponentType
      metadata?: PostMetadata
    }

    interface Post {
      default: ComponentType
      metadata: PostMetadata
    }

    interface PostMetadata {
      title: string
      description: string
      tags: PostTag[]
      date: string
      published?: boolean
    }

    interface PostMetadataParsed extends PostMetadata {
      slug: string
      date: Date
    }

    type PostTag = keyof typeof postTag
  }
}
