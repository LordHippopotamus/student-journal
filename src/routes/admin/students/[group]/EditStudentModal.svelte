<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import type { Tables } from '$lib/database.types';
	import { Button, Title } from '$lib/ui';
	import Input from '$lib/ui/Input.svelte';

	export let editStudentModal: null | Tables<'students'>;

	let loading = false;
</script>

{#if editStudentModal}
	<div
		class="bg-slate-50 border border-slate-400 rounded shadow-lg p-2 w-64 sm:w-96 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
	>
		<form
			method="post"
			action="?/edit_student"
			use:enhance={({ data }) => {
				if (!editStudentModal) return;
				data.append('id', editStudentModal.id);
				loading = true;
				return async ({ result }) => {
					await applyAction(result);
					await invalidate('admin:students');
					loading = false;
					editStudentModal = null;
				};
			}}
			class="flex flex-col gap-2"
		>
			<Title level={3}>Изменить имя студента</Title>
			<Input name="full_name" value={editStudentModal.full_name} placeholder="Полное имя" />
			<div>
				<Button
					disabled={loading}
					on:click={(event) => {
						event.preventDefault();
						editStudentModal = null;
					}}
				>
					Отмена
				</Button>
				<Button disabled={loading} type="submit">Сохранить</Button>
			</div>
		</form>
	</div>
{/if}
