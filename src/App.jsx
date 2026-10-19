import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import CommandPalette from './components/CommandPalette';
import { useScrollReveal } from './hooks/useScrollReveal';
import { usePointerFx } from './hooks/usePointerFx';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useScrollReveal(loading);
  usePointerFx();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Ctrl/Cmd + K opens the command palette
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div className={`loading-screen ${!loading ? 'fade-out' : ''}`}>
        <div className="loader-box">
          <div className="loader-ring">
            <div className="loader-spinner"><div className="spinner-inner"></div></div>
            <div className="loader-logo"><span>&lt;</span>FN<span>/&gt;</span></div>
          </div>
          <p className="loader-text">Initializing portfolio...</p>
        </div>
      </div>

      <ScrollProgress />
      <CursorGlow />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />

      <div className="app-wrapper">
        <div className="aurora-fixed" aria-hidden="true"></div>
        <div className="grid-overlay" aria-hidden="true"></div>
        <ParticleBackground />

        <Navbar onOpenPalette={() => setPaletteOpen(true)} />
        <main className="main-content-flow">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Achievements />
          <Experience />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
