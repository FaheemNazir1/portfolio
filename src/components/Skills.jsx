import React from 'react';
import { Code2, Layout, Database, Wrench, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 size={24} color="#3B82F6" />,
      skills: ['C++', 'C', 'Java', 'Kotlin', 'Python']
    },
    {
      title: 'Frontend Development',
      icon: <Layout size={24} color="#06B6D4" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js']
    },
    {
      title: 'Backend & Databases',
      icon: <Database size={24} color="#A855F7" />,
      skills: ['Node.js', 'MySQL', 'MongoDB', 'Redis', 'Cassandra']
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench size={24} color="#10B981" />,
      skills: ['Git', 'Docker', 'Postman']
    },
    {
      title: 'Core Competencies',
      icon: <Settings size={24} color="#F59E0B" />,
      skills: [
        'Data Structures & Algorithms',
        'Problem Solving',
        'Software Development',
        'API Integration',
        'Database Management'
      ]
    }
  ];

  // Marquee Technologies list with custom SVG logos
  const marqueeSkills = [
    {
      name: 'C++',
      color: '#00599C',
      logo: (
        <svg viewBox="0 0 128 128" width="32" height="32">
          <path fill="#00599C" d="M64 12.8L12.8 32v64L64 115.2l51.2-19.2V32L64 12.8z"/>
          <path fill="#0080C0" d="M64 19.2v90l41.6-15.6V34.8L64 19.2z"/>
          <path fill="#FFF" d="M58 58v-8h-6v8h-8v6h8v8h6v-8h8v-6h-8zm24 0v-8h-6v8h-8v6h8v8h6v-8h8v-6h-8z"/>
        </svg>
      )
    },
    {
      name: 'C',
      color: '#5C7F99',
      logo: (
        <svg viewBox="0 0 128 128" width="32" height="32">
          <path fill="#A8B9CC" d="M64 12.8L12.8 32v64L64 115.2l51.2-19.2V32L64 12.8z"/>
          <path fill="#5C7F99" d="M64 19.2v90l41.6-15.6V34.8L64 19.2z"/>
          <path fill="#FFF" d="M80 44.8c-2.4-4-6.4-6.4-11.2-6.4-8 0-14.4 6.4-14.4 14.4v22.4c0 8 6.4 14.4 14.4 14.4 4.8 0 8.8-2.4 11.2-6.4v-8H68.8v-6.4H86.4V80c-4 5.6-10.4 9.6-17.6 9.6-11.2 0-20.8-9.6-20.8-20.8V46.4c0-11.2 9.6-20.8 20.8-20.8 7.2 0 13.6 4 17.6 9.6v9.6z"/>
        </svg>
      )
    },
    {
      name: 'Java',
      color: '#EA2D2E',
      logo: (
        <svg viewBox="0 0 128 128" width="32" height="32">
          <path fill="#EA2D2E" d="M35 85c0 0-4 13 13 13h46c17 0 13-13 13-13H35z"/>
          <path fill="#3D7494" d="M41 94c0 0-3 6 8 6h38c11 0 8-6 8-6H41z"/>
          <path fill="#F09224" d="M62 25c0 0 5-15 15-8s-5 25-5 25S62 38 62 25zm18 5c0 0 5-10 12-5s-3 18-3 18S80 40 80 30zM50 40c0 0 3-10 10-5s-2 18-2 18S50 50 50 40z"/>
        </svg>
      )
    },
    {
      name: 'Kotlin',
      color: '#8044B4',
      logo: (
        <svg viewBox="0 0 128 128" width="32" height="32">
          <defs>
            <linearGradient id="kotlin-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0095D5" />
              <stop offset="50%" stopColor="#8044B4" />
              <stop offset="100%" stopColor="#E53654" />
            </linearGradient>
          </defs>
          <path fill="url(#kotlin-grad-2)" d="M12.8 12.8H115.2V32L64 83.2L115.2 115.2H12.8V12.8z" />
        </svg>
      )
    },
    {
      name: 'React',
      color: '#00D8FF',
      logo: (
        <svg viewBox="0 0 128 128" width="32" height="32">
          <ellipse cx="64" cy="64" rx="16" ry="48" fill="none" stroke="#00D8FF" strokeWidth="6" transform="rotate(30 64 64)" />
          <ellipse cx="64" cy="64" rx="16" ry="48" fill="none" stroke="#00D8FF" strokeWidth="6" transform="rotate(90 64 64)" />
          <ellipse cx="64" cy="64" rx="16" ry="48" fill="none" stroke="#00D8FF" strokeWidth="6" transform="rotate(150 64 64)" />
          <circle cx="64" cy="64" r="10" fill="#00D8FF" />
        </svg>
      )
    },
    {
      name: 'SQL',
      color: '#0072C6',
      logo: (
        <svg viewBox="0 0 128 128" width="32" height="32">
          <path fill="#0072C6" d="M64 16c28.3 0 51.2 5.4 51.2 12v16c0 6.6-22.9 12-51.2 12S12.8 50.6 12.8 44V28c0-6.6 22.9-12 51.2-12z"/>
          <path fill="#004C87" d="M115.2 44v20c0 6.6-22.9 12-51.2 12S12.8 70.6 12.8 64V44c5.1 4.5 19.3 8 38.4 8s33.3-3.5 38.4-8z"/>
          <path fill="#00355E" d="M115.2 68v20c0 6.6-22.9 12-51.2 12S12.8 94.6 12.8 88V68c5.1 4.5 19.3 8 38.4 8s33.3-3.5 38.4-8z"/>
        </svg>
      )
    },
    {
      name: 'MongoDB',
      color: '#13AA52',
      logo: (
        <svg viewBox="0 0 128 128" width="32" height="32">
          <path fill="#439A46" d="M64 12.8c0 0-25.6 25.6-25.6 51.2S51.2 108.8 64 115.2V12.8z"/>
          <path fill="#13AA52" d="M64 12.8c0 0 25.6 25.6 25.6 51.2S76.8 108.8 64 115.2V12.8z"/>
          <path fill="#FFF" d="M64 48c-1.6 4.8-4.8 11.2-4.8 19.2s3.2 12.8 4.8 14.4V48z" opacity="0.3"/>
        </svg>
      )
    },
    {
      name: 'MERN Stack',
      color: '#A855F7',
      logo: (
        <svg viewBox="0 0 128 128" width="32" height="32">
          <rect x="12.8" y="12.8" width="102.4" height="102.4" rx="20" fill="#111" stroke="#A855F7" strokeWidth="4"/>
          <text x="64" y="70" fill="#FFF" fontSize="24" fontWeight="bold" fontFamily="Space Grotesk" textAnchor="middle">MERN</text>
          <circle cx="64" cy="92" r="4" fill="#00D8FF"/>
          <circle cx="38" cy="38" r="4" fill="#13AA52"/>
          <circle cx="90" cy="38" r="4" fill="#3B82F6"/>
        </svg>
      )
    },
    {
      name: 'DSA',
      color: '#F59E0B',
      logo: (
        <svg viewBox="0 0 128 128" width="32" height="32">
          <circle cx="64" cy="32" r="12" fill="#F59E0B"/>
          <circle cx="36" cy="72" r="10" fill="#3B82F6"/>
          <circle cx="92" cy="72" r="10" fill="#3B82F6"/>
          <circle cx="20" cy="108" r="8" fill="#06B6D4"/>
          <circle cx="52" cy="108" r="8" fill="#06B6D4"/>
          <line x1="64" y1="44" x2="36" y2="62" stroke="#6B7280" strokeWidth="3"/>
          <line x1="64" y1="44" x2="92" y2="62" stroke="#6B7280" strokeWidth="3"/>
          <line x1="36" y1="82" x2="20" y2="100" stroke="#6B7280" strokeWidth="3"/>
          <line x1="36" y1="82" x2="52" y2="100" stroke="#6B7280" strokeWidth="3"/>
        </svg>
      )
    }
  ];

  // We duplicate the list to ensure a seamless infinite sliding marquee
  const marqueeItemsList = [...marqueeSkills, ...marqueeSkills];

  return (
    <section id="skills" className="skills-section">
      <div className="bg-glow-blob blue" style={{ bottom: '10%', left: '5%' }}></div>

      <div className="section-header">
        <span className="section-subtitle">Technical Arsenal</span>
        <h2 className="section-title">My Skills</h2>
      </div>

      {/* Categorized Skills Grid */}
      <div className="skills-grid grid-3" style={{ marginBottom: '60px' }}>
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass-card skill-category-card">
            <div className="skill-category-header">
              <div className="skill-icon-box">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
            </div>
            
            <div className="skills-list-tags">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-tag-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sliding Marquee Showcase */}
      <div className="marquee-showcase-wrapper">
        <h3 className="marquee-section-title">Core Technologies</h3>
        <div className="marquee-container glass-card">
          <div className="marquee-track">
            {marqueeItemsList.map((skill, index) => (
              <div key={index} className="marquee-item glass-card" style={{ borderColor: `${skill.color}33` }}>
                <div className="marquee-logo-wrapper" style={{ boxShadow: `0 0 10px ${skill.color}22` }}>
                  {skill.logo}
                </div>
                <span className="marquee-item-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
