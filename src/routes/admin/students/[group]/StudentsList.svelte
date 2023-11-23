<script lang="ts">
	import type { Tables } from '$lib/database.types';
	import { Title } from '$lib/ui';
	import DeleteStudentModal from './DeleteStudentModal.svelte';
	import EditStudentModal from './EditStudentModal.svelte';
	import StudentsListItem from './StudentsListItem.svelte';

	export let students: Tables<'students'>[];
	export let groupName: string;

	let deleteStudentModal: Tables<'students'> | null = null,
		editStudentModal: Tables<'students'> | null = null;
</script>

<div>
	<Title level={2}>Студенты группы {groupName}</Title>
	<ui class="flex flex-col gap-1 mt-1">
		{#each students as student}
			<StudentsListItem
				{student}
				on:edit={() => (editStudentModal = student)}
				on:delete={() => (deleteStudentModal = student)}
			/>
		{/each}
	</ui>
</div>
<DeleteStudentModal bind:deleteStudentModal />
<EditStudentModal bind:editStudentModal />
