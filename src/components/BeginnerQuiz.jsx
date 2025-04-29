import React, { useState } from 'react';
import { submitQuiz } from '../services/quizService.js';

export default function BeginnerQuiz() {
  const questions = [
    { question: 'What is phishing?', options: ['Fishing in the ocean', 'A scam to steal information', 'A video game', 'A cooking method'], answer: 1 },
    { question: 'What should you do if you get a suspicious email?', options: ['Click the link', 'Ignore and report it', 'Reply immediately', 'Delete all your emails'], answer: 1 },
    { question: 'Which is a strong password?', options: ['123456', 'password', 'T!g3r$2024', 'abcd'], answer: 2 },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  function handleAnswer(index) {
    if (index === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setCompleted(true);
      submitQuiz('Beginner', Math.round((score + (index === questions[current].answer ? 1 : 0)) / questions.length * 100), (score + (index === questions[current].answer ? 1 : 0)) >= 2);
    }
  }

  if (completed) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Quiz Completed!</h2>
        <p className="text-lg">Your score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">{questions[current].question}</h2>
      <div className="space-y-2">
        {questions[current].options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(idx)}
            className="block w-full p-2 border rounded bg-blue-100 hover:bg-blue-300"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
