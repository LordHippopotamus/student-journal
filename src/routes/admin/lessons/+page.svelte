<script lang="ts">
	import LessonsList from './LessonsList.svelte';
	import AddLessonForm from './AddLessonForm.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="flex flex-col gap-2">
	<AddLessonForm />
	<LessonsList lessons={data.lessons} />
</div>
