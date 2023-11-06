import { supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends }) => {
	depends('admin:lessons');

	const { data: lessons, error: supabaseError } = await supabase
		.from('lessons')
		.select()
		.order('name', { ascending: true });

	if (supabaseError) throw error(500, supabaseError?.message);

	return { lessons };
};

export const actions = {
	add_lesson: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;

		const { error: supabaseError } = await supabase.from('lessons').insert({ name });

		if (supabaseError) throw error(500, supabaseError?.message);

		return { success: true };
	},
	edit_lesson: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id') as string;
		const name = formData.get('name') as string;

		const { error: supabaseError } = await supabase.from('lessons').update({ name }).eq('id', id);

		if (supabaseError) throw error(500, supabaseError?.message);

		return { success: true };
	},
	delete_lesson: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id') as string;

		const { error: supabaseError } = await supabase.from('lessons').delete().eq('id', id);

		if (supabaseError) throw error(500, supabaseError?.message);

		return { success: true };
	}
} satisfies Actions;
