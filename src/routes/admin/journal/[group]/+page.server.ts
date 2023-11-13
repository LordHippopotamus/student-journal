import { supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends }) => {
	depends('admin:lessons');

	const { data: lessons, error: lessonsError } = await supabase
		.from('lessons')
		.select()
		.order('name');

	if (lessonsError) throw error(500, lessonsError.message);

	return { lessons };
};
