<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import type { Tables } from '$lib/database.types';
	import { clickoutside } from '@svelte-put/clickoutside';
	import DeleteStudentModal from './DeleteStudentModal.svelte';

	export let student: Tables<'students'>;

	let editing = false,
		loading = false,
		open = false;
</script>

<li
	on:dblclick={() => (editing = true)}
	use:clickoutside
	on:clickoutside={() => {
		if (loading) return;
		editing = false;
	}}
>
	{#if editing}
		<form
			method="post"
			action="?/edit_student"
			use:enhance={({ data }) => {
				data.append('id', student.id);
				loading = true;
				return async ({ result }) => {
					await applyAction(result);
					await invalidate('admin:students');
					loading = false;
					editing = false;
				};
			}}
		>
			<input type="text" name="full_name" value={student.full_name} placeholder="Полное имя" />
			<button disabled={loading} on:click|preventDefault={() => (editing = false)}>&#10006;</button>
			<button disabled={loading} type="submit">&#10004;</button>
		</form>
	{:else}
		{student.full_name}
		<button disabled={loading} on:click={() => (open = true)}>&#10006;</button>
	{/if}
</li>
<DeleteStudentModal {student} {open} on:close={() => (open = false)} />
