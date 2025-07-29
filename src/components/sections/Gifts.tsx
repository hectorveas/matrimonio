import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLink, Gift, Heart, X, Copy, Check } from 'lucide-react';

const wishes = [
  {
    id: 1,
    name: 'Dos horas sin lavar platos',
    description: 'Un vale por dos horas de libertad total de trastes sucios',
    price: '$25.000',
    priority: 'alta'
  },
  {
    id: 2,
    name: 'Kit post-pelea',
    description: 'Incluye chocolates, flores y frases de disculpa pre-escritas',
    price: '$35.000',
    priority: 'alta'
  },
  {
    id: 3,
    name: 'Una rodilla nueva para el novio',
    description: 'Porque después de hincarme ya no funciona igual',
    price: '$45.000',
    priority: 'media'
  },
  {
    id: 4,
    name: 'Luna de miel upgrade Karting "Mario Matrimonio"',
    description: 'Carreras épicas con cascaras de plátano incluidas',
    price: '$55.000',
    priority: 'alta'
  },
  {
    id: 5,
    name: 'Clase de circo "Trapecio de la Confianza"',
    description: 'Para aprender a confiar el uno en el otro... literalmente',
    price: '$40.000',
    priority: 'media'
  },
  {
    id: 6,
    name: 'Sesión de fotos submarina "Titanic Low-Cost"',
    description: 'Recrearemos la escena icónica, pero en la piscina del barrio',
    price: '$30.000',
    priority: 'baja'
  },
  {
    id: 7,
    name: 'Realidad virtual "Luna de Miel en Marte"',
    description: 'Experiencia futurista para cuando el presupuesto no alcance',
    price: '$20.000',
    priority: 'baja'
  },
  {
    id: 8,
    name: 'Búsqueda del tesoro en supermercado',
    description: 'Aventura épica en busca de ofertas y productos perdidos',
    price: '$25.000',
    priority: 'media'
  },
     {
     id: 9,
     name: 'Spa de chocolate "Wonka Lovers"',
     description: 'Relajación total en un mundo de chocolate puro',
     price: '$60.000',
     priority: 'alta'
   },
   {
     id: 10,
     name: 'Una semana sin lavar la ropa para el novio',
     description: 'Vale por 7 días de libertad total del lavarropas',
     price: '$35.000',
     priority: 'alta'
   },
   {
     id: 11,
     name: 'Vale para jugar play todo el día sin interrupciones',
     description: 'Un día completo de gaming sin "¿vienes a comer?" ni "¿me ayudas con esto?"',
     price: '$45.000',
     priority: 'media'
   },
   {
     id: 12,
     name: 'Vale por una semana con el desayuno a la cama',
     description: 'Siete mañanas de mimos, café y tostadas sin levantarse',
     price: '$50.000',
     priority: 'alta'
   }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'alta':
      return 'bg-red-100 text-red-800';
    case 'media':
      return 'bg-yellow-100 text-yellow-800';
    case 'baja':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export function Gifts() {
  const [selectedWish, setSelectedWish] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const openModal = (wish: any) => {
    setSelectedWish(wish);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWish(null);
    setCopiedField(null);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Container>
        <Section>
          <SectionTitle>Lista de Deseos</SectionTitle>
          
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Gift className="w-8 h-8 text-rose-400 mr-2" />
              <Heart className="w-6 h-6 text-rose-400" />
            </div>
            <div className="text-lg text-gray-600 max-w-3xl mx-auto">
              <p className="mb-4 font-semibold text-gray-700">Queridos familiares y amigos:</p>
              <p className="mb-4">
                Con mucha ilusión queremos compartir este sueño tan especial con ustedes. Hemos preparado 
                una lista de deseos para que, si así lo desean, puedan ser parte de esta aventura única.
              </p>
              <p className="mb-4">
                Cada gesto tendrá un significado muy especial para nosotros. Gracias de corazón por 
                acompañarnos en este momento tan importante.
              </p>
              <p className="font-semibold text-gray-700">¡Estamos felices de tenerlos cerca! 🤎</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishes.map((wish) => (
              <div key={wish.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{wish.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(wish.priority)}`}>
                      {wish.priority}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{wish.description}</p>
                  
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-rose-600">{wish.price}</span>
                  </div>
                  
                  <button 
                    onClick={() => openModal(wish)}
                    className="w-full bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors duration-300 flex items-center justify-center group"
                  >
                    ¡Quiero regalar esto!
                    <Heart className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">¿Prefieres hacer una transferencia bancaria?</h3>
              <p className="text-gray-600 mb-6">
                Si prefieres hacer una transferencia bancaria te dejo nuestros datos:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 text-left">
                <p className="text-sm text-gray-600 mb-2"><strong>Titular:</strong> Camila Rivas</p>
                <p className="text-sm text-gray-600 mb-2"><strong>RUT:</strong> 20.550.498-2</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Banco:</strong> Banco de Chile</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Tipo de cuenta:</strong> Cuenta Corriente</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Número de cuenta:</strong> 00-191-09210-10</p>
                <p className="text-sm text-gray-600"><strong>Email:</strong> camila.rivas@derecho.uchile.cl</p>
              </div>
            </div>
          </div>
        </Section>
      </Container>

      {/* Modal de formulario */}
      {isModalOpen && selectedWish && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">¡Gracias por querer regalarnos esto!</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-6">
                <div className="bg-rose-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-rose-800 mb-2">{selectedWish.name}</h4>
                  <p className="text-rose-600 text-sm mb-2">{selectedWish.description}</p>
                  <p className="text-2xl font-bold text-rose-600">{selectedWish.price}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Datos para la transferencia:</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <div>
                      <p className="text-sm text-gray-600">Titular</p>
                      <p className="font-medium">Camila Rivas</p>
                    </div>
                    <button 
                      onClick={() => copyToClipboard('Camila Rivas', 'titular')}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {copiedField === 'titular' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <div>
                      <p className="text-sm text-gray-600">RUT</p>
                      <p className="font-medium">20.550.498-2</p>
                    </div>
                    <button 
                      onClick={() => copyToClipboard('20.550.498-2', 'rut')}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {copiedField === 'rut' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <div>
                      <p className="text-sm text-gray-600">Banco</p>
                      <p className="font-medium">Banco de Chile</p>
                    </div>
                    <button 
                      onClick={() => copyToClipboard('Banco de Chile', 'banco')}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {copiedField === 'banco' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <div>
                      <p className="text-sm text-gray-600">Tipo de cuenta</p>
                      <p className="font-medium">Cuenta Corriente</p>
                    </div>
                    <button 
                      onClick={() => copyToClipboard('Cuenta Corriente', 'tipo')}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {copiedField === 'tipo' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <div>
                      <p className="text-sm text-gray-600">Número de cuenta</p>
                      <p className="font-medium">00-191-09210-10</p>
                    </div>
                    <button 
                      onClick={() => copyToClipboard('00-191-09210-10', 'cuenta')}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {copiedField === 'cuenta' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">camila.rivas@derecho.uchile.cl</p>
                    </div>
                    <button 
                      onClick={() => copyToClipboard('camila.rivas@derecho.uchile.cl', 'email')}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {copiedField === 'email' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-rose-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-rose-700 text-center">
                  💡 <strong>Tip:</strong> Haz clic en los íconos de copiar para copiar la información automáticamente
                </p>
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  ¡Muchas gracias por ser parte de este momento tan especial! 💕
                </p>
                <button 
                  onClick={closeModal}
                  className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 