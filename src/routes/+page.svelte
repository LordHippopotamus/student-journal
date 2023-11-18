<script lang="ts">
	import { navigating } from '$app/stores';
	import type { PageData } from './$types';
	import SearchStudentForm from './SearchStudentForm.svelte';
	import StudentsList from './StudentsList.svelte';
	export let data: PageData;
</script>

<h1>Журнал</h1>
<SearchStudentForm groups={data.groups} />
{#if $navigating}
	<div>loading...</div>
{:else}
	<StudentsList students={data.students} />
{/if}
