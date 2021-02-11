import React from 'react';
import { Link } from 'gatsby';
import { ReactComponent as Logo } from '../svg/logo.svg';

export default function Header({ left, className }) {
  return (
    <header className={`row border border-4 border-end-0 border-start-0 align-items-center ${className}`}>
      <div className="col-3 py-2">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      {left && <div className="col  text-end">{left}</div>}
    </header>
  );
}
