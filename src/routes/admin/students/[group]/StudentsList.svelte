<script lang="ts">
	import type { Tables } from '$lib/database.types';
	import StudentsListItem from './StudentsListItem.svelte';

	export let students: Tables<'students'>[];
	export let groupName: string;
</script>

<h2>Студенты группы <span>{groupName}</span></h2>
<ul>
	{#each students as student}
		<StudentsListItem {student} />
	{/each}
</ul>
