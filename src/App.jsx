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
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  // Initialize scroll-reveal when loading completes
  useScrollReveal(loading);

  useEffect(() => {
    // Simulated loading animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen Overlay */}
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
      <div className="app-wrapper">
        {/* Particle network under the cards */}
        <ParticleBackground />

        {/* Core Content Layer */}
        <Navbar />
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
