<script lang="ts">
	import type { Tables } from '$lib/database.types';

	export let students: Tables<'students'>[];
</script>

<ul>
	{#each students as student}
		<li><a href={'journal/' + student.id}>{student.full_name}</a></li>
	{/each}
</ul>
