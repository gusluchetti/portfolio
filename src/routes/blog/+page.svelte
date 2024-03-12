<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { posts } = data;
</script>

<svelte:head>
	<title>blog posts</title>
	<meta name="description" content="a collection of all blog posts i've made so far" />
</svelte:head>

<h2>all posts</h2>
<ul>
	{#each posts as post}
		<li>
			<a class="hover:font-bold" href={post.path}>
				&gt; {#if post.meta.draft}<span class="text-red-400">(draft)</span>{/if}
				{post.meta.title} | {post.meta.date}
			</a>
		</li>
	{/each}
</ul>
