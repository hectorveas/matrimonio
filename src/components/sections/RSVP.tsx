import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Input } from '../form/Input';
import { Select } from '../form/Select';
import { Button } from '../form/Button';

export function RSVP() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [attending, setAttending] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ firstName, lastName, attending, message });
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
          <h1 className="text-5xl font-script mb-8">¿Nos acompañas o te lo pierdes?</h1>
          
          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            Para confirmar tu asistencia al matrimonio sólo tienes que escribir tu nombre y decirnos si podrás acompañarnos en este día tan especial.
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Nombre"
                required
                className="bg-white"
              />
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Apellidos"
                required
                className="bg-white"
              />
            </div>
            <Select
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
              required
              className="bg-white"
            >
              <option value="">¿Asistirás a nuestra boda?</option>
              <option value="yes">Sí asistiré</option>
              <option value="no">No asistiré</option>
            </Select>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Déjanos un mensaje (opcional)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-200 bg-white h-32 resize-none"
            />
            <div className="flex justify-center">
              <Button 
                type="submit"
                className="bg-gray-900 hover:bg-gray-800 text-white px-12"
              >
                Confirmar Asistencia
              </Button>
            </div>
          </form>

          <div className="mt-16 pt-16 border-t border-gray-200">
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