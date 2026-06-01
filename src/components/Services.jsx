import React from 'react';
import { Globe, Monitor, Server, Database, CodeSquare, HelpCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe size={28} className="service-icon" />,
      title: 'Full-Stack Web Development',
      description: 'End-to-end web application development. Building robust frontends connected to secure, scalable backend architectures.'
    },
    {
      icon: <Monitor size={28} className="service-icon" />,
      title: 'Frontend Development',
      description: 'Crafting responsive, high-performance, and visually stunning user interfaces. Ensuring cross-browser compatibility and smooth interactions.'
    },
    {
      icon: <Server size={28} className="service-icon" />,
      title: 'Backend Development',
      description: 'Designing and building secure, fast RESTful APIs and server-side systems. Implementing logical routes and middleware processes.'
    },
    {
      icon: <Database size={28} className="service-icon" />,
      title: 'Database Design',
      description: 'Architecting efficient relational and non-relational database management structures. Optimizing query execution and indexing.'
    },
    {
      icon: <CodeSquare size={28} className="service-icon" />,
      title: 'Software Solutions',
      description: 'Developing custom desktop or mobile applications tailored to solve specific business processes and complex technical issues.'
    },
    {
      icon: <HelpCircle size={28} className="service-icon" />,
      title: 'Technical Consulting',
      description: 'Providing architectural review, tech stack consulting, and problem-solving guidance for software projects and system setups.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="bg-glow-blob red" style={{ top: '30%', left: '15%' }}></div>

      <div className="section-header">
        <span className="section-subtitle">What I Offer</span>
        <h2 className="section-title">Services</h2>
      </div>

      <div className="services-grid grid-3">
        {services.map((service, idx) => (
          <div key={idx} className="glass-card service-card">
            <div className="service-icon-box">
              {service.icon}
            </div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-desc">{service.description}</p>
            <div className="service-hover-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
