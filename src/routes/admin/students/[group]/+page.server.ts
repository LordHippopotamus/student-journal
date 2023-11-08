import { supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ depends, params }) => {
	depends('admin:students');

	const { data: group, error: groupError } = await supabase
		.from('groups')
		.select()
		.eq('id', params.group)
		.single();

	if (groupError) throw error(500, groupError.message);

	const { data: students, error: studentsError } = await supabase
		.from('students')
		.select()
		.eq('group', params.group);

	if (studentsError) throw error(500, studentsError.message);

	return { group, students };
};

export const actions = {
	add_student: async ({ request, params }) => {
		const formData = await request.formData();
		const full_name = formData.get('full_name') as string;

		const { error: supabaseError } = await supabase
			.from('students')
			.insert({ full_name, group: params.group });
		if (supabaseError) throw error(500, supabaseError.message);

		return { success: true };
	},
	edit_student: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id') as string;
		const full_name = formData.get('full_name') as string;

		const { error: supabaseError } = await supabase
			.from('students')
			.update({ full_name })
			.eq('id', id);
		if (supabaseError) throw error(500, supabaseError.message);

		return { success: true };
	},
	delete_student: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id') as string;

		const { error: supabaseError } = await supabase.from('students').delete().eq('id', id);
		if (supabaseError) throw error(500, supabaseError.message);

		return { success: true };
	}
} satisfies Actions;
