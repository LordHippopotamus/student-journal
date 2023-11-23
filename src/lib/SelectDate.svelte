<script lang="ts">
	export let date: Date, min: number, max: number;
	let currentYear = new Date().getFullYear();
</script>

<div class="flex gap-1">
	<!-- TODO: min max not working if user types value by keyboard -->
	<input
		name="year"
		type="number"
		step="1"
		placeholder="Год"
		{min}
		max={currentYear < max ? currentYear : max}
		value={date.getFullYear()}
		on:change={(event) => {
			date = new Date(+event.currentTarget.value, date.getMonth());
		}}
		class="p-1 border border-slate-400 rounded w-24 text-base box-border"
	/>
	<select
		name="month"
		value={date.getMonth()}
		on:change={(event) => {
			date = new Date(date.getFullYear(), +event.currentTarget.value);
		}}
		class="p-1 border bg-transparent border-slate-400 rounded w-24 text-base box-border h-[34px] block"
	>
		<option value={0}>Январь</option>
		<option value={1}>Февраль</option>
		<option value={2}>Март</option>
		<option value={3}>Апрель</option>
		<option value={4}>Май</option>
		<option value={5}>Июнь</option>
		<option value={6}>Июль</option>
		<option value={7}>Август</option>
		<option value={8}>Сентябрь</option>
		<option value={9}>Октябрь</option>
		<option value={10}>Ноябрь</option>
		<option value={11}>Декабрь</option>
	</select>
</div>
