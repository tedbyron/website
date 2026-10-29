import { postTags, type PostTag } from './tags.ts'

export { postTags, type PostTag }

// Matches extensions in vite.config.ts.
const slugPat = /([\w-]+)\.(?:svelte\.md|md|svx)$/

/** Post paths and module loaders, by slug. */
export const posts = new Map<
  string,
  { path: string; load: () => Promise<App.Post> }
>()

for (const [path, load] of Object.entries(
  import.meta.glob<App.Post>('/src/lib/posts/**/*.{md,svelte.md,svx}'),
)) {
  const slug = slugPat.exec(path)?.[1]
  if (slug === undefined) {
    throw new Error(`Invalid post path: ${path}`)
  }
  if (posts.has(slug)) {
    throw new Error(`Duplicate post slug: ${slug}`)
  }
  posts.set(slug, { path, load })
}

const compareTags = (a: PostTag, b: PostTag) => a.localeCompare(b, 'en')

let postsMetadata: Promise<App.PostMetadataParsed[]> | undefined

/**
 * Parsed metadata of published posts, oldest first. Loads every post module,
 * so only call it from pages that list posts.
 */
export function getPostsMetadata() {
  postsMetadata ??= Promise.all(
    Array.from(posts, async ([slug, { load }]) => {
      const { metadata } = await load()
      for (const tag of metadata.tags) {
        if (!Object.hasOwn(postTags, tag)) {
          throw new Error(`Invalid tag in post ${slug}: ${tag}`)
        }
      }
      return {
        ...metadata,
        slug,
        date: new Date(metadata.date),
        tags: [...new Set(metadata.tags)].toSorted(compareTags),
      }
    }),
  ).then((posts) =>
    posts
      .filter((post) => post.published)
      .sort((a, b) => a.date.getTime() - b.date.getTime()),
  )
  return postsMetadata
}

/** Tags used by published posts, sorted. */
export async function getUsedTags() {
  const posts = await getPostsMetadata()
  return [...new Set(posts.flatMap((post) => post.tags))].toSorted(compareTags)
}

// Post dates are shown in the author's timezone, wherever the code runs.
const dateFormat = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'America/New_York',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
})

/** Format a date like `yyyy-mm-dd`. */
export function formatDate(date: string | Date) {
  return dateFormat.format(new Date(date))
}
