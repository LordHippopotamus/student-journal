<script lang="ts">
	import { Chevron } from '$lib/icons';
	import { clickoutside } from '@svelte-put/clickoutside';

	export let data: { value: string; label: string }[];
	export let value = data[0].value;
	
	let open = false;
</script>

<div
	class={`relative w-44  ${$$props.class}`}
	use:clickoutside
	on:clickoutside={() => (open = false)}
>
	<button
		on:click={() => (open = !open)}
		class="whitespace-nowrap flex items-center gap-1 justify-between w-full p-2 rounded transition border border-zinc-950 dark:border-zinc-50"
	>
		{data.find((el) => el.value === value)?.label}
		<div class={open ? 'rotate-180' : ''}>
			<Chevron />
		</div>
	</button>

	{#if open}
		<ul
			class="w-full absolute mt-1 flex flex-col gap-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-950 dark:border-zinc-50 rounded p-2"
		>
			{#each data as el}
				<li>
					<button
						on:click={() => {
							value = el.value;
							open = false;
						}}
						class="w-full rounded p-2 transition text-left hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-800 dark:active:bg-zinc-700"
					>
						{el.label}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
