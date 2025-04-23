# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for
your target environment.

## TODOS:
- Berkeley Mono for all, possibly Garamond for CV and/or blog posts (how to preload fonts correctly)
- define ALL routes specified in static route list (match old website)
- read cookies to apply dark/light mode and other prefs
- preload data and/or code if user is typing command that is valid to speedup things
- style overhaul, actual terminal UI, possibly sounds
- simplified mode, buttons and all
- (page) cv as html
