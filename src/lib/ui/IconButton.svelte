<script lang="ts">
	export let disabled = false;
</script>

<button
	{...$$restProps}
	{disabled}
	class={`self-start p-2 rounded transition border ${
		disabled
			? 'border-slate-400 text-slate-400 dark:border-slate-600 dark:text-slate-600'
			: ' border-slate-950 hover:bg-slate-100 active:bg-slate-200 dark:border-slate-50 dark:hover:bg-slate-800 dark:active:bg-slate-700'
	} ${$$props.class}`}
	on:click
>
	<slot />
</button>
