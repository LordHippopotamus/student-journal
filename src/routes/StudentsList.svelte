<script lang="ts">
	import type { Tables } from '$lib/database.types';
	import { Card } from '$lib/ui';

	export let students: Tables<'students'>[];
</script>

<ul class="flex flex-wrap gap-1 items-start">
	{#each students as student}
		<li>
			<Card href={'journal/' + student.id}>{student.full_name}</Card>
		</li>
	{/each}
</ul>
