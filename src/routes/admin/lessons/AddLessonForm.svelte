<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import { Button, Input, Title } from '$lib/ui';

	let loading = false;
</script>

<div>
	<Title level={2}>Добавить предмет</Title>
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
		class="flex gap-1 flex-wrap mt-1"
	>
		<Input type="text" name="name" placeholder="Название предмета" />
		<Button disabled={loading}>Добавить</Button>
	</form>
</div>
