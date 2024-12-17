import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './Container';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const isDarkBackground = isHomePage && !isScrolled;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <Container>
        <div className="flex items-center justify-between">
          <Link 
            to="/"
            className={`font-script text-3xl ${
              isDarkBackground ? 'text-white' : 'text-gray-800'
            }`}
          >
            C + H
          </Link>
          
          {/* Menú de escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-xs tracking-wider font-sans ${
                isDarkBackground ? 'text-white' : 'text-gray-800'
              } hover:text-rose-400 transition-colors duration-300`}
            >
              ¡BIENVENIDOS!
            </Link>
            <Link
              to="/blog"
              className={`text-xs tracking-wider font-sans ${
                isDarkBackground ? 'text-white' : 'text-gray-800'
              } hover:text-rose-400 transition-colors duration-300`}
            >
              BLOG DE BODA
            </Link>
            <Link
              to="/rsvp"
              className={`text-xs tracking-wider font-sans ${
                isDarkBackground ? 'text-white' : 'text-gray-800'
              } hover:text-rose-400 transition-colors duration-300`}
            >
              CONFIRMA TU ASISTENCIA
            </Link>
            <Link
              to="/contacto"
              className={`text-xs tracking-wider font-sans ${
                isDarkBackground ? 'text-white' : 'text-gray-800'
              } hover:text-rose-400 transition-colors duration-300`}
            >
              CONTÁCTANOS
            </Link>
          </div>

          {/* Botón de menú móvil */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 ${
              isDarkBackground ? 'text-white' : 'text-gray-800'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 hover:text-rose-400 transition-colors duration-300 text-sm tracking-wider"
              >
                ¡BIENVENIDOS!
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 hover:text-rose-400 transition-colors duration-300 text-sm tracking-wider"
              >
                BLOG DE BODA
              </Link>
              <Link
                to="/rsvp"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 hover:text-rose-400 transition-colors duration-300 text-sm tracking-wider"
              >
                CONFIRMA TU ASISTENCIA
              </Link>
              <Link
                to="/contacto"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 hover:text-rose-400 transition-colors duration-300 text-sm tracking-wider"
              >
                CONTÁCTANOS
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}