import React, {useState} from 'react';

const RIGHT = 'right';
const WRONG = 'wrong';

export function Answer({value, right}) {

}

export default function Question({onNext, answers, position, title}) {

  const [answered, setAnswered] = useState(false);

  return <div
      className="question row border border-dark border-4 border-bottom-0">
    <div className="col-12">
      <h2>{title}</h2>
    </div>
    <div className="col-12">
      <div className="row">
        {answers.map(({label, isTrue}, index) => {
          return <button
              className="btn btn-primary
                  border-dark border-bottom-4
                  answer
                  col-12 col-lg-6 px-5 py-4"
              key={label}>
            {label}
          </button>;
        })}
      </div>
    </div>
  </div>;
}