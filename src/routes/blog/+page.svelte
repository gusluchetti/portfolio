<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { posts } = data;
</script>

<h2>all posts</h2>
<ul>
	{#each posts as post}
		<li>
			<a class="hover:font-bold" href={post.path}>
				> {post.meta.title} | {post.meta.date}
			</a>
		</li>
	{/each}
</ul>
