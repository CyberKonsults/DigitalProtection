import React, { useState } from 'react';
import { submitQuiz } from '../services/quizService.js';

export default function IntermediateQuiz() {
  const questions = [
    { question: 'What is two-factor authentication (2FA)?', options: ['One password only', 'An extra security step', 'A virus', 'A game app'], answer: 1 },
    { question: 'Which site is safer?', options: ['http://website.com', 'https://secure.website.com', 'ftp://site.com', 'None'], answer: 1 },
    { question: 'If a stranger messages you online, what should you do?', options: ['Share your location', 'Ignore or report', 'Send your number', 'Meet them immediately'], answer: 1 },
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
      submitQuiz('Intermediate', Math.round((score + (index === questions[current].answer ? 1 : 0)) / questions.length * 100), (score + (index === questions[current].answer ? 1 : 0)) >= 2);
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
            className="block w-full p-2 border rounded bg-green-100 hover:bg-green-300"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
