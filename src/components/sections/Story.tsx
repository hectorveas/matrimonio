import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';
import storyImage1 from '../../assets/matrimonio.webp';
import storyImage2 from '../../assets/footer_matrimonio.webp';

export function Story() {
  return (
    <Section background="rose">
      <Container>
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Cuéntale que la conocí bailando...</SectionTitle>
          
          {/* Primera sección: foto y texto inicial */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <img 
              src={storyImage1}
              alt="Pareja feliz" 
              className="rounded-lg shadow-lg"
            />
            <div className="text-left">
              <p className="text-gray-700 leading-relaxed">
                Era el inicio de un nuevo año, una de esas épocas en las que todo parece renacer y el aire se llena de promesas de cambio y nuevas oportunidades. Dos personas, casi desconocidas, se encontraron por primera vez en unas clases de baile, con la misma intención: aprender a bailar ritmos latinos. Ambos habían decidido que era hora de moverse, de reír, de descubrir el lenguaje del cuerpo y de la música.
              </p>
              <p className="mt-6 text-gray-700 leading-relaxed">
                La primera clase fue un desafío. Pies que no coincidían con el ritmo, giros torpes y risas nerviosas llenaban el salón. Cuando el instructor pidió que rotaran de pareja, sus manos se encontraron por primera vez. "¿Cómo vas?", preguntaron entre risas, intentando disimular el nerviosismo.
              </p>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Era una frase que se repetiría una y otra vez, casi como un ritual, cada vez que les tocaba volver a bailar juntos. Entre "un, dos, tres… cadera" y "derecha, izquierda, giro", las miradas se volvieron cómplices y las sonrisas más naturales. Sin darse cuenta, el baile comenzó a crear entre ellos un espacio especial, un terreno donde cada paso los acercaba un poco más.
              </p>
            </div>
          </div>

          {/* Segunda sección: texto y foto */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Pasaron las semanas y, junto a los ritmos latinos, crecían también las conversaciones. Primero fueron las charlas breves entre canción y canción, pero pronto se convirtieron en largas pláticas después de clase, en las que el tiempo parecía detenerse.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Un día, alguien propuso ir a bailar fuera de las clases de baile, y así empezaron las salidas: noches iluminadas por luces de colores, melodías que llenaban el alma y cuerpos que ya no necesitaban instrucciones para moverse juntos.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Entre pasos y silencios, las distancias se desvanecieron. Fue inevitable. Los primeros besos llegaron como un suave compás que acompañaba su historia, tan naturales como si siempre hubieran estado ahí, esperando el momento adecuado.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La decisión no fue anunciada con grandilocuencia, sino que surgió como un acuerdo tácito, como esos movimientos de baile en los que no hace falta hablar porque el otro ya sabe qué hacer. Desde entonces, se convirtieron en compañeros, en un par de bailarines que decidieron recorrer juntos el escenario de la vida.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Hoy, su historia es como una canción que nunca termina, llena de momentos dulces y giros inesperados, pero siempre con los dos moviéndose en perfecta armonía. Lo que comenzó como un simple "¿cómo vas?" se transformó en una coreografía única: la de un amor que creció al ritmo de los latidos y que sigue, paso a paso, escribiendo su propio compás.
              </p>
            </div>
            <img 
              src={storyImage2}
              alt="Pareja feliz" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}