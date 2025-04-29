import React from 'react';
import BeginnerQuiz from './BeginnerQuiz';
import IntermediateQuiz from './IntermediateQuiz';
import ExpertQuiz from './ExpertQuiz';

export default function QuizLauncher() {
  const [level, setLevel] = React.useState(null);

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      {!level && (
        <>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">🚀 Choose Your Quiz Level</h2>
          <button onClick={() => setLevel('beginner')} className="m-2 px-4 py-2 bg-blue-700 text-white rounded">Beginner</button>
          <button onClick={() => setLevel('intermediate')} className="m-2 px-4 py-2 bg-blue-600 text-white rounded">Intermediate</button>
          <button onClick={() => setLevel('expert')} className="m-2 px-4 py-2 bg-blue-500 text-white rounded">Expert</button>
        </>
      )}
      {level === 'beginner' && <BeginnerQuiz />}
      {level === 'intermediate' && <IntermediateQuiz />}
      {level === 'expert' && <ExpertQuiz />}
    </div>
  );
}
