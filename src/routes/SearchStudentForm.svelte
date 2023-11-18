<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { Tables } from '$lib/database.types';
	import { onMount } from 'svelte';

	export let groups: Tables<'groups'>[];

	let full_name = $page.url.searchParams.get('full_name') || '';
	let group = $page.url.searchParams.get('group') || '';
	let isMounted = false;

	onMount(() => (isMounted = true));

	const applySearchParams = () => {
		if (!browser) return;
		if (!isMounted && !full_name && !group) return;
		let old = { full_name, group };
		setTimeout(async () => {
			if (full_name !== old.full_name || group !== old.group) return;
			await goto(`?full_name=${full_name}&group=${group}`, { keepFocus: true });
		}, 1000);
	};

	$: full_name, group, applySearchParams();
</script>

<input bind:value={full_name} name="full_name" type="text" placeholder="Ф.И.О. студента" />
<select name="group" bind:value={group}>
	<option value="">Выберите группу</option>
	{#each groups as group}
		<option value={group.id}>{group.name}</option>
	{/each}
</select>
