import { supabase } from '../supabase';
import { getUser } from './auth.js';

export async function submitQuiz(level, score, passed) {
  const user = await getUser();
  if (!user) return;

  const { error } = await supabase.from('quizzes').insert([
    {
      user_id: user.id,
      level,
      score,
      passed,
      date: new Date().toISOString(),
    }
  ]);

  return { success: !error, error };
}
