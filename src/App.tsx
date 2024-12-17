import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Details } from './components/sections/Details';
import { Story } from './components/sections/Story';
import { RSVP } from './components/sections/RSVP';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function HomePage() {
  return (
    <>
      <section id="inicio">
        <Hero />
      </section>
      <section id="blog">
        <Details />
        <Story />
      </section>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;