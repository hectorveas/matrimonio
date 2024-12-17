import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '../form/Button';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Manejar el envío del formulario
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
          <h1 className="text-5xl font-script mb-8">¿Alguna duda?</h1>
          
          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            ¿No estás segura de tu vestido? ¿Puedes llevar a los niños? ¿Alguna aclaración? Si tienes
            cualquier pregunta para nosotros o nos quieres comentar algo, ponlo aquí y nos llegará
            directamente a nuestro mail. ¡Gracias por tu mensaje!
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-200 bg-white"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-200 bg-white"
              required
            />
            <input
              type="text"
              placeholder="Asunto"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-200 bg-white"
              required
            />
            <textarea
              placeholder="Comentario"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-200 bg-white h-32 resize-none"
              required
            />

            <div className="flex justify-center">
              <Button 
                type="submit"
                className="bg-gray-900 hover:bg-gray-800 text-white px-12"
              >
                Enviar Comentario
              </Button>
            </div>
          </form>

          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="text-center text-sm text-gray-600">
              <p className="mb-2">Camila Rivas & Héctor Veas</p>
              <p>24 Abril 2026</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
} 