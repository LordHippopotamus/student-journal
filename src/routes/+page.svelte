<script lang="ts">
	import type { PageData } from './$types';
	import SearchStudentForm from './SearchStudentForm.svelte';
	import StudentsList from './StudentsList.svelte';
	export let data: PageData;
</script>

<div class="container mx-auto px-4 my-8">
	<SearchStudentForm groups={data.groups} />
	<StudentsList students={data.students} />
</div>
