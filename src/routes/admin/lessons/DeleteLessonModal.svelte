<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import type { Tables } from '$lib/database.types';
	import { Button, Title } from '$lib/ui';

	export let deleteLessonModal: null | Tables<'lessons'>;

	let loading = false;
</script>

{#if deleteLessonModal}
	<div
		class="border bg-zinc-50 border-zinc-950 dark:bg-zinc-900 dark:border-zinc-50 rounded shadow-lg p-2 w-80 sm:w-96 absolute top-[50%] left-[50%] -tranzinc-x-[50%] -tranzinc-y-[50%]"
	>
		<form
			method="post"
			action="?/delete_lesson"
			use:enhance={({ data }) => {
				if (!deleteLessonModal) return;
				data.append('id', deleteLessonModal.id);
				loading = true;
				return async ({ result }) => {
					await applyAction(result);
					await invalidate('admin:lessons');
					loading = false;
					deleteLessonModal = null;
				};
			}}
			class="flex flex-col gap-2"
		>
			<Title level={3}>Удаление предмета</Title>
			<p>
				Вы действительно хотите удалить предмет
				<span class="font-bold">{deleteLessonModal.name}</span>? Это действие необратимо.
			</p>
			<div class="flex gap-1">
				<Button
					disabled={loading}
					on:click={(event) => {
						event.preventDefault();
						deleteLessonModal = null;
					}}
				>
					Отмена
				</Button>
				<Button disabled={loading}>Удалить</Button>
			</div>
		</form>
	</div>
{/if}
