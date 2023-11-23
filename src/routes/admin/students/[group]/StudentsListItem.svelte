<script lang="ts">
	import type { Tables } from '$lib/database.types';
	import { Pencil, Trash } from '$lib/icons';
	import { IconButton } from '$lib/ui';
	import { createEventDispatcher } from 'svelte';

	export let student: Tables<'students'>;

	const dispatch = createEventDispatcher();
</script>

<li class="flex items-center gap-2">
	<span>
		{student.full_name}
	</span>
	<div class="flex gap-1">
		<IconButton on:click={() => dispatch('edit')}>
			<Pencil />
		</IconButton>
		<IconButton on:click={() => dispatch('delete')}>
			<Trash />
		</IconButton>
	</div>
</li>
