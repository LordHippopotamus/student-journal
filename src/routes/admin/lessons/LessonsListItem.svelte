<script lang="ts">
	import { clickoutside } from '@svelte-put/clickoutside';
	import type { Tables } from '$lib/database.types';
	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import DeleteLessonModal from './DeleteLessonModal.svelte';

	export let lesson: Tables<'lessons'>;

	let editing = false;
	let loading = false;
	let open = false;
</script>

<tr>
	<td
		on:click={() => (editing = true)}
		use:clickoutside
		on:clickoutside={() => {
			if (loading) return;
			editing = false;
		}}
	>
		{#if editing}
			<form
				method="post"
				action="?/edit_lesson"
				use:enhance={({ data }) => {
					data.append('id', lesson.id);
					loading = true;
					return async ({ result }) => {
						await applyAction(result);
						await invalidate('admin:lessons');
						loading = false;
						editing = false;
					};
				}}
			>
				<input name="name" value={lesson.name} placeholder="Название предмета" />
				<button disabled={loading} on:click={() => (editing = false)}>&#10006;</button>
				<button disabled={loading} type="submit">&#10004;</button>
			</form>
		{:else}
			{lesson.name}
		{/if}
	</td>
	<td><button on:click={() => (open = true)}>&#10006;</button></td>
</tr>
<DeleteLessonModal {open} on:close={() => (open = false)} {lesson} />
