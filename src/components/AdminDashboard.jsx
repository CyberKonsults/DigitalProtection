import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';

export default function AdminDashboard() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function loadData() {
      const { data } = await supabase.from('quizzes').select('*').order('date', { ascending: false });
      setResults(data || []);
    }
    loadData();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">📊 Learner Quiz Results</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-blue-100">
            <th className="p-2 border">User ID</th>
            <th className="p-2 border">Level</th>
            <th className="p-2 border">Score</th>
            <th className="p-2 border">Passed</th>
            <th className="p-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <tr key={i} className="text-center">
              <td className="p-2 border text-xs">{r.user_id}</td>
              <td className="p-2 border">{r.level}</td>
              <td className="p-2 border">{r.score}%</td>
              <td className="p-2 border">{r.passed ? '✅' : '❌'}</td>
              <td className="p-2 border text-xs">{new Date(r.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
