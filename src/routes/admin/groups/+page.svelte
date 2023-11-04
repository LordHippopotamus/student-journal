<script lang="ts">
	import GroupList from './GroupList.svelte';
	import AddGroupForm from './AddGroupForm.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<AddGroupForm />
<GroupList groups={data.groups} />
