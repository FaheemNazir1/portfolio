import { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Cpu, Database, Code2, Brain, Layers } from 'lucide-react';
import { Github, LinkedIn as Linkedin } from './BrandIcons';
import CountUp from './CountUp';
import { useTilt } from '../hooks/useTilt';
import { scrollToId } from '../utils/scrollToId';
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
  const tilt = useTilt(10);

  useEffect(() => {
    const full = TITLES[loopIndex % TITLES.length];
    let delay = isDeleting ? 45 : 100;
    if (!isDeleting && text === full) delay = 1800;
    else if (isDeleting && text === '') delay = 250;

    const timer = setTimeout(() => {
      if (!isDeleting && text === full) setIsDeleting(true);
      else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopIndex((i) => i + 1);
      } else setText(full.substring(0, text.length + (isDeleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex]);

  const stats = [
    { to: 6, suffix: '', label: 'Projects built' },
    { to: 350, suffix: '+', label: 'DSA problems solved' },
    { to: 6, suffix: '', label: 'Live deployed apps' },
    { to: 15, suffix: '+', label: 'Technologies' },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="bg-glow-blob violet" style={{ top: '-5%', left: '5%' }}></div>
      <div className="bg-glow-blob cyan" style={{ bottom: '10%', right: '0%' }}></div>

      <div className="hero-content">
        <div className="hero-text-side reveal-on-scroll">
          <span className="hero-badge">
            <span className="status-dot"></span> Open to internships & opportunities
          </span>
          <h1 className="hero-main-title">
            <span className="hello">Hey, I'm</span>
            <span className="name-highlight">Faheem Nazir</span>
          </h1>

          <div className="typewriter-container">
            I build as a <span className="typewriter-text">{text}</span>
            <span className="typewriter-cursor">|</span>
          </div>

          <p className="hero-desc">
            B.Tech Computer Science student building intelligent, production-minded software — applied machine
            learning in Python and full-stack products across React, Node.js and FastAPI.
          </p>

          <div className="hero-action-buttons">
            <button onClick={() => scrollToId('projects')} className="btn btn-primary" data-magnetic>
              View Projects <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollToId('contact')} className="btn btn-secondary" data-magnetic>
              <Mail size={18} /> Contact Me
            </button>
            <a href={resumePdf} download="Faheem_Nazir_Resume.pdf" className="btn btn-secondary" data-magnetic>
              <Download size={18} /> Resume
            </a>
          </div>

          <div className="hero-social-links">
            <a href="https://github.com/FaheemNazir1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/faheemnazir5050/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual-side reveal-on-scroll delay-100">
          <div className="portrait-frame-3d" {...tilt}>
            <div className="floating-badge badge-1 animate-float"><Brain size={18} color="#22d3ee" /> <span>Python & ML</span></div>
            <div className="floating-badge badge-2 animate-float" style={{ animationDelay: '1.2s' }}><Code2 size={18} color="#3b82f6" /> <span>React.js</span></div>
            <div className="floating-badge badge-3 animate-float" style={{ animationDelay: '2.4s' }}><Layers size={18} color="#8b5cf6" /> <span>TensorFlow</span></div>
            <div className="floating-badge badge-4 animate-float" style={{ animationDelay: '3.2s' }}><Cpu size={18} color="#34d399" /> <span>C++ & DSA</span></div>
            <div className="floating-badge badge-5 animate-float" style={{ animationDelay: '1.8s' }}><Database size={18} color="#fbbf24" /> <span>FastAPI & SQL</span></div>

            <div className="frame-glow-ring"></div>
            <div className="portrait-image-container">
              <img src="/developer_portrait.png" alt="Faheem Nazir" className="portrait-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats reveal-on-scroll delay-200">
        {stats.map((s) => (
          <div key={s.label} className="glass-card hero-stat">
            <span className="num"><CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} /></span>
            <span className="lbl">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="scroll-hint" aria-hidden="true"><span></span></div>
    </section>
  );
};

export default Hero;
