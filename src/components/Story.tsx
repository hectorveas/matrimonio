import React from 'react';

export default function Story() {
  return (
    <div className="bg-rose-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-8">Nuestra Historia</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img 
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
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
      </div>
    </div>
  );
}