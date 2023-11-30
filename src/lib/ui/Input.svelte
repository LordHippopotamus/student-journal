<script lang="ts">
	export let value: string = '';
</script>

<input
	{...$$restProps}
	bind:value
	class={`bg-transparent border border-zinc-950 dark:border-zinc-50 rounded p-2  ${$$props.class}`}
/>
