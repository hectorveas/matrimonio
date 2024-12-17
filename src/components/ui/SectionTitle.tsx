import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`text-4xl font-serif text-center mb-8 ${className}`}>
      {children}
    </h2>
  );
}