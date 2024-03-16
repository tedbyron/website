<script lang="ts">
  import { cn } from '$lib'

  export let name: string
  export let fieldsetClass = ''
  export let legendClass = ''
  export let legendColor = ''
</script>

<div class="mt-3 sm:mt-6">
  <fieldset class={cn('rounded-lg border-2 border-slate p-3', fieldsetClass)}>
    <legend
      class={cn('mx-2 rounded-md border-2 border-slate px-2 font-serif font-bold', legendClass)}
      style:color={legendColor}
    >
      {name}
    </legend>

    <slot />
  </fieldset>
</div>
