<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	let loading = false;
</script>

<form
	method="post"
	action="?/add_group"
	use:enhance={() => {
		loading = true;
		return async ({ result }) => {
			await applyAction(result);
			await invalidate('admin:group');
			loading = false;
		};
	}}
>
	<h2>Добавить группу</h2>
	<input type="text" name="name" placeholder="Название группы" />
	<input type="number" step="1" name="start_year" placeholder="Год начала обучения" />
	<input type="number" step="1" name="end_year" placeholder="Год окончания обучения" />
	<button disabled={loading}>Добавить</button>
</form>