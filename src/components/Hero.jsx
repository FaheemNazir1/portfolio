import { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Cpu, Database, Code2, Sparkles, Brain, Layers } from 'lucide-react';
import { Github, LinkedIn as Linkedin } from './BrandIcons';
import resumePdf from '../assets/Faheem_Nazir_Resume.pdf';

const TITLES = [
  'Computer Science Engineer',
  'AI/ML Developer',
  'Full-Stack Developer',
  'Machine Learning Engineer',
  'Problem Solver',
];

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleType = () => {
      const currentFullText = TITLES[loopIndex % TITLES.length];

      if (isDeleting) {
        setText(currentFullText.substring(0, text.length - 1));
        setTypingSpeed(50); // Fast deletion
      } else {
        setText(currentFullText.substring(0, text.length + 1));
        setTypingSpeed(110); // Standard typing
      }

      if (!isDeleting && text === currentFullText) {
        setIsDeleting(true);
        setTypingSpeed(1800); // Pause on complete word
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
        setTypingSpeed(250); // Pause before starting next
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
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Decorative Blur Blobs */}
      <div className="bg-glow-blob red" style={{ top: '-10%', left: '10%' }}></div>
      <div className="bg-glow-blob blue" style={{ bottom: '10%', right: '5%' }}></div>

      {/* Main mockup-inspired rounded banner card */}
      <div className="hero-banner-card reveal-on-scroll">
        {/* Glow Overlay */}
        <div className="hero-card-glow"></div>

        <div className="hero-card-content">
          {/* Left Column: Text Content */}
          <div className="hero-text-side">
            <span className="hero-badge">
              <Sparkles size={14} className="badge-sparkle" /> Welcome to my Portfolio
            </span>
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
              B.Tech Computer Science student building applied machine-learning systems in Python, with hands-on experience in biomedical signal processing, feature engineering, and rigorous cross-subject model validation. Also fluent in full-stack and backend engineering across React, Node.js, and REST APIs.
            </p>

            {/* Actions */}
            <div className="hero-action-buttons">
              <button onClick={() => handleScrollTo('projects')} className="btn btn-primary">
                View Projects <ArrowRight size={18} />
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('contact');
                }}
                className="btn btn-secondary"
              >
                <Mail size={18} /> Contact Me
              </a>
              <a
                href={resumePdf}
                download="Faheem_Nazir_Resume.pdf"
                className="btn btn-secondary resume-btn"
              >
                <Download size={18} /> Resume
              </a>
            </div>

            {/* Social quick links */}
            <div className="hero-social-links">
              <a
                href="https://github.com/FaheemNazir1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/faheemnazir5050/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="hero-visual-side">
            <div className="portrait-frame-3d">
              {/* Floating tech badges */}
              <div className="floating-badge badge-1 animate-float">
                <Brain size={18} color="#06B6D4" /> <span>Python & ML</span>
              </div>
              <div className="floating-badge badge-2 animate-float" style={{ animationDelay: '1.5s' }}>
                <Code2 size={18} color="#3B82F6" /> <span>React.js</span>
              </div>
              <div className="floating-badge badge-3 animate-float" style={{ animationDelay: '3s' }}>
                <Layers size={18} color="#A855F7" /> <span>TensorFlow</span>
              </div>
              <div className="floating-badge badge-4 animate-float" style={{ animationDelay: '4.5s' }}>
                <Cpu size={18} color="#10B981" /> <span>C++ & DSA</span>
              </div>
              <div className="floating-badge badge-5 animate-float" style={{ animationDelay: '2.5s' }}>
                <Database size={18} color="#F59E0B" /> <span>Node & SQL</span>
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
            <span className="lbl">Applied Machine Learning</span>
          </div>
          <div className="banner-footer-item">
            <span className="num">#02</span>
            <span className="lbl">Full-Stack Development</span>
          </div>
          <div className="banner-footer-item">
            <span className="num">#03</span>
            <span className="lbl">Signal Processing & CV</span>
          </div>
          <div className="banner-footer-item">
            <span className="num">#04</span>
            <span className="lbl">Data Structures & Algorithms</span>
          </div>
        </div>
      </div>

      {/* Brand & Project Focus Bar */}
      <div className="brand-partnership-bar reveal-on-scroll delay-100">
        <span className="partnership-title">Featured Project Ecosystem & Affiliations</span>
        <div className="brand-logos-container">
          <div className="brand-logo-item">
            <div className="circle-logo"></div>
            <span>PhysioStress AI</span>
          </div>
          <div className="brand-logo-item">
            <div className="circle-logo triangle"></div>
            <span>HireSensei AI</span>
          </div>
          <div className="brand-logo-item">
            <div className="circle-logo half-circle"></div>
            <span>Farm2Market</span>
          </div>
          <div className="brand-logo-item">
            <div className="circle-logo square"></div>
            <span>KIT Kolhapur (CSE)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
