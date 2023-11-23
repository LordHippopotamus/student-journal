<script lang="ts">
	import type { Tables } from '$lib/database.types';
	import LessonsListItem from './LessonsListItem.svelte';
	import { Title } from '$lib/ui';
	import DeleteLessonModal from './DeleteLessonModal.svelte';
	import EditLessonModal from './EditLessonModal.svelte';

	export let lessons: Tables<'lessons'>[];

	let deleteLessonModal: Tables<'lessons'> | null = null,
		editLessonModal: Tables<'lessons'> | null = null;
</script>

<div>
	<Title level={2}>Список предметов</Title>
	<ui class="flex flex-col gap-1 mt-1">
		{#each lessons as lesson}
			<LessonsListItem
				{lesson}
				on:edit={() => (editLessonModal = lesson)}
				on:delete={() => (deleteLessonModal = lesson)}
			/>
		{/each}
	</ui>
</div>
<DeleteLessonModal bind:deleteLessonModal />
<EditLessonModal bind:editLessonModal />
