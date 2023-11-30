<script lang="ts">
	import type { PageData } from './$types';
	import SelectDate from '$lib/SelectDate.svelte';

	export let data: PageData;

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

<div class="container px-4 mx-auto my-8">
	<ul class="flex flex-col gap-1">
		<li>
			Группа: <span class="font-bold">
				{data.group.name} ({data.group.start_year} - {data.group.end_year})
			</span>
		</li>
		<li>Ученик: <span class="font-bold">{data.student.full_name}</span></li>
		<li class="flex gap-1 items-center">
			Дата: <SelectDate min={data.group.start_year} max={data.group.end_year} bind:date />
		</li>
	</ul>

	<div class="w-full overflow-x-auto">
		<table class="mt-2 border border-zinc-950 dark:border-zinc-50">
			<tr>
				<th>Предмет/Дата</th>
				{#each days as day}
					<th class="border border-zinc-950 dark:border-zinc-50">{day}</th>
				{/each}
			</tr>
			{#each data.lessons as lesson}
				<tr>
					<td class="border border-zinc-950 dark:border-zinc-50">{lesson.name}</td>
					{#each days as day}
						<td class="border border-zinc-950 dark:border-zinc-50">
							{getMark(lesson.id, new Date(date.getFullYear(), date.getMonth(), day))}
						</td>
					{/each}
				</tr>
			{/each}
		</table>
	</div>
</div>
