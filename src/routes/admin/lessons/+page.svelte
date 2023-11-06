<script lang="ts">
	import LessonsList from './LessonsList.svelte';
	import AddLessonForm from './AddLessonForm.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<AddLessonForm />
<LessonsList lessons={data.lessons} />
