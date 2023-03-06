// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }

  export * from 'unplugin-icons/types/svelte'
}

declare module 'tailwindcss/nesting' {
  import type { Plugin, Processor } from 'postcss'
  export default function (): Plugin | Processor
}
