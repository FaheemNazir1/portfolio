import { Globe, Brain, Server, Database, LineChart, Code2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain size={28} className="service-icon" color="#06B6D4" />,
      title: 'AI & Machine Learning',
      description:
        'Building applied ML models, signal processing pipelines, computer vision classifiers, and interactive Streamlit data intelligence dashboards.',
    },
    {
      icon: <Globe size={28} className="service-icon" color="#3B82F6" />,
      title: 'Full-Stack Web Development',
      description:
        'Developing responsive, modern web applications from intuitive React frontends to robust, scalable backend server architectures.',
    },
    {
      icon: <Server size={28} className="service-icon" color="#A855F7" />,
      title: 'Backend & REST APIs',
      description:
        'Designing secure, high-throughput RESTful APIs with Express.js, JWT authentication, Zod schema validation, and structured error handling.',
    },
    {
      icon: <LineChart size={28} className="service-icon" color="#10B981" />,
      title: 'Data Analysis & Insights',
      description:
        'Extracting meaningful patterns from complex datasets using NumPy, Pandas, SciPy, and rendering dynamic visualizations with Plotly.',
    },
    {
      icon: <Database size={28} className="service-icon" color="#F59E0B" />,
      title: 'Database Architecture',
      description:
        'Structuring efficient relational (MySQL, PostgreSQL) and non-relational (MongoDB, Cassandra, Redis) database schemas and query indexing.',
    },
    {
      icon: <Code2 size={28} className="service-icon" color="#EC4899" />,
      title: 'Algorithmic Optimization',
      description:
        'Applying rigorous Data Structures and Algorithms principles to optimize time and space complexity in software components.',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="bg-glow-blob red" style={{ top: '30%', left: '15%' }}></div>

      <div className="section-header reveal-on-scroll">
        <span className="section-subtitle">Core Capabilities</span>
        <h2 className="section-title">What I Offer</h2>
      </div>

      <div className="services-grid grid-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`glass-card service-card reveal-on-scroll delay-${((idx % 3) + 1) * 100}`}
          >
            <div className="service-icon-box">{service.icon}</div>
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
