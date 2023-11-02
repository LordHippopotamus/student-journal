<script lang="ts">
	import { enhance, applyAction } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let loading = false;
</script>

<h1>Вход</h1>
<form
	method="post"
	use:enhance={() => {
		loading = true;
		return async ({ result }) => {
			await applyAction(result);
			loading = false;
		};
	}}
>
	<input name="email" type="email" placeholder="Почта" />
	<input name="password" type="password" placeholder="Пароль" />
	<button disabled={loading}>Войти</button>
</form>
{#if form && !form.success}
	<div>
		<h5>Ошибка!</h5>
		<span>{form.message}</span>
	</div>
{/if}
