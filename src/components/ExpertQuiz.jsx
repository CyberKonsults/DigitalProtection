import React, { useState } from 'react';
import { submitQuiz } from '../services/quizService.js';

export default function ExpertQuiz() {
  const questions = [
    { question: 'What is a VPN?', options: ['Video Party Network', 'Virtual Private Network', 'Virus Protection Node', 'Very Popular Network'], answer: 1 },
    { question: 'What’s the safest way to store passwords?', options: ['Write on sticky notes', 'Use a password manager', 'Tell a friend', 'Email them to yourself'], answer: 1 },
    { question: 'What does “phishing” target most often?', options: ['Money', 'Bank information and passwords', 'Your favorite movies', 'Weather forecasts'], answer: 1 },
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
      submitQuiz('Expert', Math.round((score + (index === questions[current].answer ? 1 : 0)) / questions.length * 100), (score + (index === questions[current].answer ? 1 : 0)) >= 2);
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
            className="block w-full p-2 border rounded bg-purple-100 hover:bg-purple-300"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
