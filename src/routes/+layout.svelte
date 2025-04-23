<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/state';

  const commandParser = async (program: string, command: string, args: string[]) => {
    console.log(program, command, args);
    switch (program) {
      case 'home': // alias to 'print help'
        goto('/');
        break;
      case 'help': // alias to 'print help'
        goto('/help');
        break;
      case 'print': // try to print page specified on 'command'
        const lastPathname = page.url.pathname;
        try {
          await goto(`/${command}`);
        } catch (error) {
          console.error('page not found', error);
          goto(lastPathname);
          return;
        }
        break;

      default:
        console.error('Command not found!');
        break;
    }
  };

  const runCommand = (e: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }) => {
    const [program, command, ...args] = e.currentTarget.value.split(' ');
    e.currentTarget.value = '';
    commandParser(program, command, args);
  };

  let { children } = $props();
</script>

<div>
  <p>
    >
    <input
      type="text"
      onkeydown={(e) => {
        const isEnter = e.key === 'Enter';
        isEnter ? runCommand(e) : null;
      }}
    />
  </p>
</div>

{@render children()}
