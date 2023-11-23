<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { applyAction, enhance } from '$app/forms';
	import { Button, Input, Title } from '$lib/ui';

	export let groupName: string;

	let loading = false;
</script>

<Title level={2}>Добавить студента для группы <span>{groupName}</span></Title>
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
	class="flex gap-1 flex-wrap mt-1"
>
	<Input type="text" name="full_name" placeholder="Полное имя" />
	<Button disabled={loading}>Добавить</Button>
</form>
