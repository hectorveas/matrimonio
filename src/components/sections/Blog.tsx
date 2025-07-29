import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '../form/Button';
import { Heart, Calendar, Users, MessageCircle, BookOpen, Sparkles, Quote, Star } from 'lucide-react';
import blogImage from '../../assets/matrimonio.webp';

export function Blog() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Comment submitted:', formData);
    // Manejar el envío del comentario
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <Section background="white" className="pt-24 pb-16 bg-transparent">
        <Container className="max-w-6xl">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              <BookOpen className="mx-4 w-8 h-8 text-rose-500 animate-pulse" />
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            </div>
            <h1 className="text-6xl md:text-7xl font-script text-gray-800 mb-4 leading-tight">
              <span className="bg-gradient-to-r from-gray-700 via-rose-600 to-gray-700 bg-clip-text text-transparent">
                Blog de Boda
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ¡Atención, atención! No desconectes de esta sección porque aquí encontrarás las noticias más 
              frescas alrededor de la organización del matrimonio 😉
            </p>
          </div>

          {/* Featured Blog Post */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-200/50 to-pink-200/50 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img 
                src={blogImage}
                alt="Camila & Héctor" 
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                  <Calendar className="w-4 h-4 text-rose-500 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">Último Post</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
                <div className="flex items-center mb-4">
                  <Quote className="w-6 h-6 text-rose-500 mr-3" />
                  <h2 className="text-3xl font-script text-gray-800">Nuestra Historia</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg font-medium text-rose-600">¡Hola a todos!!!</p>
                  <p>
                    Este es el blog del que será el día más importante de nuestras vidas: 
                    <strong className="text-rose-600"> ¡¡¡nuestro matrimonio!!!</strong>
                  </p>
                  <p>
                    Será un día súper especial que queremos compartir con todos ustedes, pero hasta que llegue 
                    aún tenemos mucho trabajo por delante. Usaremos este blog para mantenerlos al día de cualquier 
                    novedad y para contarles cómo llevamos toda la organización: los nervios, el estrés y 
                    <strong className="text-pink-600"> muchísima felicidad</strong>.
                  </p>
                  <p className="text-rose-600 font-medium">
                    ¡Esperamos que disfruten tanto como nosotros, un abrazo muuuy grande!!!
                  </p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl p-4 text-center border border-rose-200">
                  <Heart className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-800">150</p>
                  <p className="text-sm text-gray-600">Días restantes</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-4 text-center border border-purple-200">
                  <Users className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-800">85</p>
                  <p className="text-sm text-gray-600">Invitados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">Comentarios</h3>
              </div>
              <p className="text-gray-600">0 comentarios - ¡Sé el primero en dejar tu mensaje!</p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-white/80 transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu.email@ejemplo.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-white/80 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Tu mensaje</label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Comparte tus buenos deseos, consejos o simplemente salúdanos..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-white/80 h-32 resize-none transition-all duration-300"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar Comentario
                </button>
              </div>
            </form>
          </div>

          {/* Footer Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-rose-100 via-pink-50 to-rose-100 rounded-2xl p-8 shadow-lg max-w-3xl mx-auto border border-rose-200">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">¡Síguenos en esta aventura!</h3>
              <p className="text-gray-600 mb-4">
                Mantente al día con todas las novedades, preparativos y momentos especiales 
                que compartiremos hasta el gran día.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Heart className="w-4 h-4 text-rose-500 mr-1" />
                  <span>Camila & Héctor</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-blue-500 mr-1" />
                  <span>25 Abril 2026</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
} 