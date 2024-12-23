import React from 'react';
import { Heart } from 'lucide-react';
import headerImage from '../../assets/header_matrimonio.webp';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
        style={{ backgroundImage: `url(${headerImage})` }}
      />
      <div className="relative text-center text-white z-10 px-4">
        <Heart className="mx-auto w-12 h-12 mb-6 animate-pulse" />
        <h1 className="text-6xl font-script mb-4">Camila & Héctor</h1>
        <p className="text-xl tracking-wider mb-8">¡NOS CASAMOS!</p>
        <p className="text-3xl font-light tracking-wide">25 de Abril, 2026</p>
      </div>
    </div>
  );
}