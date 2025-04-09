<script lang="ts">
  interface Props {
    tag: keyof App.PostTags
    class: App.PostTags[keyof App.PostTags]['class']
  }

  const { tag, class: className }: Props = $props()
</script>

<a
  href="/words/tags/{tag}"
  class={[
    'inline-flex items-center gap-0.5 no-underline hover:underline',
    className,
  ]}>#{tag}</a
>
