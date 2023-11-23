<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import type { Tables } from '$lib/database.types';
	import { Button, Title } from '$lib/ui';
	import Input from '$lib/ui/Input.svelte';

	export let editGroupModal: null | Tables<'groups'>;

	let loading = false;
</script>

{#if editGroupModal}
	<div
		class="bg-slate-50 border border-slate-400 rounded shadow-lg p-2 w-64 sm:w-96 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
	>
		<form
			method="post"
			action="?/edit_group"
			use:enhance={({ data }) => {
				if (!editGroupModal) return;
				data.append('id', editGroupModal.id);
				loading = true;
				return async ({ result }) => {
					await applyAction(result);
					await invalidate('admin:group');
					loading = false;
					editGroupModal = null;
				};
			}}
			class="flex flex-col gap-2"
		>
			<Title level={3}>Изменить название гурппы</Title>
			<Input name="name" value={editGroupModal.name} placeholder="Название группы" />
			<div class="flex gap-1">
				<Button
					disabled={loading}
					on:click={(event) => {
						event.preventDefault();
						editGroupModal = null;
					}}
				>
					Отмена
				</Button>
				<Button disabled={loading} type="submit">Сохранить</Button>
			</div>
		</form>
	</div>
{/if}
