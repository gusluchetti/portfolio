<script lang="ts">
	import '../app.css';
	export const active = false;
</script>

<header>
	<nav class="flex flex-row flex-wrap md:gap-3 italic">
		<a class="navlink" class:active href="/">home</a>
		<a class="navlink" class:active href="/blog">posts</a>
		<a class="navlink" class:active href="/about">about</a>
		<a class="navlink" class:active href="/cv">cv</a>
	</nav>
</header>

<main class="p-3 lh-copy">
	<slot />
</main>

<footer>
	<a class="navlink" href="https://github.com/gusluchetti/portfolio">view source</a>
</footer>
