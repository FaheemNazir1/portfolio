import { UserCheck, Zap, Trophy, Brain, Server } from 'lucide-react';

const Experience = () => {
  const milestones = [
    {
      icon: <Brain size={20} color="#06B6D4" />,
      title: 'Applied AI & Biomedical Signal Processing',
      desc: 'Engineered PhysioStress AI using multimodal physiological data (ECG, EDA, Respiration) from the WESAD dataset. Extracted 28 biomarkers, evaluated 4 ML models with 15-fold LOSO cross-validation, and developed an interactive Streamlit research dashboard.',
    },
    {
      icon: <Server size={20} color="#A855F7" />,
      title: 'Full-Stack & Intelligent Web Systems',
      desc: 'Architected full-stack applications like HireSensei AI (campus placement platform with RBAC and JWT auth) and FARM2Market (agri-commerce with computer vision quality grading and price prediction).',
    },
    {
      icon: <Trophy size={20} color="#3B82F6" />,
      title: 'Algorithmic Problem Solving & DSA',
      desc: 'Solved 200+ Data Structures & Algorithms problems across competitive programming platforms. Consistently practicing arrays, graphs, trees, search optimization, and dynamic programming.',
    },
    {
      icon: <Zap size={20} color="#10B981" />,
      title: 'Developer Tooling & System Engineering',
      desc: 'Proficient with Git version control, GitHub collaboration, Linux environments, Docker containerization, Postman API testing, and database modeling.',
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="bg-glow-blob red" style={{ bottom: '10%', right: '15%' }}></div>

      <div className="section-header reveal-on-scroll">
        <span className="section-subtitle">Career Foundation</span>
        <h2 className="section-title">Developer Roadmap & Focus</h2>
      </div>

      <div className="experience-container glass-card reveal-on-scroll delay-100">
        <div className="experience-badge-wrapper">
          <div className="fresher-badge">
            <UserCheck size={20} />
            <span>Aspiring Software Engineer / Computer Science Student</span>
          </div>
        </div>

        <div className="experience-layout grid-2">
          {/* Left Block: Summary */}
          <div className="experience-summary">
            <h3>Bridging Theory with Practical Impact</h3>
            <p className="summary-text">
              Motivated Computer Science student actively building end-to-end software systems and applied AI models. I focus on developing practical, robust solutions through hands-on project engineering and rigorous algorithmic practice.
            </p>
            <p className="summary-subtext">
              I prioritize clean code architecture, strict data-leakage prevention in ML pipelines, secure REST API design, and intuitive user experiences.
            </p>

            <div className="fresher-goals-box">
              <h4>Primary Competency Areas:</h4>
              <ul className="goals-list">
                <li>Applied Machine Learning & Signal Processing</li>
                <li>Full-Stack Web Architecture (React, Node, Express, MongoDB)</li>
                <li>Data Structures & Algorithms (200+ Problems)</li>
                <li>Computer Vision & Feature Engineering</li>
                <li>Secure RESTful API Development & JWT Auth</li>
              </ul>
            </div>
          </div>

          {/* Right Block: Milestones Roadmap */}
          <div className="experience-milestones">
            <h3 className="milestones-title">Technical Milestones</h3>
            <div className="milestones-timeline">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="milestone-item">
                  <div className="milestone-icon-wrapper">{milestone.icon}</div>
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
