import React from 'react';
import { UserCheck, Briefcase, Zap, Terminal, Trophy } from 'lucide-react';

const Experience = () => {
  const milestones = [
    {
      icon: <Terminal size={20} color="#06B6D4" />,
      title: 'Agile Software & Full-Stack Projects',
      desc: 'Built multiple end-to-end applications including Cine News (AI news NLP platform), FARM2Market (computer vision agri-commerce platform), and Movie Suggest (MERN stack recommendation platform).'
    },
    {
      icon: <Trophy size={20} color="#3B82F6" />,
      desc: 'Active solver of algorithmic problems on competitive platforms. Focus areas include arrays, graphs, trees, search optimization, and time complexity analysis.',
      title: 'Problem Solving & DSA Focus'
    },
    {
      icon: <Zap size={20} color="#A855F7" />,
      title: 'Emerging Tech Stack & Tools Adoptions',
      desc: 'Successfully acquired knowledge in modern dev tools like Git, Docker containerization, Postman endpoint testing, and Kotlin mobile programming.'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="bg-glow-blob red" style={{ bottom: '10%', right: '15%' }}></div>

      <div className="section-header">
        <span className="section-subtitle">Career Foundation</span>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="experience-container glass-card">
        <div className="experience-badge-wrapper">
          <div className="fresher-badge">
            <UserCheck size={20} />
            <span>Aspiring Software Engineer / Fresher</span>
          </div>
        </div>

        <div className="experience-layout grid-2">
          {/* Left Block: Summary */}
          <div className="experience-summary">
            <h3>Ready to Innovate</h3>
            <p className="summary-text">
              Motivated Computer Science Engineering student actively building practical projects and gaining hands-on experience through software development, AI applications, web technologies, and personal learning initiatives.
            </p>
            <p className="summary-subtext">
              I focus on writing clean, maintainable code, adopting industry-standard version control (Git), and implementing modular software architecture.
            </p>
            
            <div className="fresher-goals-box">
              <h4>Primary Focus Areas:</h4>
              <ul className="goals-list">
                <li>Custom REST API Development</li>
                <li>Data Structures & Algorithms optimization</li>
                <li>Responsive UI Design engineering</li>
                <li>Machine learning models integration</li>
              </ul>
            </div>
          </div>

          {/* Right Block: Milestones Roadmap */}
          <div className="experience-milestones">
            <h3 className="milestones-title">Development Roadmap</h3>
            <div className="milestones-timeline">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="milestone-item">
                  <div className="milestone-icon-wrapper">
                    {milestone.icon}
                  </div>
                  <div className="milestone-details">
                    <h4>{milestone.title}</h4>
                    <p>{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
