<script lang="ts">
	import type { Tables } from '$lib/database.types';
	import LessonsListItem from './LessonsListItem.svelte';

	export let lessons: Tables<'lessons'>[];
</script>

<section>
	<h2>Список предметов</h2>
	<table>
		<tr>
			<th>Название предмета</th>
		</tr>
		{#each lessons as lesson}
			<LessonsListItem {lesson} />
		{/each}
	</table>
</section>
