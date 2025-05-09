export * from './constants'
export * from './posts'
export * from './state.svelte'

export const enum ErrorMessage {
  /** 404 */
  NotFound = 'Not Found',
}

export const defaultTitle = 'Teddy Byron'
export const formatTitle = (title: string) => `${title} \u2022 ${defaultTitle}`
