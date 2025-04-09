import 'unplugin-icons/types/svelte'

import type { ErrorMessage, PostTag } from '$lib'
import type { Component } from 'svelte'

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

      component?: Component
      metadata?: PostMetadata
    }

    interface Post {
      default: Component
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
  }
}

export {}
