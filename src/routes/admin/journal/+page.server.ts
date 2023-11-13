import { supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends }) => {
	depends('admin:groups');

	const { data: groups, error: groupsError } = await supabase
		.from('groups')
		.select()
		.order('start_year');

	if (groupsError) throw error(500, groupsError.message);

	return { groups };
};
