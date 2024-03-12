<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	console.log(data.posts);
</script>

<p>lots of blog posts!</p>
<ul>
	{#each data.posts as post}
		<li>
			<a href={post.path}>
				{post.meta.title}
			</a>
		</li>
	{/each}
</ul>
