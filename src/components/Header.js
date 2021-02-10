import React from 'react';

export default function Header({ left, className }) {
  return (
    <header className={`row border border-4 border-end-0 border-start-0 ${className}`}>
      <div className="col">
        Logo
      </div>
      {left && <div className="col">{left}</div>}
    </header>
  );
}
