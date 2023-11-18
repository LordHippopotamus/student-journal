<script lang="ts">
	import type { PageData } from './$types';
	import SelectDate from '$lib/SelectDate.svelte';

	export let data: PageData;

	const now = new Date()

	let date = new Date();

	$: daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
	$: days = [...Array(daysInMonth + 1).keys()].slice(1);

	const getMark = (lessonId: string, cellDate: Date) =>
		data.periods.find((el) => {
			const periodDate = new Date(el.date);

			if (
				periodDate.getFullYear() !== cellDate.getFullYear() ||
				periodDate.getMonth() !== cellDate.getMonth() ||
				periodDate.getDate() !== cellDate.getDate() ||
				el.lesson !== lessonId
			) {
				return false;
			}

			return true;
		})?.mark ?? '';
</script>

<ul>
	<li>Группа: <span>{data.group.name} ({data.group.start_year} - {data.group.end_year})</span></li>
	<li>Ученик: <span>{data.student.full_name}</span></li>
</ul>

<SelectDate bind:date min={data.group.start_year} max={data.group.end_year} />
<table>
	<tr>
		<th>Предмет/Дата</th>
		{#each days as day}
			<th>{day}</th>
		{/each}
	</tr>
	{#each data.lessons as lesson}
		<tr>
			<td>{lesson.name}</td>
			{#each days as day}
				<td>
					{getMark(lesson.id, new Date(date.getFullYear(), date.getMonth(), day))}
				</td>
			{/each}
		</tr>
	{/each}
</table>

<style>
	table,
	th,
	td {
		border: 1px solid black;
	}
</style>
