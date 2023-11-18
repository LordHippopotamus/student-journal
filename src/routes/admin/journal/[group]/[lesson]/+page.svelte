<script lang="ts">
	import type { PageData } from './$types';
	import PeriodsTable from './PeriodsTable.svelte';
	import SelectDate from '$lib/SelectDate.svelte';

	export let data: PageData;

	let date = new Date();
</script>

<ul>
	<li>Группа: <span>{data.group.name} ({data.group.start_year} - {data.group.end_year})</span></li>
	<li>Предмет: <span>{data.lesson.name}</span></li>
</ul>
<SelectDate min={data.group.start_year} max={data.group.end_year} bind:date />
<PeriodsTable {date} students={data.students} periods={data.periods} lesson={data.lesson} />
