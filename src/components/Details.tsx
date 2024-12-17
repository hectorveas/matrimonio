import React from 'react';
import { Clock, MapPin, Music } from 'lucide-react';

export default function Details() {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-16">Nuestra Celebración</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-rose-400" />
            <h3 className="text-2xl font-serif mb-2">Ceremonia</h3>
            <p className="text-gray-600">16:00 hrs</p>
            <p className="text-gray-600">Iglesia San Francisco</p>
          </div>
          
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-rose-400" />
            <h3 className="text-2xl font-serif mb-2">Recepción</h3>
            <p className="text-gray-600">18:00 hrs</p>
            <p className="text-gray-600">Hacienda Los Rosales</p>
          </div>
          
          <div className="text-center">
            <Music className="w-12 h-12 mx-auto mb-4 text-rose-400" />
            <h3 className="text-2xl font-serif mb-2">Fiesta</h3>
            <p className="text-gray-600">19:00 hrs</p>
            <p className="text-gray-600">Hasta el amanecer</p>
          </div>
        </div>
      </div>
    </div>
  );
}