import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';

const RIGHT = 'right';
const WRONG = 'wrong';

function Question({
  onNext, answers, position, title, children, active, score, onAnswer,
}) {
  const [answered, setAnswered] = useState(false);
  return (
    <div
      className={`question row border border-dark border-4 border-bottom-0 border-top-0 align-items-stretch ${!active ? 'd-none' : ''}`}
    >
      <div className="col-12">
        <Header left={`Score ${score}`} />
      </div>
      <div className="col-12">
        <span className="h3 pb-5 text-primary">{position}</span>
        <motion.h2 className="h1">{title}</motion.h2>
      </div>
      <div className="col-12 mt-auto">
        { !answered && (
        <motion.div className="p-0 row border border-4 border-start-0 border-end-0 overflow-hidden">
          {!answered && answers.map(({ label, isTrue }, index) => (
            <motion.button
              variants={{
                visible: (index) => ({
                  translateY: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.25,
                    delay: index * 0.3,
                  },
                }),
                hidden: {
                  opacity: 0,
                  translateY: 200,
                },
              }}
              animate={active ? 'visible' : 'hidden'}
              initial="hidden"
              className="answer btn btn-primary border-4 border-start-0 border-end-0 border-top-0 border-dark answer col-12 col-md-6 text-center py-5"
              key={label}
              custom={index}
              type="button"
              onClick={() => setAnswered(isTrue ? RIGHT : WRONG)}
            >
              {label}
            </motion.button>
          ))}
        </motion.div>
        )}
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
export default Question;
