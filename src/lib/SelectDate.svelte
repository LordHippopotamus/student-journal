<script lang="ts">
	import { Input, Select } from './ui';

	export let date: Date, min: number, max: number;
	let currentYear = new Date().getFullYear();

	let month = String(date.getMonth()),
		year = String(date.getFullYear());

	$: year, month, (date = new Date(+year, +month));
</script>

<div class="flex gap-1">
	<!-- TODO: min max not working if user types value by keyboard -->
	<Input
		name="year"
		type="number"
		step="1"
		placeholder="Год"
		{min}
		max={currentYear < max ? currentYear : max}
		bind:value={year}
		class="w-24"
	/>
	<Select
		name="month"
		bind:value={month}
		data={[
			{ value: '0', label: 'Январь' },
			{ value: '1', label: 'Февраль' },
			{ value: '2', label: 'Март' },
			{ value: '3', label: 'Апрель' },
			{ value: '4', label: 'Май' },
			{ value: '5', label: 'Июнь' },
			{ value: '6', label: 'Июль' },
			{ value: '7', label: 'Август' },
			{ value: '8', label: 'Сентябрь' },
			{ value: '9', label: 'Октябрь' },
			{ value: '10', label: 'Ноябрь' },
			{ value: '11', label: 'Декабрь' }
		]}
		class="!w-28"
	/>
</div>
