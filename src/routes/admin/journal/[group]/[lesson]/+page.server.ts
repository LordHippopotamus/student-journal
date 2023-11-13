import { supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Tables } from '$lib/database.types';

export const load: PageServerLoad = async ({ params, depends }) => {
	depends('admin:periods');

	const { data: students, error: studentsError } = await supabase
		.from('students')
		.select()
		.eq('group', params.group);

	if (studentsError) throw error(500, studentsError.message);

	const { data: lesson, error: lessonError } = await supabase
		.from('lessons')
		.select()
		.eq('id', params.lesson)
		.single();

	if (lessonError) throw error(500, lessonError.message);

	const { data: group, error: groupError } = await supabase
		.from('groups')
		.select()
		.eq('id', params.group)
		.single();

	if (groupError) throw error(500, groupError.message);

	const { data: periods, error: periodsError } = await supabase
		.from('periods')
		.select('*, student!inner()')
		.eq('student.group', params.group)
		.eq('lesson', params.lesson)
		.returns<Tables<'periods'>[]>();

	if (periodsError) throw error(500, periodsError.message);

	return { students, periods, lesson, group };
};
