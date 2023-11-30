<script lang="ts">
	import type { Tables } from '$lib/database.types';
	import PeriodsTableCell from './PeriodsTableCell.svelte';

	export let students: Tables<'students'>[],
		periods: Tables<'periods'>[],
		lesson: Tables<'lessons'>,
		date: Date;

	$: daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
	$: days = [...Array(daysInMonth + 1).keys()].slice(1);

	const getPeriod = (studentId: string, lessonId: string, cellDate: Date) =>
		periods.find((el) => {
			const periodDate = new Date(el.date);

			if (
				periodDate.getFullYear() !== cellDate.getFullYear() ||
				periodDate.getMonth() !== cellDate.getMonth() ||
				periodDate.getDate() !== cellDate.getDate() ||
				el.student !== studentId ||
				el.lesson !== lessonId
			) {
				return false;
			}

			return true;
		}) ?? null;
</script>

<table  class="mt-2 border border-slate-950 dark:border-slate-50">
	<tr>
		<th>Имя/Дата</th>
		{#each days as day}
			<th  class="mt-2 border border-slate-950 dark:border-slate-50">{day}</th>
		{/each}
	</tr>
	{#each students as student}
		<tr>
			<td class="mt-2 border border-slate-950 dark:border-slate-50">{student.full_name}</td>
			{#each days as day}
				<PeriodsTableCell
					date={new Date(date.getFullYear(), date.getMonth(), day + 1)}
					{student}
					{lesson}
					period={getPeriod(
						student.id,
						lesson.id,
						new Date(date.getFullYear(), date.getMonth(), day)
					)}
				/>
			{/each}
		</tr>
	{/each}
</table>
