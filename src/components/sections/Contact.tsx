import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
    <Section background="white" className="pt-32">
      <Container className="max-w-4xl relative">
        {/* Decorative Images */}
        <div className="absolute left-0 top-0 w-64 h-full opacity-80 pointer-events-none">
          <img 
            src="/images/lavender-left.png"
            alt=""
            className="object-contain h-full"
          />
        </div>
        <div className="absolute right-0 top-0 w-64 h-full opacity-80 pointer-events-none">
          <img 
            src="/images/lavender-right.png"
            alt=""
            className="object-contain h-full"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-script mb-8">Preguntas Frecuentes</h1>
          
          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            Aquí encontrarás respuestas a las dudas más comunes sobre nuestra boda. 
            Si tienes alguna pregunta adicional, no dudes en contactarnos directamente.
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-rose-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-rose-600" />
                  )}
                </button>
                
                {openFaq === faq.id && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="bg-rose-50 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">¿Tienes otra pregunta?</h3>
              <p className="text-gray-600 mb-4">
                Si no encontraste la respuesta que buscabas, escríbenos directamente:
              </p>
              <div className="space-y-2">
                <p className="text-sm"><strong>Email:</strong> camila.rivas@derecho.uchile.cl</p>
                <p className="text-sm"><strong>Teléfono:</strong> +569 65220739</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8">
            <div className="text-center text-sm text-gray-600">
              <p className="mb-2">Camila Rivas & Héctor Veas</p>
              <p>25 Abril 2026</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
} 