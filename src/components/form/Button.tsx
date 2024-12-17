import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const variants = {
    primary: 'bg-rose-400 text-white hover:bg-rose-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  };

  return (
    <button
      {...props}
      className={`py-2 px-6 rounded-md transition duration-300 ${variants[variant]} ${className}`}
    />
  );
}