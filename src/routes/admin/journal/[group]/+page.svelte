<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { Card, Title } from '$lib/ui';

	export let data: PageData;
</script>

<Title level={2}>Выберите предмет</Title>
<ul class="flex gap-1 mt-1 flex-wrap">
	{#each data.lessons as lesson}
		<li>
			<Card href={$page.url.pathname + '/' + lesson.id}>
				{lesson.name}
			</Card>
		</li>
	{/each}
</ul>
