import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  // Scroll listener for glass effect and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Identify which section is currently on screen
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120; // offset for nav height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height
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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
          Faheem<span>Nazir</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="navbar-cta-wrapper">
          <button 
            className="navbar-cta-btn" 
            onClick={() => handleLinkClick('contact')}
          >
            Get in touch <ArrowUpRight size={16} className="cta-icon" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`navbar-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <button 
              className="navbar-cta-btn mobile-cta" 
              onClick={() => handleLinkClick('contact')}
            >
              Get in touch <ArrowUpRight size={16} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
