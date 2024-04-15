import 'unplugin-icons/types/svelte'

import type { ErrorMessage } from '$lib'
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

      posts?: PostMetadataParsed[]

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
      date: string
      published?: boolean
    }

    interface PostMetadataParsed extends PostMetadata {
      slug: string
      date: Date
    }
  }
}
