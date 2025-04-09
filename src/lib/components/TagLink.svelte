<script lang="ts">
  interface Props {
    tag: keyof App.PostTags
    label: App.PostTags[keyof App.PostTags]['label']
    class: App.PostTags[keyof App.PostTags]['class']
  }

  const { tag, label, class: className }: Props = $props()
</script>

<a
  href="/words/tags/{tag}"
  class={['inline-flex items-center gap-0.5 no-underline hover:underline', className]}>#{label}</a
>
