<script lang="ts">
	export let value: string = '';
</script>

<input
	{...$$restProps}
	bind:value
	class={`bg-transparent border border-slate-950 dark:border-slate-50 rounded p-2  ${$$props.class}`}
/>
