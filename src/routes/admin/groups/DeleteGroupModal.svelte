<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import type { Tables } from '$lib/database.types';
	import { Button, Title } from '$lib/ui';

	export let deleteGroupModal: null | Tables<'groups'>;

	let loading = false;
</script>

{#if deleteGroupModal}
	<div
		class="bg-slate-50 border border-slate-400 rounded shadow-lg p-2 w-80 sm:w-96 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
	>
		<form
			method="post"
			action="?/delete_group"
			use:enhance={({ data }) => {
				if (!deleteGroupModal) return;
				data.append('id', deleteGroupModal.id);
				loading = true;
				return async ({ result }) => {
					await applyAction(result);
					await invalidate('admin:group');
					loading = false;
					deleteGroupModal = null;
				};
			}}
			class="flex flex-col gap-2"
		>
			<Title level={3}>Удаление гурппы</Title>
			<p>
				Вы действительно хотите удалить группу
				<span class="font-bold">{deleteGroupModal.name}</span>? Это действие необратимо.
			</p>
			<div class="flex gap-1">
				<Button
					disabled={loading}
					on:click={(event) => {
						event.preventDefault();
						deleteGroupModal = null;
					}}
				>
					Отмена
				</Button>
				<Button disabled={loading}>Удалить</Button>
			</div>
		</form>
	</div>
{/if}
