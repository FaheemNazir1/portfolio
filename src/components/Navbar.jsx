import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Command } from 'lucide-react';
import { scrollToId } from '../utils/scrollToId';

const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Education', id: 'education' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Experience', id: 'experience' },
  { name: 'Services', id: 'services' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = ({ onOpenPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const pos = window.scrollY + 140;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].id);
        if (el && pos >= el.offsetTop) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const go = (id) => {
    setMobileMenuOpen(false);
    scrollToId(id);
  };

  const renderLink = (link) => (
    <li key={link.id}>
      <a
        href={`#${link.id}`}
        className={activeSection === link.id ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault();
          go(link.id);
        }}
      >
        {link.name}
      </a>
    </li>
  );

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); go('home'); }}>
          Faheem<span>Nazir</span>
        </a>

        <ul className="navbar-links">{NAV_LINKS.map(renderLink)}</ul>

        <div className="navbar-cta-wrapper">
          <button className="kbd-btn" onClick={onOpenPalette} aria-label="Open command palette">
            <Command size={14} /> <span className="kbd-label">Quick jump</span> <kbd>Ctrl K</kbd>
          </button>
          <button className="navbar-cta-btn" onClick={() => go('contact')} data-magnetic>
            Get in touch <ArrowUpRight size={16} className="cta-icon" />
          </button>
          <button className="navbar-mobile-toggle" onClick={() => setMobileMenuOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`navbar-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {NAV_LINKS.map(renderLink)}
          <li>
            <button className="navbar-cta-btn mobile-cta" onClick={() => go('contact')}>
              Get in touch <ArrowUpRight size={16} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
