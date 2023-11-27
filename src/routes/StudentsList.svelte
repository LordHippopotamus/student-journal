<script lang="ts">
	import type { Tables } from '$lib/database.types';

	export let students: Tables<'students'>[];
</script>

<ul class="flex flex-wrap gap-1 items-start">
	{#each students as student}
		<li>
			<a
				class="hover:bg-slate-200 active:bg-slate-300 block px-6 py-2 rounded transition"
				href={'journal/' + student.id}>{student.full_name}</a
			>
		</li>
	{/each}
</ul>
