<script lang="ts">
	import { enhance, applyAction } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let loading = false;
</script>

<div class="w-96 mx-auto my-16 p-4 shadow-lg rounded text-slate-600 border-slate-400 border">
	<h1 class="text-4xl text-center font-semibold">Вход</h1>
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
		<input
			name="email"
			type="email"
			placeholder="Почта"
			class="bg-transparent border border-slate-400 rounded p-2"
		/>
		<input
			name="password"
			type="password"
			placeholder="Пароль"
			class="bg-transparent border border-slate-400 rounded p-2"
		/>
		{#if form && !form.success}
			<div class="p-4 shadow rounded bg-slate-50 border-slate-400 border">
				<h5 class="text-lg font-semibold">Ошибка входа!</h5>
				<span>{form.message}</span>
			</div>
		{/if}
		<button
			class={`self-start px-6 py-2 rounded transition ${
				loading
					? 'bg-slate-200 text-slate-700'
					: 'bg-slate-500 hover:bg-slate-600 active:bg-slate-700 text-white'
			} `}
			disabled={loading}>Войти</button
		>
	</form>
</div>
