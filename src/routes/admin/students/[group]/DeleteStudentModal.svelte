<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import type { Tables } from '$lib/database.types';
	import { createEventDispatcher } from 'svelte';

	export let open: boolean;
	export let student: Tables<'students'>;

	const dispatch = createEventDispatcher();
	const dispatchCloseEvent = () => dispatch('close');

	let loading = false;
</script>

<dialog {open}>
	<form
		method="post"
		action="?/delete_student"
		use:enhance={({ data }) => {
			data.append('id', student.id);
			loading = true;
			return async ({ result }) => {
				await applyAction(result);
				await invalidate('admin:students');
				loading = false;
				dispatchCloseEvent();
			};
		}}
	>
		<h4>Удаление студента</h4>
		<p>
			Вы действительно хотите удалить студента <span>{student.full_name}</span>? Это действие необратимо
		</p>
		<button disabled={loading} on:click|preventDefault={dispatchCloseEvent}>Отмена</button>
		<button disabled={loading}>Удалить</button>
	</form>
</dialog>
