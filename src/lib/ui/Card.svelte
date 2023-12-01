<script lang="ts">
	export let href = '';
</script>

<a
	{href}
	{...$$restProps}
	class={`hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-900 dark:active:bg-zinc-800 block px-6 py-2 rounded transition ${$$props.class}`}
>
	<slot />
</a>
