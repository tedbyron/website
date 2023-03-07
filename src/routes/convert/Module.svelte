<script lang="ts">
  import { classnames } from '$lib'

  export let name: string | null | undefined
  export let color = ''
  let className = ''
  export let styleColor = ''
  export { className as class }
</script>

<form {name} class="mt-3 sm:mt-6">
  <fieldset class={classnames('rounded-lg border-2 border-slate p-3', className)}>
    <legend
      class={classnames('mx-2 rounded-md border-2 border-slate px-2 font-serif font-bold', color)}
      style:color={styleColor ?? 'revert'}
    >
      {name}
    </legend>

    <slot />
  </fieldset>
</form>
