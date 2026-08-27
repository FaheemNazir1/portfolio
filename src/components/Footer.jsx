import { Mail, ArrowUp } from 'lucide-react';
import { Github, LinkedIn as Linkedin } from './BrandIcons';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <h3>
              Faheem<span>Nazir</span>
            </h3>
            <p>Computer Science Engineer | AI/ML & Full-Stack Developer</p>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/FaheemNazir1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/faheemnazir5050/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a href="mailto:faheemnazir1234@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Faheem Nazir. All rights reserved.
          </p>

          <button onClick={handleScrollToTop} className="back-to-top-btn" aria-label="Back to top">
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
