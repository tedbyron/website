declare module '*.md' {
  import { Component } from 'svelte'
  export default c satisfies Component
}

declare module '*.svelte.md' {
  import { Component } from 'svelte'
  export default c satisfies Component
}

declare module '*.svx' {
  import { Component } from 'svelte'
  export default c satisfies Component
}

// mdsvex's bundled types are too old for current remark/rehype plugins.
declare module 'mdsvex' {
  export function mdsvex(
    options: unknown,
  ): import('svelte/compiler').PreprocessorGroup
}

declare module 'remark-abbr'
