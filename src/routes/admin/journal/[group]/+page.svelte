<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;
</script>

<h2>Выберите предмет:</h2>
<ul>
	{#each data.lessons as lesson}
		<li><a href={$page.url.pathname + '/' + lesson.id}>{lesson.name}</a></li>
	{/each}
</ul>
