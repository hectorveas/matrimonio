import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Input } from '../form/Input';
import { Select } from '../form/Select';
import { Button } from '../form/Button';
import { Heart, Calendar, Users, CheckCircle, Clock, Sparkles, Send, Star } from 'lucide-react';
import headerImage from '../../assets/header_matrimonio.webp';

export function RSVP() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [attending, setAttending] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ firstName, lastName, attending, message });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${headerImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-purple-900/60 to-pink-900/70" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Sparkles className="absolute top-16 left-10 w-4 h-4 text-white/30 animate-pulse" />
          <Sparkles className="absolute top-24 right-20 w-6 h-6 text-white/40 animate-pulse delay-300" />
          <Heart className="absolute bottom-20 left-1/4 w-3 h-3 text-rose-300/40 animate-bounce delay-500" />
          <Heart className="absolute bottom-32 right-1/3 w-4 h-4 text-rose-300/40 animate-bounce delay-1000" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <Users className="mx-4 w-8 h-8 text-white/80" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </div>
                         <h1 className="text-5xl md:text-6xl font-script mb-4 drop-shadow-2xl leading-tight px-4">
               ¿Nos acompañas o te lo pierdes?
             </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Para confirmar tu asistencia al matrimonio sólo tienes que escribir tu nombre y decirnos 
              si podrás acompañarnos en este día tan especial.
            </p>
          </div>
        </div>
      </div>

      <Section background="white" className="py-16 bg-transparent">
        <Container className="max-w-4xl">
          {/* Event Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 text-center">
              <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Fecha Límite</h3>
              <p className="text-gray-600">1 de Marzo 2026</p>
              <p className="text-sm text-gray-500 mt-1">Para confirmar asistencia</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 text-center">
              <Clock className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Ceremonia</h3>
              <p className="text-gray-600">18:00 hrs</p>
              <p className="text-sm text-gray-500 mt-1">25 de Abril 2026</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 text-center">
              <Heart className="w-8 h-8 text-rose-500 mx-auto mb-4 animate-pulse" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Celebración</h3>
              <p className="text-gray-600">Hasta las 02:00 hrs</p>
              <p className="text-sm text-gray-500 mt-1">Fiesta y diversión</p>
            </div>
          </div>

          {/* RSVP Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <h2 className="text-3xl font-script text-gray-800">Confirma tu Asistencia</h2>
              </div>
              <p className="text-gray-600">
                ¡Tu respuesta es muy importante para nosotros! Completa este formulario para hacernos saber si nos acompañarás.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-blue-500" />
                    Nombre
                  </label>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Tu nombre"
                    required
                    className="bg-white/80 border-2 border-gray-200 rounded-xl py-3 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-blue-500" />
                    Apellidos
                  </label>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Tus apellidos"
                    required
                    className="bg-white/80 border-2 border-gray-200 rounded-xl py-3 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Tu respuesta
                </label>
                <Select
                  value={attending}
                  onChange={(e) => setAttending(e.target.value)}
                  required
                  className="bg-white/80 border-2 border-gray-200 rounded-xl py-3 focus:border-green-400 focus:ring-green-400 transition-all duration-300"
                >
                  <option value="">¿Asistirás a nuestra boda?</option>
                  <option value="yes">✅ Sí asistiré - ¡No me lo perdería!</option>
                  <option value="no">❌ No asistiré - Lo siento mucho</option>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center">
                  <Heart className="w-4 h-4 mr-2 text-rose-500" />
                  Mensaje especial (opcional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Comparte tus buenos deseos, saluda a los novios o deja cualquier comentario especial..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 bg-white/80 h-32 resize-none transition-all duration-300"
                />
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
                >
                  <Send className="w-5 h-5 mr-3" />
                  Confirmar Asistencia
                  <CheckCircle className="w-5 h-5 ml-3" />
                </button>
              </div>
            </form>
          </div>



          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-6 border border-rose-200">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-rose-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">¿Dudas sobre el evento?</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Si tienes preguntas sobre el código de vestimenta, ubicación, transporte o cualquier otro detalle, 
                visita nuestra sección de Preguntas Frecuentes.
              </p>
              <a 
                href="/contacto" 
                className="text-rose-600 hover:text-rose-700 font-medium transition-colors inline-flex items-center"
              >
                Ver Preguntas Frecuentes
                <CheckCircle className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">¡Gracias por acompañarnos!</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Tu presencia hace que este día sea aún más especial. No olvides revisar nuestra lista de 
                deseos únicos y divertidos.
              </p>
              <a 
                href="/regalos" 
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors inline-flex items-center"
              >
                Ver Lista de Deseos
                <Heart className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
              </div>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Heart className="w-4 h-4 text-rose-500 mr-1" />
                  <span>Camila & Héctor</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-blue-500 mr-1" />
                  <span>25 Abril 2026</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}