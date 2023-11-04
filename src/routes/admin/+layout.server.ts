import { supabase } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ depends }) => {
	depends('admin:group');

	const {
		data: { session }
	} = await supabase.auth.getSession();
	const { data: director } = await supabase.from('admins').select().single();

	if (director?.id !== session?.user.id) throw redirect(307, '/login');
};
