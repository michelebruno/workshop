import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';

export default function About() {
  const score = 50;
  return (
    <>
      <div className="container-fluid">
        <Header left={<Link to="/quiz">quiz</Link>} />

      </div>
      <main className="container">
        <div className="row py-5">
          <div className="col">
            Your score is
            {' '}
            {score}
          </div>
        </div>
      </main>
    </>
  );
}
