<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;
</script>

<h2>Выберите группу:</h2>
<ul>
	{#each data.groups as group}
		<li><a href={$page.url.pathname + '/' + group.id}>{group.name}</a></li>
	{/each}
</ul>
