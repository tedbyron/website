// Matches extensions in svelte.config.js.
const mdsvexExtensions = ['.md', '.svelte.md', '.svx'] as const
const mdPat = new RegExp(
  `([\\w-]+)(${mdsvexExtensions.map((ext) => ext.replaceAll('.', '\\.')).join('|')})`,
)

/** Map of post tags to display value and text color. */
export const postTags = {
  javascript: {
    class:
      'text-light-yellow hover:text-light-yellow decoration-light-yellow dark:text-yellow dark:hover:text-yellow dark:decoration-yellow',
  },
  typescript: {
    class:
      'text-light-blue hover:text-light-blue decoration-light-blue dark:text-blue dark:hover:text-blue dark:decoration-blue',
  },
  nix: {
    class:
      'text-light-blue hover:text-light-blue decoration-light-blue dark:text-blue dark:hover:text-blue dark:decoration-blue',
  },
  rust: {
    class:
      'text-light-orange hover:text-light-orange decoration-light-orange dark:text-orange dark:hover:text-orange dark:decoration-orange',
  },
  svelte: {
    class:
      'text-light-red hover:text-light-red decoration-light-red dark:text-red dark:hover:text-red dark:decoration-red',
  },
  zsh: {
    class:
      'text-light-green hover:text-light-green decoration-light-green dark:text-green dark:hover:text-green dark:decoration-green',
  },
} as const satisfies App.PostTags

/** Post modules. */
export const postModules = import.meta.glob<App.Post>(
  `$lib/posts/**/*.{md,svelte.md,svx}`,
)

/** Get a post's slug from its path. */
export function postPath(path: string) {
  const slug = path.match(mdPat)?.[1]
  if (slug === undefined) {
    throw new Error('Invalid path')
  }
  return slug
}

/** Find a post. */
export function findPost(name: string) {
  return Object.entries(postModules).find(([path]) => postPath(path) === name)
}

/** Parsed post metadata promises.  */
const postsMetadataPromises = Object.entries(postModules).map<
  Promise<App.PostMetadataParsed>
>(([path, resolve]) =>
  resolve().then(({ metadata }) => ({
    ...metadata,
    slug: postPath(path),
    date: new Date(metadata.date),
  })),
)

/** Parsed, filtered, and sorted post metadata. */
export const postsMetadata: Promise<App.PostMetadataParsed[]> = Promise.all(
  postsMetadataPromises,
).then((posts) =>
  posts
    .filter((post) => post.published)
    .sort((a, b) => a.date.getTime() - b.date.getTime()),
)

// Validate post tags.
postsMetadata
  .then((posts) => {
    if (posts.some((post) => post.tags.some((tag) => !(tag in postTags)))) {
      throw new Error('Invalid tag')
    }
  })
  .catch(console.error)

const dateTimeFormat = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
})

/** Format a date like `yyyy-mm-dd`. */
export function formatDate(date: string | Date): string {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  const parts = dateTimeFormat
    .formatToParts(date)
    .filter(({ type }) => type !== 'literal')
  const year = parts.find(({ type }) => type === 'year')
  const month = parts.find(({ type }) => type === 'month')
  const day = parts.find(({ type }) => type === 'day')
  if (year === undefined || month === undefined || day === undefined) {
    throw new Error('Date missing parts')
  }
  return `${year.value}-${month.value}-${day.value}`
}
