// Kept apart from index.ts so src/params.ts can import it without Vite.

const yellow =
  'text-light-yellow hover:text-light-yellow decoration-light-yellow dark:text-yellow dark:hover:text-yellow dark:decoration-yellow'
const blue =
  'text-light-blue hover:text-light-blue decoration-light-blue dark:text-blue dark:hover:text-blue dark:decoration-blue'
const orange =
  'text-light-orange hover:text-light-orange decoration-light-orange dark:text-orange dark:hover:text-orange dark:decoration-orange'
const red =
  'text-light-red hover:text-light-red decoration-light-red dark:text-red dark:hover:text-red dark:decoration-red'
const green =
  'text-light-green hover:text-light-green decoration-light-green dark:text-green dark:hover:text-green dark:decoration-green'

/** Map of post tags to text color. */
export const postTags = {
  javascript: { class: yellow },
  typescript: { class: blue },
  nix: { class: blue },
  rust: { class: orange },
  svelte: { class: red },
  zsh: { class: green },
} as const satisfies Record<string, { class: string }>

export type PostTag = keyof typeof postTags
