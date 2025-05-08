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

declare module 'mdsvex' {
  export function mdsvex(options: unknown): unknown
}

declare module 'remark-abbr'
