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
			? 'border-slate-400 text-slate-400'
			: ' border-slate-950 hover:bg-slate-100 active:bg-slate-200'
	} ${$$props.class}`}
	on:click
>
	<slot />
</svelte:element>
