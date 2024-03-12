<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { title, date, Content } = data;
</script>

<h1>{title}</h1>
<p>published: {date}</p>
<Content />
