import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Heart, Calendar, MapPin, Sparkles, Star, Music } from 'lucide-react';
import footerImage from '../../assets/footer_matrimonio.webp';

export function Footer() {
  return (
    <Section background="gray" className="relative overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footerImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-gray-900/50" />
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-10 left-10 w-4 h-4 text-white/20 animate-pulse" />
        <Sparkles className="absolute top-20 right-20 w-3 h-3 text-white/30 animate-pulse delay-700" />
        <Sparkles className="absolute bottom-20 left-20 w-5 h-5 text-white/25 animate-pulse delay-1000" />
        <Heart className="absolute top-16 right-1/4 w-3 h-3 text-rose-300/30 animate-bounce delay-300" />
        <Heart className="absolute bottom-32 left-1/3 w-4 h-4 text-rose-300/25 animate-bounce delay-800" />
      </div>

      <Container className="relative z-10">
        <div className="py-16 text-center">
          {/* Título principal */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <Heart className="mx-4 w-8 h-8 text-rose-400 animate-pulse" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-script text-white mb-4 drop-shadow-lg">
              ¡Te esperamos!
            </h2>
            <p className="text-xl text-white/80 font-light tracking-wide">
              Será un honor celebrar contigo este día tan especial
            </p>
          </div>

          {/* Información del evento */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Calendar className="w-8 h-8 text-rose-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Fecha</h3>
              <p className="text-white/80">25 de Abril, 2026</p>
              <p className="text-white/60 text-sm mt-1">18:00 hrs</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Music className="w-8 h-8 text-blue-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Celebración</h3>
              <p className="text-white/80">Ceremonia y Fiesta</p>
              <p className="text-white/60 text-sm mt-1">Hasta las 02:00 hrs</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Heart className="w-8 h-8 text-pink-300 mx-auto mb-4 animate-pulse" />
              <h3 className="text-lg font-semibold text-white mb-2">Amor</h3>
              <p className="text-white/80">Camila & Héctor</p>
              <p className="text-white/60 text-sm mt-1">Por siempre juntos</p>
            </div>
          </div>

          {/* Mensaje especial */}
          <div className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-3xl mx-auto border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-5 h-5 text-yellow-300 mr-2" />
              <Star className="w-5 h-5 text-yellow-300 mr-2" />
              <Star className="w-5 h-5 text-yellow-300 mr-2" />
            </div>
            <p className="text-lg text-white/90 leading-relaxed font-light">
              "El amor no se mira, se siente. Y lo que sentimos el uno por el otro 
              es algo que queremos compartir con las personas más importantes de nuestras vidas."
            </p>
            <div className="flex items-center justify-center mt-4">
              <Star className="w-5 h-5 text-yellow-300 mr-2" />
              <Star className="w-5 h-5 text-yellow-300 mr-2" />
              <Star className="w-5 h-5 text-yellow-300 mr-2" />
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="/rsvp" className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold">
              Confirmar Asistencia
            </a>
            <a href="/regalos" className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors duration-300 border border-white/30">
              Ver Lista de Deseos
            </a>
          </div>

          {/* Copyright con estilo */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <Heart className="mx-3 w-4 h-4 text-rose-300" />
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>
            <p className="text-white/60 text-sm">
              Camila & Héctor © 2025 • Hecho con amor para nuestro día especial
            </p>
            <div className="flex items-center justify-center mt-2 space-x-1">
              <Heart className="w-3 h-3 text-rose-300/60" />
              <Heart className="w-3 h-3 text-rose-300/60" />
              <Heart className="w-3 h-3 text-rose-300/60" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}