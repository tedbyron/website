import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const enum ErrorMessage {
  NotFound = 'Not Found',
}

export const defaultTitle = 'Teddy Byron'
export const formatTitle = (title: string) => `${title} • ${defaultTitle}`

/** Merge and deduplicate conditional classes. */
export const cn = (...args: ClassValue[]) => twMerge(clsx(args))

/** Post modules. */
export const posts = import.meta.glob<App.Post>(`$lib/posts/**/*.{md,svelte.md,svx}`)

const dateTimeFormat = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
})
/** Format a date like `yyyy-mm-dd`. */
export const formatDate = (date: string | Date): string => {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  const parts = dateTimeFormat.formatToParts(date).filter(({ type }) => type !== 'literal')
  const year = parts.find(({ type }) => type === 'year')
  const month = parts.find(({ type }) => type === 'month')
  const day = parts.find(({ type }) => type === 'day')
  if (year === undefined || month === undefined || day === undefined) {
    throw new Error('Date missing parts')
  }
  return `${year.value}-${month.value}-${day.value}`
}

// Matches extensions in svelte.config.js.
const mdsvexExtensions = ['.md', '.svelte.md', '.svx']
const mdPat = new RegExp(
  `([\\w-]+)(${mdsvexExtensions.map((ext) => ext.replaceAll('.', '\\.')).join('|')})`,
)
/** Get a post's slug from its path. */
export const postPath = (path: string): string => {
  const slug = path.match(mdPat)?.[1]
  if (slug === undefined) {
    throw new Error('Invalid path')
  }
  return slug
}
