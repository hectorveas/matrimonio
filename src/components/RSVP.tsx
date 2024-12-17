import React, { useState } from 'react';

export default function RSVP() {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, attending });
  };

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-4xl font-serif mb-8">Confirma tu Asistencia</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre completo"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-200"
            />
          </div>
          <div>
            <select
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-200"
            >
              <option value="">¿Asistirás?</option>
              <option value="yes">Sí, asistiré</option>
              <option value="no">No podré asistir</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-rose-400 text-white py-2 px-6 rounded-md hover:bg-rose-500 transition duration-300"
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}