<script lang="ts">
	import GroupList from './GroupList.svelte';
	import AddGroupForm from './AddGroupForm.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="flex flex-col gap-2">
	<AddGroupForm />
	<GroupList groups={data.groups} />
</div>
