<script lang="ts">
	import type { Tables } from '$lib/database.types';
	import { Title } from '$lib/ui';
	import DeleteGroupModal from './DeleteGroupModal.svelte';
	import EditGroupModal from './EditGroupModal.svelte';
	import GroupItem from './GroupItem.svelte';

	export let groups: Tables<'groups'>[];
	let deleteGroupModal: Tables<'groups'> | null = null,
		editGroupModal: Tables<'groups'> | null = null;
</script>

<div>
	<Title level={2}>Список групп</Title>
	<ul class="flex flex-col gap-1 mt-1">
		{#each groups as group}
			<GroupItem
				{group}
				on:edit={() => (editGroupModal = group)}
				on:delete={() => (deleteGroupModal = group)}
			/>
		{/each}
	</ul>
	<DeleteGroupModal bind:deleteGroupModal />
	<EditGroupModal bind:editGroupModal />
</div>
