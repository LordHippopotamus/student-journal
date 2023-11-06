<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import type { Tables } from '$lib/database.types';
	import { createEventDispatcher } from 'svelte';

	export let open: boolean;
	export let lesson: Tables<'lessons'>;

	const dispatch = createEventDispatcher();
	const dispatchCloseEvent = () => dispatch('close');

	let loading = false;
</script>

<dialog {open}>
	<form
		method="post"
		action="?/delete_lesson"
		use:enhance={({ data }) => {
			data.append('id', lesson.id);
			loading = true;
			return async ({ result }) => {
				await applyAction(result);
				await invalidate('admin:lessons');
				loading = false;
				dispatchCloseEvent();
			};
		}}
	>
		<h4>Удаление гурппы</h4>
		<p>
			Вы действительно хотите удалить группу <span>{lesson.name}</span>? Это действие необратимо
		</p>
		<button disabled={loading} on:click|preventDefault={dispatchCloseEvent}>Отмена</button>
		<button disabled={loading}>Удалить</button>
	</form>
</dialog>
