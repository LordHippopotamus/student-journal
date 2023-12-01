<script lang="ts">
	import type { PageData } from './$types';
	import PeriodsTable from './PeriodsTable.svelte';
	import SelectDate from '$lib/SelectDate.svelte';

	export let data: PageData;

	let date = new Date();
</script>

<ul class="flex flex-col gap-1">
	<li>
		Группа: <span class="font-bold"
			>{data.group.name} ({data.group.start_year} - {data.group.end_year})</span
		>
	</li>
	<li>Предмет: <span class="font-bold">{data.lesson.name}</span></li>
	<li class="flex gap-1 items-center">
		Дата: <SelectDate min={data.group.start_year} max={data.group.end_year} bind:date />
	</li>
</ul>
<div class="mt-2 w-full overflow-x-auto">
	<PeriodsTable {date} students={data.students} periods={data.periods} lesson={data.lesson} />
</div>
