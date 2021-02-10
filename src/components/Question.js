import React, { useState } from 'react';

const RIGHT = 'right';
const WRONG = 'wrong';

export function Answer({ value, right }) {

}

export default function Question({
  onNext, answers, position, title, children,
}) {
  const [answered, setAnswered] = useState(false);

  return (
    <div
      className="question row border border-dark border-4 border-bottom-0"
    >
      <div className="col-12">
        <h2>{title}</h2>
      </div>
      <div className="col-12">
        <div className="row">
          {!answered && answers.map(({ label, isTrue }, index) => (
            <button
              className="btn btn-primary
                  border-dark
                   border-bottom border-bottom-4
                  answer
                  col-12 col-lg-6 px-5 py-4"
              key={index}
              onClick={() => setAnswered(isTrue ? RIGHT : WRONG)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      {answered && (
        <>
          <div className="col-12 border-bottom border-bottom-4">
            {children}

          </div>
          <div className="col-12">
            <button className="btn" onClick={onNext}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
