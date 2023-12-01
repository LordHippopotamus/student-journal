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
	<ul class="border-r border-zinc-950 dark:border-zinc-50 block w-32 min-h-screen">
		<li>
			<a
				href="/"
				class="block w-full p-2 transition hover:bg-zinc-100 active:bg-zinc-200 dark:hover:bg-zinc-800 dark:active:bg-zinc-700"
			>
				Главная
			</a>
		</li>
		{#each routes as route}
			<li>
				{#if $page.url.pathname.search(route.url) !== -1}
					<div class="w-full p-2 bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950">
						{route.name}
					</div>
				{:else}
					<a
						href={route.url}
						class="block w-full p-2 transition hover:bg-zinc-100 active:bg-zinc-200 dark:hover:bg-zinc-800 dark:active:bg-zinc-700"
					>
						{route.name}
					</a>
				{/if}
			</li>
		{/each}
	</ul>

	<div class="px-2 py-4 grow overflow-hidden sm:relative">
		<slot />
	</div>
</div>
