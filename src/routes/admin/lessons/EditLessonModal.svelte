<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import type { Tables } from '$lib/database.types';
	import { Button, Title } from '$lib/ui';
	import Input from '$lib/ui/Input.svelte';

	export let editLessonModal: null | Tables<'lessons'>;

	let loading = false;
</script>

{#if editLessonModal}
	<div
		class="border bg-slate-50 border-slate-950 dark:bg-slate-900 dark:border-slate-50 rounded shadow-lg p-2 w-64 sm:w-96 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
	>
		<form
			method="post"
			action="?/edit_lesson"
			use:enhance={({ data }) => {
				if (!editLessonModal) return;
				data.append('id', editLessonModal.id);
				loading = true;
				return async ({ result }) => {
					await applyAction(result);
					await invalidate('admin:lessons');
					loading = false;
					editLessonModal = null;
				};
			}}
			class="flex flex-col gap-2"
		>
			<Title level={3}>Изменить название предмета</Title>
			<Input name="name" value={editLessonModal.name} placeholder="Название предмета" />
			<div class="flex gap-1">
				<Button
					disabled={loading}
					on:click={(event) => {
						event.preventDefault();
						editLessonModal = null;
					}}
				>
					Отмена
				</Button>
				<Button disabled={loading} type="submit">Сохранить</Button>
			</div>
		</form>
	</div>
{/if}
