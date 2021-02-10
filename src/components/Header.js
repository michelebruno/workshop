import React from 'react';

export default function Header({ left, className }) {
  return (
    <header className={`row border border-4 border-end-0 border-start-0 ${className}`}>
      <div className="col ">
        <span className="px-3">Logo</span>
      </div>
      {left && <div className="col  text-end">{left}</div>}
    </header>
  );
}
