<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	let loading = false;
</script>

<form
	method="post"
	action="?/add_lesson"
	use:enhance={() => {
		loading = true;
		return async ({ result }) => {
			await applyAction(result);
			await invalidate('admin:lessons');
			loading = false;
		};
	}}
>
	<h2>Добавить предмет</h2>
	<input type="text" name="name" placeholder="Название предмета" />
	<button disabled={loading}>Добавить</button>
</form>
