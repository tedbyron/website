export * from '$lib/posts'

export const enum ErrorMessage {
  /** 404 */
  NotFound = 'Not Found',
}

export const defaultTitle = 'Teddy Byron'
export const formatTitle = (title: string) => `${title} • ${defaultTitle}`
