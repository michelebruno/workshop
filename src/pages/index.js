import * as React from 'react';
import '../scss/style.scss';
import { Link } from 'gatsby';

// markup
const IndexPage = () => (
  <main>
    <title>Home Page</title>
    <h1>
      Congratulations
      <br />
      <div className="w-100 bg-primary border border-dark border-3">
        Hello
      </div>
      <span>— you just made a Gatsby site! </span>
      <span role="img" aria-label="Party popper emojis">
        🎉🎉🎉
      </span>
      <Link to="quiz">
        Start quiz
      </Link>
    </h1>
  </main>
);

export default IndexPage;
