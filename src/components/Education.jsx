import React from 'react';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      date: '2023 – 2027',
      status: 'Current (6th Semester)',
      title: 'Bachelor of Technology (B.Tech)',
      subtitle: 'Computer Science Engineering',
      institution: 'Kolhapur Institute of Technology',
      location: 'Kolhapur, Maharashtra, India',
      desc: 'Building a strong foundation in computer science engineering principles, coding architectures, software systems design, and database normalization. Actively participating in technical committees and developing hands-on development projects.',
      highlights: [
        'Software Engineering',
        'Data Structures & Algorithms',
        'Database Systems',
        'Web Technologies',
        'Full-Stack Development'
      ]
    },
    {
      date: 'Passed in 2023',
      status: 'Completed',
      title: 'Higher Secondary Education (Class 12)',
      subtitle: 'Shah Rasool Memorial Welkin Higher Secondary School',
      institution: 'Sopore, Jammu & Kashmir, India',
      desc: 'Completed higher secondary education with a strong academic standing, specializing in scientific coursework, logic structures, mathematics, and computing fundamentals.',
      highlights: [
        'Mathematics',
        'Physics & Chemistry',
        'Computer Fundamentals',
        'Logic & Problem Solving'
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="bg-glow-blob cyan" style={{ top: '20%', right: '10%' }}></div>

      <div className="section-header">
        <span className="section-subtitle">Academic Journey</span>
        <h2 className="section-title">Education</h2>
      </div>

      <div className="timeline-container">
        {/* Timeline Line */}
        <div className="timeline-line"></div>

        {/* Timeline Items */}
        {educationList.map((edu, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <div className="timeline-header">
                <span className="timeline-date">
                  <Calendar size={14} /> {edu.date}
                </span>
                <span className={`timeline-status-badge ${edu.status === 'Completed' ? 'completed' : ''}`}>
                  {edu.status}
                </span>
              </div>
              
              <h3 className="timeline-title">{edu.title}</h3>
              <h4 className="timeline-subtitle">{edu.subtitle}</h4>
              
              <div className="timeline-meta">
                <span className="timeline-institution">
                  <BookOpen size={16} /> {edu.institution}
                </span>
                <span className="timeline-location">
                  <MapPin size={16} /> {edu.location}
                </span>
              </div>

              <p className="timeline-desc">{edu.desc}</p>

              <div className="course-highlights">
                <h5>Key Highlights:</h5>
                <div className="course-tags">
                  {edu.highlights.map((highlight, hIdx) => (
                    <span key={hIdx} className="course-tag">
                      <Award size={12} className="tag-icon" /> {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
