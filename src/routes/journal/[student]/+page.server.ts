import { supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { data: student, error: studentError } = await supabase
		.from('students')
		.select()
		.eq('id', params.student)
		.single();
	if (studentError) throw error(500, 'students load error: ' + studentError.message);

	const { data: group, error: groupError } = await supabase
		.from('groups')
		.select()
		.eq('id', student.group)
		.single();
	if (groupError) throw error(500, 'group load error: ' + groupError.message);

	const { data: lessons, error: lessonsError } = await supabase
		.from('lessons')
		.select()
		.order('name');
	if (lessonsError) throw error(500, 'lessons load error: ' + lessonsError.message);

	const { data: periods, error: periodsError } = await supabase
		.from('periods')
		.select()
		.eq('student', params.student);
	if (periodsError) throw error(500, 'periods load error: ' + periodsError.message);

	return { lessons, periods, student: student, group };
};
