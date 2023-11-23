<script lang="ts">
	import { clickoutside } from '@svelte-put/clickoutside';
	import { createEventDispatcher } from 'svelte';

	export let open: boolean;
	const dispatch = createEventDispatcher();
</script>

{#if open}
	<div
		use:clickoutside
		on:clickoutside={() => open && dispatch('close')}
		class="bg-slate-50 border border-slate-400 rounded shadow-lg p-2 w-96 absolute"
	>
		<slot />
	</div>
{/if}
