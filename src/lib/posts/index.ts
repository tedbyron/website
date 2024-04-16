import type { ClassValue } from '$lib'

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

/** Post modules. */
export const postModules = import.meta.glob<App.Post>(`$lib/posts/**/*.{md,svelte.md,svx}`)
/** Parsed post metadata promises.  */
const postsMetadataPromises = Object.entries(postModules).map<Promise<App.PostMetadataParsed>>(
  ([path, resolve]) =>
    resolve().then(({ metadata }) => ({
      ...metadata,
      slug: postPath(path),
      date: new Date(metadata.date),
    })),
)
/** Parsed, filtedered, and sorted post metadata. */
export const postsMetadata: App.PostMetadataParsed[] = (await Promise.all(postsMetadataPromises))
  .filter((post) => post.published)
  .sort((a, b) => a.date.getTime() - b.date.getTime())

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

type PostTag = Record<
  string,
  {
    label: string
    className?: ClassValue
  }
>
/** Map of post tags to display value and text color. */
export const postTag = {
  nix: {
    label: 'Nix',
    className: 'text-cyan hover:text-cyan',
  },
  rust: {
    label: 'Rust',
    className: 'text-orange hover:text-orange',
  },
  svelte: {
    label: 'Svelte',
    className: 'text-red hover:text-red',
  },
} as const satisfies PostTag
