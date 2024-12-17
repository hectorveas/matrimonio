import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export function Details() {
  return (
    <Section background="white">
      <Container className="max-w-4xl">
        <h1 className="text-5xl font-script text-center mb-12">¡Bienvenidos a nuestro matrimonio!</h1>
        
        <div className="space-y-8 text-center text-gray-700">
          <p className="text-2xl font-script">¡Sí! nos casamos!!!</p>
          
          <p className="leading-relaxed">
            ¡Estamos super felices! Nos sentimos en las nubes y queremos compartir contigo todo nuestro
            amor. Por eso estamos preparando un matrimonio que hará historia y en el que lo pasarás
            genial.
          </p>
          
          <p className="leading-relaxed">
            Mientras llega el gran día hemos creado esta web con un montón de secciones para que estés
            al día de todo y para compartir nuestra historia de amor.
          </p>
          
          <p className="leading-relaxed">
            Una cosa importante, en la sección asistencia puedes confirmar si vas al matrimonio o no.
            Confirmanos lo antes posible por favor, porque así nos será mucho más fácil organizarlo todo.
          </p>
          
          <p className="leading-relaxed">
            Disfruta la web y nos vemos muy pronto, ¡mil besos!
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-24 h-px bg-gray-300"></div>
        </div>
      </Container>
    </Section>
  );
}