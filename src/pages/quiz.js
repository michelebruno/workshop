import React, { useState } from 'react';
import Question from '../components/Question';

const questions = [
  {
    title: 'How long does it take on average to read the term of use?',
    answers: [
      {
        label: '40 minutes',
        isTrue: true,
      },
      {
        label: '10 minutes',
        isTrue: false,
      },
      {
        label: '10 mi nutes',
        isTrue: false,
      },
      {
        label: '1 minutes',
        isTrue: false,
      },
    ],
    children: <span>Ciao</span>,
  },
  {
    title: 'How long does it finish this workshop?',
    answers: [
      {
        label: '40 minutes',
        isTrue: true,
      },
      {
        label: '10 minutes',
        isTrue: false,
      },
      {
        label: '10 mi nutes',
        isTrue: false,
      },
      {
        label: '1 minutes',
        isTrue: false,
      },
    ],
    children: <span>Ciao</span>,
  },
];

export default function Quiz() {
  const [currentIndex, setIndex] = useState(0);

  function moveOn() {
    setIndex((i) => (questions.length <= i ? 0 : i + 1));
  }
  const [score, setScore] = useState(0);

  return (
    <main className="container d-flex min-vh-100 align-items-center">
      {questions.map((question, index) => (
        <Question
          key={question.title}
          score={score}
          onAnswer={() => setScore((s) => s + 50)}
          active={index === currentIndex}
          position={`${index + 1}/${questions.length}`}
          {...question}
          onNext={moveOn}
        />
      ))}
      {currentIndex === questions.length && (
      <div>
        Finished
      </div>
      )}
    </main>
  );
}
