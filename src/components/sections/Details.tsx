import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Heart, Users, Calendar, Gift, Music, Camera } from 'lucide-react';

export function Details() {
  return (
    <Section background="white" className="py-20">
      <Container className="max-w-6xl">
        {/* Título principal mejorado */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <Heart className="mx-4 w-8 h-8 text-rose-400 animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          </div>
          <h1 className="text-6xl md:text-7xl font-script text-gray-800 mb-4 bg-gradient-to-r from-gray-700 via-rose-600 to-gray-700 bg-clip-text text-transparent">
            ¡Bienvenidos a nuestro matrimonio!
          </h1>
          <p className="text-2xl md:text-3xl font-script text-rose-500">
            ¡Sí, nos casamos y queremos celebrarlo contigo!
          </p>
        </div>

        {/* Grid de tarjetas informativas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="bg-rose-100 p-3 rounded-full">
                <Heart className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 ml-3">Nuestro Amor</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Nos sentimos emocionados y llenos de alegría por este gran paso que estamos dando juntos. 
              No hay nada que nos haga más felices que compartirlo contigo.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 ml-3">Nuestra Comunidad</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Hemos preparado este espacio especial para que puedas enterarte de cada detalle 
              de nuestro matrimonio, desde nuestra historia hasta la información del evento.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 ml-3">Confirma tu Asistencia</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              ¡Atención! En la sección de asistencia podrás confirmar si nos acompañarás. 
              Por favor, cuéntanos lo antes posible para que todo sea perfecto.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Gift className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 ml-3">Lista de Deseos</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Descubre nuestra divertida lista de deseos únicos y creativos. 
              ¡Desde experiencias hasta momentos especiales que queremos vivir juntos!
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Music className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 ml-3">Celebración</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Estamos contando los días para verte, reír, bailar y celebrar juntos. 
              Será una noche llena de alegría, música y momentos inolvidables.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-full">
                <Camera className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 ml-3">Recuerdos</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Cada momento será capturado para crear recuerdos que durarán toda la vida. 
              Queremos que este día sea especial para todos nosotros.
            </p>
          </div>
        </div>

        {/* Mensaje de cierre elegante */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-rose-100 via-pink-50 to-rose-100 rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-rose-400 animate-pulse mr-2" />
              <span className="text-lg font-semibold text-gray-700">Con todo el amor del mundo</span>
              <Heart className="w-6 h-6 text-rose-400 animate-pulse ml-2" />
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Gracias por ser parte de nuestras vidas y por acompañarnos en este momento tan especial.
            </p>
            <p className="text-2xl font-script text-rose-600">
              ¡Nos vemos pronto!
            </p>
          </div>
        </div>

        {/* Divisor decorativo */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-rose-300 rounded-full"></div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          </div>
        </div>
      </Container>
    </Section>
  );
}