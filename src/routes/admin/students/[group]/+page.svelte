<script lang="ts">
	import type { PageData } from './$types';
	import AddStudentForm from './AddStudentForm.svelte';
	import StudentsList from './StudentsList.svelte';

	export let data: PageData;
</script>

<AddStudentForm groupName={data.group.name} />
<StudentsList students={data.students} groupName={data.group.name} />
