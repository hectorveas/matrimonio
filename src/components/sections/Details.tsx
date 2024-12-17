import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export function Details() {
  return (
    <Section background="white">
      <Container className="max-w-4xl">
        <h1 className="text-5xl font-script text-center mb-12">¡Bienvenidos a nuestro matrimonio!</h1>
        
        <div className="space-y-8 text-center text-gray-700">
          <p className="text-2xl font-script">¡Sí, nos casamos y queremos celebrarlo contigo!</p>
          
          <p className="leading-relaxed">
            Nos sentimos emocionados y llenos de alegría por este gran paso que estamos dando juntos. 
            Sabemos que este día será inolvidable, y no hay nada que nos haga más felices que compartirlo contigo.
          </p>
          
          <p className="leading-relaxed">
            Mientras llega el gran día, hemos preparado este espacio especial para que puedas enterarte 
            de cada detalle de nuestro matrimonio, desde nuestra historia hasta la información del evento.
          </p>
          
          <p className="leading-relaxed">
            ¡Atención! En la sección de asistencia podrás confirmar si nos acompañarás en este día tan 
            importante. Por favor, cuéntanos lo antes posible para que todo sea perfecto.
          </p>
          
          <p className="leading-relaxed">
            Gracias por ser parte de nuestras vidas. Estamos contando los días para verte, reír, bailar 
            y celebrar juntos.
          </p>

          <p className="leading-relaxed">
            ¡Nos vemos pronto!<br />
            Con todo el amor del mundo,
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-24 h-px bg-gray-300"></div>
        </div>
      </Container>
    </Section>
  );
}