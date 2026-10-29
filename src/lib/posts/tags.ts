// Kept apart from index.ts so src/params.ts can import it without Vite.

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
