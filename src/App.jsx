import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading page resources
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div className={`loading-screen ${!loading ? 'fade-out' : ''}`}>
        <div className="loader-box">
          <div className="loader-spinner">
            <div className="spinner-inner"></div>
          </div>
          <div className="loader-logo">
            <span>&lt;</span>FN<span>/&gt;</span>
          </div>
          <p className="loader-text">Initializing portfolio...</p>
        </div>
      </div>

      {/* Main Website Structure */}
      {!loading && (
        <div className="app-wrapper">
          {/* Particle network under the cards */}
          <ParticleBackground />

          {/* Core Content Layer */}
          <Navbar />
          <main className="main-content-flow">
            <Hero />
            <About />
            <Projects />
            <Education />
            <Skills />
            <Services />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
