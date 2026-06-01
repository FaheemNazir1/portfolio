import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Terminal, Cpu, Database, Code } from 'lucide-react';
import { Github, LinkedIn as Linkedin } from './BrandIcons';
import resumePdf from '../assets/resume.pdf';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    'Computer Science Engineer',
    'Aspiring Full-Stack Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    const handleType = () => {
      const currentFullText = titles[loopIndex % titles.length];
      
      if (isDeleting) {
        setText(currentFullText.substring(0, text.length - 1));
        setTypingSpeed(60); // Faster delete
      } else {
        setText(currentFullText.substring(0, text.length + 1));
        setTypingSpeed(120); // Normal type
      }

      if (!isDeleting && text === currentFullText) {
        setIsDeleting(true);
        setTypingSpeed(2000); // Wait before deleting
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
        setTypingSpeed(300); // Pause before next title
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex, typingSpeed]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Decorative Blur Blob */}
      <div className="bg-glow-blob red" style={{ top: '-10%', left: '10%' }}></div>
      <div className="bg-glow-blob blue" style={{ bottom: '10%', right: '5%' }}></div>

      {/* Main mockup-inspired rounded banner card */}
      <div className="hero-banner-card">
        {/* Glow Overlay */}
        <div className="hero-card-glow"></div>

        <div className="hero-card-content">
          {/* Left Column: Text Content */}
          <div className="hero-text-side">
            <span className="hero-badge">Welcome to my Portfolio</span>
            <h1 className="hero-main-title">
              Hey, I'm <br />
              <span className="name-highlight">Faheem Nazir</span>
            </h1>
            
            {/* Dynamic Typewriter text */}
            <div className="typewriter-container">
              <span className="typewriter-prefix">I am a </span>
              <span className="typewriter-text">{text}</span>
              <span className="typewriter-cursor">|</span>
            </div>

            <p className="hero-desc">
              Passionate Computer Science student focused on web development, software engineering, and problem-solving. Dedicated to building innovative digital solutions while continuously learning modern technologies.
            </p>

            {/* Actions */}
            <div className="hero-action-buttons">
              <button onClick={() => handleScrollTo('projects')} className="btn btn-primary">
                View Projects <ArrowRight size={18} />
              </button>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }} className="btn btn-secondary">
                <Mail size={18} /> Contact Me
              </a>
              <a href={resumePdf} download="Faheem_Nazir_Resume.pdf" className="btn btn-secondary resume-btn">
                <Download size={18} /> Resume
              </a>
            </div>

            {/* Social quick links */}
            <div className="hero-social-links">
              <a href="https://github.com/FaheemNazir1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/faheemnazir5050/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="hero-visual-side">
            <div className="portrait-frame-3d">
              {/* Floating tech icons */}
              <div className="floating-badge badge-1 animate-float">
                <Code size={18} color="#06B6D4" /> <span>React.js</span>
              </div>
              <div className="floating-badge badge-2 animate-float" style={{ animationDelay: '1.5s' }}>
                <Terminal size={18} color="#3B82F6" /> <span>Python</span>
              </div>
              <div className="floating-badge badge-3 animate-float" style={{ animationDelay: '3s' }}>
                <Cpu size={18} color="#A855F7" /> <span>C++</span>
              </div>
              <div className="floating-badge badge-4 animate-float" style={{ animationDelay: '4.5s' }}>
                <Database size={18} color="#10B981" /> <span>SQL</span>
              </div>

              {/* Glowing Outline */}
              <div className="frame-glow-ring"></div>
              
              {/* Mockup styled 3D Profile Frame */}
              <div className="portrait-image-container">
                <img 
                  src="/developer_portrait.png" 
                  alt="Faheem Nazir Portrait" 
                  className="portrait-image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Small mockup card footer stats list */}
        <div className="hero-banner-footer">
          <div className="banner-footer-item">
            <span className="num">#01</span>
            <span className="lbl">Web Development</span>
          </div>
          <div className="banner-footer-item">
            <span className="num">#02</span>
            <span className="lbl">Machine Learning</span>
          </div>
          <div className="banner-footer-item">
            <span className="num">#03</span>
            <span className="lbl">Data Structures & Algos</span>
          </div>
          <div className="banner-footer-item">
            <span className="num">#04</span>
            <span className="lbl">Database Management</span>
          </div>
        </div>
      </div>

      {/* Brand Partnership bar from Mockup */}
      <div className="brand-partnership-bar">
        <span className="partnership-title">Trusted by Collaborations & Projects</span>
        <div className="brand-logos-container">
          <div className="brand-logo-item">
            <div className="circle-logo"></div>
            <span>KIT-CSE</span>
          </div>
          <div className="brand-logo-item">
            <div className="circle-logo triangle"></div>
            <span>Cine News AI</span>
          </div>
          <div className="brand-logo-item">
            <div className="circle-logo half-circle"></div>
            <span>Farm2Market</span>
          </div>
          <div className="brand-logo-item">
            <div className="circle-logo square"></div>
            <span>Movie Suggest</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
