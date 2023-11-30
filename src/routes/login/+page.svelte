<script lang="ts">
	import { enhance, applyAction } from '$app/forms';
	import type { ActionData } from './$types';
	import { Button, Input, Title } from '$lib/ui';

	export let form: ActionData;

	let loading = false;
</script>

<div class="w-96 mx-auto my-16 p-4 shadow-lg rounded border-zinc-950 dark:border-zinc-50 dark:bg-zinc-900 border">
	<Title level={1} class="text-center">Вход</Title>
	<form
		class="flex flex-col gap-4 mt-4"
		method="post"
		use:enhance={() => {
			loading = true;
			return async ({ result }) => {
				await applyAction(result);
				loading = false;
			};
		}}
	>
		<Input name="email" type="email" placeholder="Почта" />
		<Input name="password" type="password" placeholder="Пароль" />
		{#if form && !form.success}
			<div class="p-4 shadow rounded bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-50 border-zinc-950 border">
				<Title level={3}>Ошибка входа!</Title>
				<span>{form.message}</span>
			</div>
		{/if}
		<Button disabled={loading}>войти</Button>
	</form>
</div>
