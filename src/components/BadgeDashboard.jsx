import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';

export default function BadgeDashboard() {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    async function fetchBadges() {
      const user = await supabase.auth.getUser();
      if (!user?.data?.user?.id) return;
      const { data } = await supabase.from('quizzes').select('*').eq('user_id', user.data.user.id);
      if (data) {
        setBadges(data.filter(q => q.passed).map(q => q.level));
      }
    }
    fetchBadges();
  }, []);

  const allLevels = ['Beginner', 'Intermediate', 'Expert'];

  return (
    <div className="p-6 bg-white rounded shadow max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">🎖️ Your Badges</h2>
      <ul className="space-y-2">
        {allLevels.map(level => (
          <li key={level} className="flex items-center gap-2">
            {badges.includes(level) ? '✅' : '⬜️'}
            <span>{level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
