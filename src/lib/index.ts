import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export * from '$lib/posts'

export type { ClassValue }

/** Known error values. */
export const enum ErrorMessage {
  /** 404 */
  NotFound = 'Not Found',
}

export const defaultTitle = 'Teddy Byron'
export const formatTitle = (title: string) => `${title} • ${defaultTitle}`

/** Merge and deduplicate conditional classes. */
export const cn = (...args: ClassValue[]) => twMerge(clsx(args))
