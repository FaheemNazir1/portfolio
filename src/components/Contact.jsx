import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, AlertTriangle } from 'lucide-react';
import { Github, LinkedIn as Linkedin } from './BrandIcons';
import emailjs from '@emailjs/browser';

// EmailJS Credentials Configuration (Use .env file to load these values)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [copiedType, setCopiedType] = useState(null); // 'email' | 'phone' | null

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setSubmitError(null);

    // Fallback: If credentials are not set, run in Demo Mode
    if (
      EMAILJS_SERVICE_ID === 'service_placeholder' ||
      EMAILJS_TEMPLATE_ID === 'template_placeholder' ||
      EMAILJS_PUBLIC_KEY === 'public_key_placeholder'
    ) {
      console.warn(
        'EmailJS config is missing. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file. Simulating submission...'
      );
      
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 4000);
      }, 1500);
      return;
    }

    // Live Mode: Send using EmailJS SDK
    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      subject: formState.subject || 'Portfolio Inquiry',
      message: formState.message,
      to_name: 'Faheem Nazir',
    };

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('EmailJS Success:', response.status, response.text);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 4000);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setIsSubmitting(false);
      setSubmitError('Failed to send message. Please copy the email address directly or check your network connection.');
      setTimeout(() => setSubmitError(null), 6000);
    });
  };

  const handleCopyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="bg-glow-blob blue" style={{ top: '10%', left: '10%' }}></div>

      <div className="section-header">
        <span className="section-subtitle">Reach Out</span>
        <h2 className="section-title">Contact</h2>
      </div>

      <div className="contact-grid grid-2">
        {/* Left side: Contact Info Cards */}
        <div className="contact-info-column">
          <h3 className="contact-info-title">Let's Discuss Your Next Project</h3>
          <p className="contact-info-desc">
            I am always open to discussing new software development opportunities, academic collaborations, or project contributions. Feel free to contact me using the form or direct links!
          </p>

          <div className="contact-cards-container">
            {/* Email Card */}
            <div className="glass-card contact-detail-card">
              <div className="card-left">
                <div className="contact-icon-box">
                  <Mail size={22} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <a href="mailto:faheemnazir1234@gmail.com" className="contact-val">faheemnazir1234@gmail.com</a>
                </div>
              </div>
              <button 
                onClick={() => handleCopyToClipboard('faheemnazir1234@gmail.com', 'email')}
                className="copy-btn" 
                title="Copy Email"
              >
                {copiedType === 'email' ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
                {copiedType === 'email' && <span className="copy-tooltip">Copied!</span>}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card contact-detail-card">
              <div className="card-left">
                <div className="contact-icon-box">
                  <Phone size={22} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Phone</span>
                  <a href="tel:6006097169" className="contact-val">6006097169</a>
                </div>
              </div>
              <button 
                onClick={() => handleCopyToClipboard('6006097169', 'phone')}
                className="copy-btn" 
                title="Copy Phone Number"
              >
                {copiedType === 'phone' ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
                {copiedType === 'phone' && <span className="copy-tooltip">Copied!</span>}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card contact-detail-card">
              <div className="card-left">
                <div className="contact-icon-box">
                  <MapPin size={22} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-val text-white">Sopore, Jammu & Kashmir, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact-socials-wrapper">
            <h4>Follow Me</h4>
            <div className="contact-social-icons">
              <a href="https://github.com/FaheemNazir1" target="_blank" rel="noopener noreferrer" className="social-icon-btn github">
                <Github size={20} /> <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/faheemnazir5050/" target="_blank" rel="noopener noreferrer" className="social-icon-btn linkedin">
                <Linkedin size={20} /> <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <div className="contact-form-column">
          <div className="glass-card form-card">
            <h3>Send Message</h3>
            
            <form onSubmit={handleFormSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="Inquiry / Collaboration"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formState.message}
                  onChange={handleInputChange}
                  rows="5" 
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting || submitSuccess}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : submitSuccess ? (
                  <><Check size={18} /> Sent Successfully</>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>
            </form>

            {submitSuccess && (
              <div className="form-success-banner">
                <p>Thank you! Your message has been sent successfully. I will get back to you shortly.</p>
              </div>
            )}

            {submitError && (
              <div className="form-success-banner" style={{ borderColor: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', background: 'rgba(239, 68, 68, 0.08)' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertTriangle size={16} /> {submitError}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
