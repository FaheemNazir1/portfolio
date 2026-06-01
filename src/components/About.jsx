import React from 'react';
import { Award, BookOpen, Calendar, GraduationCap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award size={22} color="#06B6D4" />, value: '5+', label: 'Projects Completed' },
    { icon: <BookOpen size={22} color="#3B82F6" />, value: '15+', label: 'Technologies Learned' },
    { icon: <GraduationCap size={22} color="#A855F7" />, value: '6th Sem', label: 'Academic Status' },
    { icon: <Calendar size={22} color="#10B981" />, value: '2023 - 2027', label: 'B.Tech Timeline' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <span className="section-subtitle">Get to Know Me</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-content grid-2">
        {/* Left column: Text context */}
        <div className="about-text-column">
          <h3 className="about-greeting">
            Designing and Building the <span className="accent-gradient">Future of Software</span>
          </h3>
          <p className="about-paragraph">
            Hi, I'm <strong>Faheem Nazir</strong>, an aspiring Computer Science student from the beautiful valleys of Kashmir. I am passionate about technology, problem-solving, and building innovative software solutions. I enjoy exploring new technologies, developing web applications, and continuously improving my programming skills.
          </p>
          <p className="about-paragraph">
            Beyond coding, I love playing chess, reading books, and watching films. As a dedicated cinephile, I enjoy exploring cinema from different genres and cultures, which helps broaden my perspective and creativity.
          </p>
          <p className="about-paragraph">
            Currently, I am pursuing my B.Tech in Computer Science Engineering at <strong>Kolhapur Institute of Technology</strong> (2023–2027), where I am studying in the 6th semester and constantly expanding my technical capabilities.
          </p>
        </div>

        {/* Right column: Stats cards grid */}
        <div className="about-stats-column">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-card stat-card">
                <div className="stat-icon-wrapper">
                  {stat.icon}
                </div>
                <div className="stat-details">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about-mindset-box glass-card">
            <h4>My Coding Philosophy</h4>
            <p>
              "Software engineering is more than just writing code; it is about engineering solutions that make life simpler, systems that scale efficiently, and user experiences that leave a lasting impact."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
