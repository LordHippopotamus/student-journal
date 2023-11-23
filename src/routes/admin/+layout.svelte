<script lang="ts">
	import { page } from '$app/stores';
	const routes = [
		{ url: '/admin/groups', name: 'Группы' },
		{ url: '/admin/lessons', name: 'Предметы' },
		{ url: '/admin/students', name: 'Студенты' },
		{ url: '/admin/journal', name: 'Журнал' }
	];
</script>

<div class="flex">
	<ul class="border-r bg-slate-500 border-slate-400 block w-32 min-h-screen">
		{#each routes as route}
			<li class="text-white">
				{#if $page.url.pathname.search(route.url) !== -1}
					<div class="w-full p-2 bg-slate-700">
						{route.name}
					</div>
				{:else}
					<a
						href={route.url}
						class="block w-full p-2 transition hover:bg-slate-600 active:bg-slate-700"
					>
						{route.name}
					</a>
				{/if}
			</li>
		{/each}
	</ul>

	<div class="px-2 py-4 w-full sm:relative">
		<slot />
	</div>
</div>
