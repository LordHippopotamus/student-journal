<script lang="ts">
	import { clickoutside } from '@svelte-put/clickoutside';
	import type { Tables } from '$lib/database.types';
	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import DeleteGroupModal from './DeleteGroupModal.svelte';

	export let group: Tables<'groups'>;

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
				action="?/edit_group"
				use:enhance={({ data }) => {
					data.append('id', group.id);
					loading = true;
					return async ({ result }) => {
						await applyAction(result);
						await invalidate('admin:group');
						loading = false;
						editing = false;
					};
				}}
			>
				<input name="name" value={group.name} placeholder="Название группы" />
				<button disabled={loading} on:click={() => (editing = false)}>&#10006;</button>
				<button disabled={loading} type="submit">&#10004;</button>
			</form>
		{:else}
			{group.name}
		{/if}
	</td>
	<td>{group.start_year}</td>
	<td>{group.end_year}</td>
	<td><button on:click={() => (open = true)}>&#10006;</button></td>
</tr>
<DeleteGroupModal {open} on:close={() => (open = false)} group={group} />
