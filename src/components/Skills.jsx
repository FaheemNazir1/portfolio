import { Code2, Brain, Database, Wrench, Binary, LineChart, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 size={22} color="#3B82F6" />,
      skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'Java', 'C'],
    },
    {
      title: 'AI / Machine Learning',
      icon: <Brain size={22} color="#06B6D4" />,
      skills: [
        'Machine Learning',
        'Deep Learning',
        'CNN',
        'Computer Vision',
        'Signal Processing',
        'Time-Series Analysis',
        'Feature Engineering',
        'Explainable AI',
        'Cross-Subject Validation (LOSO)',
      ],
    },
    {
      title: 'ML / Data Libraries',
      icon: <LineChart size={22} color="#A855F7" />,
      skills: [
        'scikit-learn',
        'TensorFlow',
        'OpenCV',
        'Pandas',
        'NumPy',
        'SciPy',
        'Matplotlib',
        'Seaborn',
        'Plotly',
        'Streamlit',
      ],
    },
    {
      title: 'Web & Backend',
      icon: <Globe size={22} color="#10B981" />,
      skills: ['React.js', 'Node.js', 'Express.js', 'REST APIs'],
    },
    {
      title: 'Databases',
      icon: <Database size={22} color="#F59E0B" />,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Cassandra', 'Redis'],
    },
    {
      title: 'Developer Tools',
      icon: <Wrench size={22} color="#EC4899" />,
      skills: ['Git', 'GitHub', 'Linux', 'Docker', 'Postman', 'VS Code'],
    },
    {
      title: 'Core Computer Science',
      icon: <Binary size={22} color="#6366F1" />,
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (OOP)',
        'Database Management Systems (DBMS)',
        'Operating Systems',
        'Computer Networks',
        'System Design',
      ],
    },
  ];

  // Marquee Technologies list with custom high-quality SVG logos
  const marqueeSkills = [
    {
      name: 'Python',
      color: '#3776AB',
      logo: (
        <svg viewBox="0 0 128 128" width="32" height="32">
          <path fill="#3776AB" d="M63.5 12.8c-28 0-26.3 12.1-26.3 12.1l.1 12.5h26.7v3.8H26.3S12.8 39.6 12.8 67.8c0 28.2 11.9 27.2 11.9 27.2h7.1v-10s-.4-11.9 11.7-11.9h27.1s11.2-.2 11.2-10.9V23.7s1.7-10.9-24.3-10.9zm-14.7 8.3c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4-4.4-2-4.4-4.4 2-4.4 4.4-4.4z"/>
          <path fill="#FFD43B" d="M64.5 115.2c28 0 26.3-12.1 26.3-12.1l-.1-12.5H64v-3.8h37.7s13.5 1.6 13.5-26.6c0-28.2-11.9-27.2-11.9-27.2h-7.1v10s.4 11.9-11.7 11.9H47.4s-11.2.2-11.2 10.9v38.5s-1.7 10.9 24.3 10.9zm14.7-8.3c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4-4.4 2-4.4 4.4-4.4z"/>
        </svg>
      ),
    },
    {
      name: 'TensorFlow',
      color: '#FF6F00',
      logo: (
        <svg viewBox="0 0 128 128" width="32" height="32">
          <path fill="#FF6F00" d="M64 12.8L16 40.5v46.9l20.4 11.8V66.8L64 82.5V12.8z"/>
          <path fill="#FFA800" d="M64 12.8l48 27.7v46.9l-20.4 11.8V66.8L64 82.5V12.8z"/>
          <path fill="#E65100" d="M64 82.5l27.6 16.3-27.6 16.4-27.6-16.4L64 82.5z"/>
        </svg>
      ),
    },
    {
      name: 'scikit-learn',
      color: '#F7931E',
      logo: (
        <svg viewBox="0 0 128 128" width="32" height="32">
          <circle cx="64" cy="64" r="50" fill="#3499CD" opacity="0.2"/>
          <circle cx="44" cy="50" r="22" fill="#F7931E"/>
          <circle cx="84" cy="78" r="22" fill="#3499CD"/>
          <path d="M44 50 L84 78" stroke="#FFF" strokeWidth="4"/>
        </svg>
      ),
    },
    {
      name: 'React.js',
      color: '#00D8FF',
      logo: (
        <svg viewBox="0 0 128 128" width="32" height="32">
          <ellipse cx="64" cy="64" rx="16" ry="48" fill="none" stroke="#00D8FF" strokeWidth="6" transform="rotate(30 64 64)" />
          <ellipse cx="64" cy="64" rx="16" ry="48" fill="none" stroke="#00D8FF" strokeWidth="6" transform="rotate(90 64 64)" />
          <ellipse cx="64" cy="64" rx="16" ry="48" fill="none" stroke="#00D8FF" strokeWidth="6" transform="rotate(150 64 64)" />
          <circle cx="64" cy="64" r="10" fill="#00D8FF" />
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      color: '#3178C6',
      logo: (
        <svg viewBox="0 0 128 128" width="32" height="32">
          <rect x="12.8" y="12.8" width="102.4" height="102.4" rx="16" fill="#3178C6"/>
          <path fill="#FFF" d="M38 52h32v8h-12v44h-8V60H38v-8zm38 22c2-2 6-4 12-4 7 0 12 3 12 9v25h-8v-5c-3 4-7 6-11 6-7 0-11-4-11-10 0-8 6-11 19-12v-2c0-3-2-5-6-5-4 0-7 1-8 3l-5-5zm16 11c-6 0-9 2-9 6s3 5 7 5c5 0 8-3 8-7v-4h-6z"/>
        </svg>
      ),
    },
    {
      name: 'Node.js',
      color: '#339933',
      logo: (
        <svg viewBox="0 0 128 128" width="32" height="32">
          <path fill="#339933" d="M64 12.8L16 40.5v55l48 27.7 48-27.7v-55L64 12.8z"/>
          <path fill="#FFF" d="M64 26l36 21v42L64 110l-36-21V47l36-21z" opacity="0.2"/>
        </svg>
      ),
    },
    {
      name: 'C++',
      color: '#00599C',
      logo: (
        <svg viewBox="0 0 128 128" width="32" height="32">
          <path fill="#00599C" d="M64 12.8L12.8 32v64L64 115.2l51.2-19.2V32L64 12.8z"/>
          <path fill="#0080C0" d="M64 19.2v90l41.6-15.6V34.8L64 19.2z"/>
          <path fill="#FFF" d="M58 58v-8h-6v8h-8v6h8v8h6v-8h8v-6h-8zm24 0v-8h-6v8h-8v6h8v8h6v-8h8v-6h-8z"/>
        </svg>
      ),
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
      ),
    },
    {
      name: 'Docker',
      color: '#2496ED',
      logo: (
        <svg viewBox="0 0 128 128" width="32" height="32">
          <path fill="#2496ED" d="M115.2 64c-3.2-1.6-9.6-1.6-12.8 1.6-1.6-8-8-12.8-16-12.8-1.6 0-3.2.2-4.8.8-4.8-6.4-12.8-9.6-20.8-8V41.6h-9.6V32H41.6v9.6H32v9.6h9.6V60.8H32v9.6h9.6v9.6h9.6v-9.6h9.6v9.6h9.6V70.4h9.6v9.6h9.6V64h35.2z"/>
          <path fill="#2496ED" d="M12.8 76.8C16 102.4 40 115.2 64 115.2c35.2 0 54.4-16 57.6-38.4H12.8z"/>
        </svg>
      ),
    },
    {
      name: 'DSA & Algos',
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
      ),
    },
  ];

  // Duplicated for seamless infinite marquee loop
  const marqueeItemsList = [...marqueeSkills, ...marqueeSkills];

  return (
    <section id="skills" className="skills-section">
      <div className="bg-glow-blob blue" style={{ bottom: '10%', left: '5%' }}></div>

      <div className="section-header reveal-on-scroll">
        <span className="section-subtitle">Technical Arsenal</span>
        <h2 className="section-title">Skills & Technologies</h2>
      </div>

      {/* Categorized Skills Grid */}
      <div className="skills-grid grid-3" style={{ marginBottom: '60px' }}>
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className={`glass-card skill-category-card reveal-on-scroll delay-${((idx % 3) + 1) * 100}`}
          >
            <div className="skill-category-header">
              <div className="skill-icon-box">{category.icon}</div>
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
      <div className="marquee-showcase-wrapper reveal-on-scroll delay-200">
        <h3 className="marquee-section-title">Core Technology Stack</h3>
        <div className="marquee-container glass-card">
          <div className="marquee-track">
            {marqueeItemsList.map((skill, index) => (
              <div
                key={index}
                className="marquee-item glass-card"
                style={{ borderColor: `${skill.color}33` }}
              >
                <div
                  className="marquee-logo-wrapper"
                  style={{ boxShadow: `0 0 10px ${skill.color}22` }}
                >
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
