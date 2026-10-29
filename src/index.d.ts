// `*.md` also covers `*.svelte.md`.
declare module '*.md' {
  import type { Component } from 'svelte'
  const component: Component
  export default component
}

declare module '*.svx' {
  import type { Component } from 'svelte'
  const component: Component
  export default component
}

// mdsvex's bundled types are too old for current remark/rehype plugins.
declare module 'mdsvex' {
  export function mdsvex(
    options: unknown,
  ): import('svelte/compiler').PreprocessorGroup
  export function escapeSvelte(str: string): string
}
