<script lang="ts">
	export let disabled = false;
</script>

<button
	{...$$restProps}
	{disabled}
	class={`self-start p-2 rounded transition ${
		disabled
			? 'bg-slate-200 text-slate-700'
			: 'bg-slate-500 hover:bg-slate-600 active:bg-slate-700 text-white'
	} ${$$props.class}`}
	on:click
>
	<slot />
</button>
