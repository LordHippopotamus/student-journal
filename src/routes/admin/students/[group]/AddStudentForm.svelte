<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { applyAction, enhance } from '$app/forms';

	export let groupName: string;

	let loading = false;
</script>

<h2>Добавить студента для группы <span>{groupName}</span></h2>
<form
	method="post"
	action="?/add_student"
	use:enhance={() => {
		loading = true;
		return async ({ result }) => {
			await applyAction(result);
			await invalidate('admin:students');
			loading = false;
		};
	}}
>
	<input type="text" name="full_name" placeholder="Полное имя" />
	<button disabled={loading}>Добавить</button>
</form>
