import React from 'react';
import Question from '../components/Question';

export default function Quiz() {
  return (
    <main className="container d-flex min-vh-100 align-items-center">
      <Question
        answers={[
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
        ]}
        title="How long does it take on average to read the term of use?"
      />
    </main>
  );
}
