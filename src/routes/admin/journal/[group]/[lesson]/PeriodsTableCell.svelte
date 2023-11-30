<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { Tables } from '$lib/database.types';
	import { supabase } from '$lib/supabaseClient';
	import { clickoutside } from '@svelte-put/clickoutside';

	export let date: Date,
		period: Tables<'periods'> | null,
		student: Tables<'students'>,
		lesson: Tables<'lessons'>;

	let editing = false;
	let loading = false;
	$: value = period?.mark ?? '';
	const handleSave = async () => {
		if (!editing) return;
		loading = true;

		const obj = {
			date: date.toISOString(),
			lesson: lesson.id,
			mark: value,
			student: student.id
		};

		if (!period && obj.mark) await supabase.from('periods').insert(obj);
		if (period && obj.mark && obj.mark !== period.mark)
			await supabase.from('periods').update(obj).eq('id', period.id);
		if (period && !obj.mark) await supabase.from('periods').delete().eq('id', period.id);

		await invalidate('admin:periods');

		loading = false;
		editing = false;
	};
</script>

<td
	class="mt-2 border border-zinc-950 dark:border-zinc-50 w-4"
	on:dblclick={() => (editing = true)}
	use:clickoutside
	on:clickoutside={handleSave}
>
	{#if editing}
		<!-- svelte-ignore a11y-autofocus -->
		<input
			name="mark"
			type="text"
			disabled={loading}
			{value}
			on:change={(event) => (value = event.currentTarget.value)}
			class="w-4 bg-transparent"
			autofocus
			on:keyup={(event) => {
				if (event.key === 'Escape') editing = false;
				if (event.key === 'Enter') {
					event.currentTarget.blur();
					handleSave();
				}
			}}
		/>
	{:else}
		{period?.mark ?? ''}
	{/if}
</td>
