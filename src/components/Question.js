import React, { useState } from 'react';
import Header from './Header';

const RIGHT = 'right';
const WRONG = 'wrong';

export function Answer({ value, right }) {

}

export default function Question({
  onNext, answers, position, title, children, active,
}) {
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  return (
    <div
      className={`question row border border-dark border-4 border-bottom-0 border-top-0 align-items-stretch${active ?? 'd-none'}`}
    >
      <div className="col-12">
        <Header left={`Score ${score}`} />
      </div>
      <div className="col-12">
        <h2>{title}</h2>
      </div>
      <div className="col-12 mt-auto">
        <div className="row border-top">
          {!answered && answers.map(({ label, isTrue }) => (
            <button
              className="btn btn-primary border-4 border-start-0 border-end-0 border-top-0 border-dark answer col-12 col-md-6 px-5 py-4"
              key={label}
              onClick={() => setAnswered(isTrue ? RIGHT : WRONG)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      {answered && (
        <>
          <div className="col-12 ">
            {children}

          </div>
          <div className="col-12 mt-auto border-bottom border-4 text-end ">
            <button type="button" className="btn btn-text" onClick={onNext}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
