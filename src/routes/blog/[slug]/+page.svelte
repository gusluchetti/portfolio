<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { title, date, Content } = data;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="TODO: a dynamic summary for each blog post" />
</svelte:head>

<h1>{title}</h1>
<p>published: <time datetime={date}>{date}</time></p>
<section class="max-w-prose">
	<Content />
</section>
