import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './Container';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
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
        </div>
      </Container>
    </nav>
  );
}