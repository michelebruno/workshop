import React from 'react';

export default function Footer({ children, className }) {
  return (
    <footer className={`row border border-4 border-end-0 border-start-0 bg-primary text-dark ${className}`}>
      {children || 'copyright'}
    </footer>
  );
}
