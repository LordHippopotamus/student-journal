<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { Button, Title } from '$lib/ui';

	export let data: PageData;
</script>

<Title level={2}>Выберите группу</Title>
<ul class="flex gap-1 mt-1">
	{#each data.groups as group}
		<li>
			<Button element="a" href={$page.url.pathname + '/' + group.id}>
				{group.name}
			</Button>
		</li>
	{/each}
</ul>
