export * from './posts'

export const enum ErrorMessage {
  /** 404 */
  NotFound = 'Not Found',
}

export const defaultTitle = 'Teddy Byron'
export function formatTitle(title: string) {
  return `${title} \u2022 ${defaultTitle}`
}
