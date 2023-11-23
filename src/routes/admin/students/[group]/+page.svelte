<script lang="ts">
	import type { PageData } from './$types';
	import AddStudentForm from './AddStudentForm.svelte';
	import StudentsList from './StudentsList.svelte';

	export let data: PageData;
</script>

<div class="flex flex-col gap-2">
	<AddStudentForm groupName={data.group.name} />
	<StudentsList students={data.students} groupName={data.group.name} />
</div>
