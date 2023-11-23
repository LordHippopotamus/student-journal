<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { Button, Title } from '$lib/ui';

	export let data: PageData;
</script>

<Title level={2}>Выберите предмет</Title>
<ul class="flex gap-1 mt-1">
	{#each data.lessons as lesson}
		<li>
			<Button element="a" href={$page.url.pathname + '/' + lesson.id}>
				{lesson.name}
			</Button>
		</li>
	{/each}
</ul>
