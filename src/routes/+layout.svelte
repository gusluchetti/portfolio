<script lang="ts">
	import '../app.css';
	export const active = false;
</script>

<header class="italic flex flex-row gap-5">
	<nav class="*:navlink">
		<a class:active href="/">home</a>
		<a class:active href="/blog">posts</a>
		<a class:active href="/about">about</a>
	</nav>
</header>

<main class="p-3">
	<slot />
</main>

<footer>
	<a href="https://github.com/gusluchetti/portfolio">view source</a>
</footer>
