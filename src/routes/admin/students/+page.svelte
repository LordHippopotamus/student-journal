<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { Title } from '$lib/ui';

	export let data: PageData;
</script>

<Title level={2}>Выберите группу</Title>
<ul class="flex gap-1 mt-1">
	{#each data.groups as group}
		<li>
			<a
				href={$page.url.pathname + '/' + group.id}
				class="block bg-slate-500 hover:bg-slate-600 active:bg-slate-700 transition py-2 px-6 text-white rounded"
			>
				{group.name}
			</a>
		</li>
	{/each}
</ul>
