import { supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends }) => {
	depends('admin:group');

	const { data: groups, error: supabaseError } = await supabase
		.from('groups')
		.select()
		.order('start_year', { ascending: true });

	if (supabaseError) throw error(500, supabaseError?.message);

	return { groups };
};

export const actions = {
	add_group: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const start_year = formData.get('start_year') as string;
		const end_year = formData.get('end_year') as string;

		const { error: supabaseError } = await supabase
			.from('groups')
			.insert({ name, start_year: +start_year, end_year: +end_year });

		if (supabaseError) throw error(500, supabaseError?.message);

		return { success: true };
	},
	edit_group: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id') as string;
		const name = formData.get('name') as string;
		const { error: supabaseError } = await supabase.from('groups').update({ name }).eq('id', id);

		if (supabaseError) throw error(500, supabaseError?.message);

		return { success: true };
	},
	delete_group: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id') as string;

		const { error: supabaseError } = await supabase.from('groups').delete().eq('id', id);

		if (supabaseError) throw error(500, supabaseError?.message);

		return { success: true };
	}
} satisfies Actions;
