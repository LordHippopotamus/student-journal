<script lang="ts">
	export let level: 1 | 2 | 3;
</script>

{#if level === 1}
	<h1 {...$$restProps} class={`text-4xl font-semibold ${$$props.class}`}><slot /></h1>
{:else if level === 2}
	<h2 {...$$restProps} class={`text-xl font-semibold ${$$props.class}`}><slot /></h2>
{:else if level === 3}
	<h2 {...$$restProps} class={`text-lg font-semibold ${$$props.class}`}><slot /></h2>
{/if}
