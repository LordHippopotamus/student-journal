<script lang="ts">
	export let disabled = false;
	export let element: 'button' | 'a' = 'button';
</script>

<!-- The rule can be disabled because component only renders a button or link.
	 So the role attribute doesn't make sense. -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={element}
	{...$$restProps}
	class={`block self-start px-6 py-2 rounded transition border ${
		disabled
			? 'border-zinc-400 text-zinc-400 dark:border-zinc-600 dark:text-zinc-600'
			: ' border-zinc-950 hover:bg-zinc-200 active:bg-zinc-300 dark:border-zinc-50 dark:hover:bg-zinc-800 dark:active:bg-zinc-700'
	} ${$$props.class}`}
	on:click
>
	<slot />
</svelte:element>
