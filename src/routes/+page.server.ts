import { supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const { data: groups, error: groupsError } = await supabase
		.from('groups')
		.select()
		.order('start_year');
	if (groupsError) throw error(500, groupsError.message);

	const group = url.searchParams.get('group');
	const full_name = url.searchParams.get('full_name');

	const query = supabase.from('students').select();

	if (group) query.eq('group', group);
	if (full_name) query.textSearch('full_name', full_name);

	const { data: students, error: studentsError } = await query;
	if (studentsError) throw error(500, studentsError.message);

	return { groups, students };
};
