import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail, MapPin, Clock, Sparkles, Heart, Star } from 'lucide-react';
import headerImage from '../../assets/footer_matrimonio.webp';

const faqs = [
  {
    id: 1,
    question: "¿Puedo ir con niños?",
    answer: "Lamentablemente, nuestra boda será un evento solo para adultos. Esperamos que puedan entender esta decisión y disfrutar de una noche especial sin los pequeños. ¡Sabemos que será una gran oportunidad para que tengan una cita romántica!"
  },
  {
    id: 2,
    question: "¿Cuál es el código de vestimenta?",
    answer: "La vestimenta es formal/elegante. Para las mujeres sugerimos vestidos largos o cocktail, y para los hombres traje con corbata. Por favor eviten el color blanco para las damas y recordemos que será una ceremonia al aire libre."
  },
  {
    id: 3,
    question: "¿A qué hora empieza y termina la celebración?",
    answer: "La ceremonia comenzará a las 18:00 hrs y la celebración se extenderá hasta las 02:00 hrs aproximadamente. Habrá cocktail, cena y fiesta."
  },
  {
    id: 4,
    question: "¿Habrá transporte o dónde puedo estacionar?",
    answer: "El lugar cuenta con estacionamiento gratuito para todos los invitados. También estaremos proporcionando información sobre opciones de transporte público y taxis para quienes lo prefieran."
  },
  {
    id: 5,
    question: "¿Puedo tomar fotos durante la ceremonia?",
    answer: "Tendremos fotógrafos profesionales capturando todos los momentos especiales. Durante la ceremonia les pedimos que guarden sus dispositivos y disfruten el momento. ¡Después podrán tomar todas las fotos que quieran!"
  },
  {
    id: 6,
    question: "¿Puedo llevar a alguien?",
    answer: "Si tu invitación solo dice tu nombre, no puedes invitar a nadie más. Las invitaciones son personales y el número de asistentes está limitado. Si tienes dudas sobre quién está incluido en tu invitación, por favor contáctanos directamente."
  },
  {
    id: 7,
    question: "¿Hasta cuándo puedo confirmar mi asistencia?",
    answer: "Te pedimos que confirmes tu asistencia hasta el 1 de marzo de 2026. Esto nos ayudará enormemente con la planificación y coordinación del evento."
  }
];

export function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-sky-50">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${headerImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/70 via-rose-900/60 to-sky-900/70" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Sparkles className="absolute top-12 left-8 w-4 h-4 text-white/30 animate-pulse" />
          <Sparkles className="absolute top-20 right-16 w-5 h-5 text-white/40 animate-pulse delay-300" />
          <HelpCircle className="absolute bottom-16 left-1/4 w-3 h-3 text-pink-300/40 animate-bounce delay-500" />
          <Star className="absolute bottom-24 right-1/3 w-4 h-4 text-sky-300/40 animate-bounce delay-1000" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <HelpCircle className="mx-4 w-8 h-8 text-white/80" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </div>
                         <h1 className="text-5xl md:text-6xl font-script mb-4 drop-shadow-2xl leading-tight px-4">
               Preguntas Frecuentes
             </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Aquí encontrarás respuestas a las dudas más comunes sobre nuestra boda. 
              Si tienes alguna pregunta adicional, no dudes en contactarnos directamente.
            </p>
          </div>
        </div>
      </div>

      <Section background="white" className="py-16 bg-transparent">
        <Container className="max-w-5xl">
          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 text-center">
              <Clock className="w-8 h-8 text-pink-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Horario</h3>
              <p className="text-gray-600">18:00 - 02:00 hrs</p>
              <p className="text-sm text-gray-500 mt-1">25 de Abril 2026</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 text-center">
              <MapPin className="w-8 h-8 text-sky-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Vestimenta</h3>
              <p className="text-gray-600">Formal/Elegante</p>
              <p className="text-sm text-gray-500 mt-1">Al aire libre</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 text-center">
              <Heart className="w-8 h-8 text-rose-400 mx-auto mb-4 animate-pulse" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Solo Adultos</h3>
              <p className="text-gray-600">Evento para mayores</p>
              <p className="text-sm text-gray-500 mt-1">Sin niños</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50 mb-16">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <HelpCircle className="w-6 h-6 text-pink-400 mr-3" />
                <h2 className="text-3xl font-script text-gray-800">Dudas Comunes</h2>
              </div>
              <p className="text-gray-600">
                Haz clic en cualquier pregunta para ver la respuesta completa
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={faq.id} className="bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/80 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-pink-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    </div>
                    <div className="flex items-center">
                      {openFaq === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-pink-600 transition-transform duration-200" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-pink-600 transition-transform duration-200" />
                      )}
                    </div>
                  </button>
                  
                  {openFaq === faq.id && (
                    <div className="px-6 pb-5 animate-fade-in">
                      <div className="border-t border-gray-100 pt-4 ml-12">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-pink-100 to-sky-100 rounded-2xl p-8 border border-pink-200">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-pink-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">¿Tienes otra pregunta?</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Si no encontraste la respuesta que buscabas, no dudes en contactarnos directamente. 
                Estaremos encantados de resolver cualquier duda que tengas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center bg-white/70 rounded-lg p-3">
                  <Mail className="w-5 h-5 text-pink-600 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">Email</p>
                    <p className="text-gray-800 font-semibold">camila.rivas@derecho.uchile.cl</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/70 rounded-lg p-3">
                  <Phone className="w-5 h-5 text-pink-600 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">Teléfono</p>
                    <p className="text-gray-800 font-semibold">+569 65220739</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-100 to-rose-100 rounded-2xl p-8 border border-sky-200">
              <div className="flex items-center mb-6">
                <Heart className="w-6 h-6 text-sky-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Confirmación Importante</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Recuerda confirmar tu asistencia antes del <strong>1 de marzo de 2026</strong>. 
                Tu respuesta nos ayuda enormemente con la planificación.
              </p>
              <a 
                href="/rsvp" 
                className="inline-flex items-center bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Confirmar Asistencia
                <Heart className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-sky-400 mr-2" />
                <Star className="w-5 h-5 text-pink-400 mr-2" />
                <Star className="w-5 h-5 text-sky-400 mr-2" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">¡Esperamos verte pronto!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Gracias por tomarte el tiempo de revisar esta información. Estamos emocionados 
                de celebrar este día tan especial contigo.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Heart className="w-4 h-4 text-pink-400 mr-1" />
                  <span>Camila & Héctor</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-sky-400 mr-1" />
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