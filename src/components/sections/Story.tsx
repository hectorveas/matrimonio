import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Heart, Music, Clock, Star, Quote } from 'lucide-react';
import storyImage1 from '../../assets/matrimonio.webp';
import storyImage2 from '../../assets/footer_matrimonio.webp';

export function Story() {
  return (
    <Section background="rose" className="py-24">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Título principal con decoración */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              <Music className="mx-4 w-8 h-8 text-rose-600 animate-pulse" />
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>
                         <h2 className="text-5xl md:text-6xl font-script text-gray-800 mb-4 drop-shadow-2xl leading-tight px-4">
               Cuéntale que la conocí bailando...
             </h2>
             <div className="flex items-center justify-center mt-6">
               <Heart className="w-6 h-6 text-rose-600 animate-pulse mr-2" />
               <span className="text-gray-700 text-lg font-medium tracking-wide">Nuestra Historia de Amor</span>
               <Heart className="w-6 h-6 text-rose-600 animate-pulse ml-2" />
            </div>
          </div>
          
          {/* Primera sección: foto y texto inicial */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img 
                src={storyImage1}
                alt="Pareja feliz" 
                className="relative rounded-xl shadow-2xl transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <Clock className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl">
                <Quote className="w-8 h-8 text-gray-600 mb-4" />
                <p className="text-gray-800 leading-relaxed text-lg font-medium">
                  Era el inicio de un nuevo año, una de esas épocas en las que todo parece renacer y el aire se llena de promesas de cambio y nuevas oportunidades. Dos personas, casi desconocidas, se encontraron por primera vez en unas clases de baile, con la misma intención: aprender a bailar ritmos latinos.
                </p>
              </div>
              
              <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-yellow-600 mr-2" />
                  <span className="text-gray-800 font-bold">El Primer Encuentro</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  La primera clase fue un desafío. Pies que no coincidían con el ritmo, giros torpes y risas nerviosas llenaban el salón. Cuando el instructor pidió que rotaran de pareja, sus manos se encontraron por primera vez. "¿Cómo vas?", preguntaron entre risas.
                </p>
              </div>
              
              <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center mb-4">
                  <Music className="w-6 h-6 text-pink-600 mr-2" />
                  <span className="text-gray-800 font-bold">El Ritual Especial</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  Era una frase que se repetiría una y otra vez, casi como un ritual. Entre "un, dos, tres… cadera" y "derecha, izquierda, giro", las miradas se volvieron cómplices y las sonrisas más naturales. El baile comenzó a crear entre ellos un espacio especial.
                </p>
              </div>
            </div>
          </div>

          {/* Segunda sección: texto y foto */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-red-600 mr-2 animate-pulse" />
                  <span className="text-gray-800 font-bold">Creciendo Juntos</span>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg font-medium">
                  Pasaron las semanas y, junto a los ritmos latinos, crecían también las conversaciones. Primero fueron las charlas breves entre canción y canción, pero pronto se convirtieron en largas pláticas después de clase, en las que el tiempo parecía detenerse.
                </p>
              </div>
              
              <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-yellow-600 mr-2" />
                  <span className="text-gray-800 font-bold">Más Allá del Salón</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  Un día, alguien propuso ir a bailar fuera de las clases, y así empezaron las salidas: noches iluminadas por luces de colores, melodías que llenaban el alma y cuerpos que ya no necesitaban instrucciones para moverse juntos.
                </p>
              </div>
              
              <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center mb-4">
                  <Music className="w-6 h-6 text-pink-600 mr-2" />
                  <span className="text-gray-800 font-bold">El Compás del Amor</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  Entre pasos y silencios, las distancias se desvanecieron. Los primeros besos llegaron como un suave compás que acompañaba su historia, tan naturales como si siempre hubieran estado ahí, esperando el momento adecuado.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl">
                <Quote className="w-8 h-8 text-gray-600 mb-4" />
                <p className="text-gray-800 leading-relaxed text-lg font-medium">
                  Hoy, su historia es como una canción que nunca termina, llena de momentos dulces y giros inesperados, pero siempre con los dos moviéndose en perfecta armonía. Lo que comenzó como un simple "¿cómo vas?" se transformó en una coreografía única: la de un amor que creció al ritmo de los latidos.
                </p>
              </div>
            </div>
            
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img 
                src={storyImage2}
                alt="Pareja feliz" 
                className="relative rounded-xl shadow-2xl transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-4 right-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <Heart className="w-5 h-5 text-white animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Cierre elegante */}
          <div className="text-center mt-20">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-gray-200 shadow-xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                <Heart className="mx-4 w-8 h-8 text-rose-600 animate-pulse" />
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              </div>
              <p className="text-2xl font-script text-gray-800 leading-relaxed">
                "Y así, paso a paso, escribimos nuestro propio compás..."
              </p>
              <div className="mt-6 flex items-center justify-center space-x-2">
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}