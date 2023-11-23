<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import { Button, Input, Title } from '$lib/ui';
	let loading = false;
</script>

<Title level={2}>Добавить группу</Title>
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
	class="flex gap-1 flex-wrap mt-1"
>
	<Input type="text" name="name" placeholder="Название группы" />
	<Input type="number" step="1" name="start_year" placeholder="Год начала обучения" />
	<Input type="number" step="1" name="end_year" placeholder="Год окончания обучения" />
	<Button disabled={loading}>Добавить</Button>
</form>
