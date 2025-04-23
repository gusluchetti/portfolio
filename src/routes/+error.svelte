<script lang="ts">
  import { page } from '$app/state';
  if (page.error) {
    console.log('at error.svelte', page.error);
  }
</script>

{#if page.error}
  <h1>{page.error.message}</h1>
{:else}
  <h1>idk</h1>
{/if}
