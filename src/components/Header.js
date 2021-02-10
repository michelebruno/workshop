import React from 'react';
import { Link } from 'gatsby';

export default function Header({ left, className }) {
  return (
    <header className={`row border border-4 border-end-0 border-start-0 ${className}`}>
      <div className="col ">
        <Link to="/">
          <span>Logo</span>

        </Link>
      </div>
      {left && <div className="col  text-end">{left}</div>}
    </header>
  );
}
