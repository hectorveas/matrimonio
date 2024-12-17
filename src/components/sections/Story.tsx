import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';

export function Story() {
  return (
    <Section background="rose">
      <Container>
        <SectionTitle>Cuéntale que la conocí bailando</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img 
            src="https://media.discordapp.net/attachments/1086091732237688862/1318426222472069140/IMG_4995.png?ex=6762479a&is=6760f61a&hm=155fade7fa3256576e950ff2555598d91624489e7123a44cbd117d7a6e162c5b&=&format=webp&quality=lossless&width=1120&height=1314" 
            alt="Pareja feliz" 
            className="rounded-lg shadow-lg"
          />
          <div className="text-left">
            <p className="text-gray-700 leading-relaxed">
              Nos conocimos en una tarde de otoño, cuando el destino cruzó nuestros caminos en aquella cafetería del centro. Desde ese momento, supimos que algo especial había comenzado. Después de 5 años de compartir risas, aventuras y sueños, decidimos dar el siguiente paso en nuestras vidas.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Hoy, queremos compartir nuestra felicidad con ustedes en este día tan especial.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}