import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      date: '2023 – 2027',
      status: 'Current (6th Semester)',
      scoreBadge: 'CGPA: 7.6 / 10',
      title: 'Bachelor of Technology (B.Tech)',
      subtitle: 'Computer Science Engineering',
      institution: 'Kolhapur Institute of Technology',
      location: 'Kolhapur, Maharashtra, India',
      desc: 'Building an intensive foundation in computer science engineering principles, algorithm design, machine learning pipelines, and software systems architecture. Actively developing practical projects in applied AI and full-stack web platforms.',
      highlights: [
        'Data Structures & Algorithms',
        'Machine Learning & AI',
        'Database Systems (DBMS)',
        'Full-Stack Web Technologies',
        'Operating Systems & Networks',
        'System Design & Software Engineering',
      ],
    },
    {
      date: 'Completed 2023',
      status: 'Completed',
      scoreBadge: 'Score: 83%',
      title: 'Higher Secondary Education (Class 12)',
      subtitle: 'Science & Computing Coursework',
      institution: 'Shah Rasool Memorial Welkin Higher Secondary School',
      location: 'Sopore, Jammu & Kashmir, India',
      desc: 'Completed senior secondary education with strong analytical coursework across mathematics, computational theory, physics, and logical reasoning.',
      highlights: [
        'Advanced Mathematics',
        'Physics & Chemistry',
        'Computer Fundamentals',
        'Logic & Analytical Problem Solving',
      ],
    },
    {
      date: 'Completed 2021',
      status: 'Completed',
      scoreBadge: 'Score: 98%',
      title: 'Secondary School Education (Class 10)',
      subtitle: 'High School General Sciences & Math',
      institution: 'Shah Rasool Memorial Welkin Higher Secondary School',
      location: 'Sopore, Jammu & Kashmir, India',
      desc: 'Graduated secondary school with top-tier academic honors (98%), excelling in mathematics, natural sciences, and computer literacy.',
      highlights: [
        'Mathematics & Geometry',
        'General Science & Logic',
        'Computer Science Basics',
        'Academic Honor Roll (98%)',
      ],
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="bg-glow-blob cyan" style={{ top: '20%', right: '10%' }}></div>

      <div className="section-header reveal-on-scroll">
        <span className="section-subtitle">Academic Journey</span>
        <h2 className="section-title">Education</h2>
      </div>

      <div className="timeline-container">
        {/* Timeline Line */}
        <div className="timeline-line"></div>

        {/* Timeline Items */}
        {educationList.map((edu, idx) => (
          <div
            key={idx}
            className={`timeline-item reveal-on-scroll delay-${(idx + 1) * 100}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <div className="timeline-header">
                <span className="timeline-date">
                  <Calendar size={14} /> {edu.date}
                </span>
                <div className="timeline-badge-group">
                  <span className="timeline-score-badge">{edu.scoreBadge}</span>
                  <span
                    className={`timeline-status-badge ${edu.status === 'Completed' ? 'completed' : ''}`}
                  >
                    {edu.status}
                  </span>
                </div>
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
                <h5>Key Academic Focus:</h5>
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
