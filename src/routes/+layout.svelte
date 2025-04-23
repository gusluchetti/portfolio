<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { pages } from '$lib/page-list';

  const runCommand = async (
    e: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }
  ) => {
    const [program, command, ...args] = e.currentTarget.value.split(' ');
    e.currentTarget.value = '';
    console.log(program, command, args);

    const foundPage = pages.get(program) ?? pages.get(command);
    if (foundPage) {
      const lastPathname = page.url.pathname;
      try {
        await goto(foundPage.path);
      } catch (error) {
        console.error('page not found', error);
        goto(lastPathname);
        return;
      }
    }
  };

  let { children } = $props();
</script>

<main>
  &gt; <input type="text" onkeydown={(e) => (['Enter'].includes(e.key) ? runCommand(e) : null)} />
  {@render children()}
</main>

<style>
  :root {
    font-family: monospace;
  }
</style>
