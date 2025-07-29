import React from 'react';
import { Heart, Calendar, MapPin, Sparkles } from 'lucide-react';
import headerImage from '../../assets/header_matrimonio.webp';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con overlay gradiente */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${headerImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
      
      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-10 w-4 h-4 text-white/30 animate-pulse" />
        <Sparkles className="absolute top-32 right-20 w-6 h-6 text-white/40 animate-pulse delay-300" />
        <Sparkles className="absolute bottom-40 left-20 w-5 h-5 text-white/35 animate-pulse delay-700" />
        <Sparkles className="absolute bottom-60 right-10 w-4 h-4 text-white/30 animate-pulse delay-1000" />
        <Heart className="absolute top-40 left-1/4 w-3 h-3 text-rose-300/40 animate-bounce delay-500" />
        <Heart className="absolute bottom-80 right-1/3 w-4 h-4 text-rose-300/40 animate-bounce delay-1500" />
      </div>

      {/* Contenido principal */}
      <div className="relative text-center text-white z-10 px-4 max-w-4xl mx-auto">
        {/* Corazón principal con animación */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 animate-ping">
            <Heart className="mx-auto w-16 h-16 text-rose-300/50" />
          </div>
          <Heart className="mx-auto w-16 h-16 text-rose-400 relative z-10 drop-shadow-lg" />
        </div>

        {/* Nombres con efectos */}
        <div className="mb-6">
          <h1 className="text-7xl md:text-8xl font-script mb-2 bg-gradient-to-r from-white via-rose-100 to-white bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
            Camila
          </h1>
          <div className="flex items-center justify-center my-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <Heart className="mx-4 w-6 h-6 text-rose-300" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          </div>
          <h1 className="text-7xl md:text-8xl font-script bg-gradient-to-r from-white via-rose-100 to-white bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
            Héctor
          </h1>
        </div>

        {/* Anuncio principal */}
        <div className="mb-8">
          <p className="text-2xl md:text-3xl tracking-wider font-light mb-4 text-rose-100 drop-shadow-lg">
            ¡NOS CASAMOS!
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
        </div>

        {/* Fecha con diseño especial */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 mb-8 max-w-md mx-auto">
          <div className="flex items-center justify-center mb-3">
            <Calendar className="w-6 h-6 text-rose-300 mr-3" />
            <span className="text-rose-100 font-medium">FECHA ESPECIAL</span>
          </div>
          <p className="text-4xl font-light tracking-wide text-white drop-shadow-lg">
            25 de Abril
          </p>
          <p className="text-xl text-rose-100 mt-1">2026</p>
        </div>

        {/* Invitación especial */}
        <div className="animate-bounce-slow">
          <p className="text-lg text-rose-100 font-light tracking-wide">
            Te invitamos a celebrar este día único con nosotros
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}