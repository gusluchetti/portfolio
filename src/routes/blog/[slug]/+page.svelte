<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<a href="/">home</a>
<h1>{data.title}</h1>
<div>{@html data.content}</div>
