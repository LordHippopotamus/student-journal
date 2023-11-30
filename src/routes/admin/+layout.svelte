<script lang="ts">
	import { page } from '$app/stores';
	const routes = [
		{ url: '/admin/lessons', name: 'Предметы' },
		{ url: '/admin/groups', name: 'Группы' },
		{ url: '/admin/students', name: 'Студенты' },
		{ url: '/admin/journal', name: 'Журнал' }
	];
</script>

<div class="flex">
	<ul class="border-r border-slate-950 dark:border-slate-50 block w-32 min-h-screen">
		<li class="">
			<a href="/" class="block w-full p-2 transition hover:bg-slate-100 active:bg-slate-200 dark:hover:bg-slate-800 dark:active:bg-slate-700">
				Главная
			</a>
		</li>
		{#each routes as route}
			<li class="">
				{#if $page.url.pathname.search(route.url) !== -1}
					<div class="w-full p-2 bg-slate-950 text-slate-50 dark:bg-slate-50 dark:text-slate-950">
						{route.name}
					</div>
				{:else}
					<a
						href={route.url}
						class="block w-full p-2 transition hover:bg-slate-100 active:bg-slate-200 dark:hover:bg-slate-800 dark:active:bg-slate-700"
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
