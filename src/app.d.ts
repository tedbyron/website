import type { Component } from 'svelte'
import type { ClassValue } from 'svelte/elements'
import 'unplugin-icons/types/svelte'

import type { ErrorMessage } from '$lib'

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
      postTag?: keyof PostTags
      postTags?: [keyof PostTags, PostTags[keyof PostTags]][]

      component?: Component
      metadata?: PostMetadata
    }

    interface Post {
      default: Component
      metadata: PostMetadata
    }

    interface PostMetadata {
      title: string
      description?: string
      tags: (keyof PostTags)[]
      date: string
      published?: boolean
    }

    interface PostMetadataParsed extends PostMetadata {
      slug: string
      date: Date
    }

    type PostTags = Record<string, { class: ClassValue }>
  }
}

export {}
