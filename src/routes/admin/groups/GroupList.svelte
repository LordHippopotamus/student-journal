<script lang="ts">
	import type { Tables } from '$lib/database.types';
	import GroupItem from './GroupItem.svelte';

	export let groups: Tables<'groups'>[];
</script>

<section>
	<h2>Список групп</h2>
	<table>
		<tr>
			<th>Название группы</th>
			<th>Год начала обучения</th>
			<th>Год окончания обучения</th>
		</tr>
		{#each groups as group}
			<GroupItem {group} />
		{/each}
	</table>
</section>
