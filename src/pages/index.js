import * as React from 'react';
import '../scss/style.scss';
import { Link } from 'gatsby';
import Header from '../components/Header';
// markup
const IndexPage = () => (

  <>
    <Header />
    <main>

      <title>Home Page</title>
      <h1>
        <div className="w-100 bg-primary border border-dark border-3">
          Hello
        </div>
        <Link to="/quiz">
          Start quiz
        </Link>
      </h1>
    </main>
  </>
);

export default IndexPage;
