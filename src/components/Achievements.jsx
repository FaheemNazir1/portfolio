import { Award, CheckCircle2, Code2, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      category: 'Problem Solving & Algorithms',
      title: '200+ DSA Problems Solved',
      badge: 'Competitive Programming',
      icon: <Code2 size={24} color="#06B6D4" />,
      description:
        'Solved over 200 Data Structures & Algorithms problems across platforms like LeetCode and GeeksforGeeks. Proficient in optimizing time and space complexities across Arrays, Strings, Trees, Graphs, and Dynamic Programming.',
      highlights: [
        'Time & Space Complexity Optimization',
        'Tree, Graph & Dynamic Programming Patterns',
        'Consistent Daily Problem Solving Practice',
      ],
      linkText: 'View Profile',
      linkUrl: 'https://github.com/FaheemNazir1',
    },
    {
      id: 2,
      category: 'Industry Certification',
      title: 'Getting Started with Artificial Intelligence',
      badge: 'IBM SkillsBuild Certified',
      icon: <Award size={24} color="#A855F7" />,
      description:
        'Completed comprehensive certification in AI foundations from IBM SkillsBuild. Covered neural network architectures, machine learning workflows, natural language processing, computer vision principles, and AI ethics.',
      highlights: [
        'Foundational Machine Learning & Neural Networks',
        'NLP & Computer Vision Workflows',
        'AI Ethics & Responsible AI Practices',
      ],
      linkText: 'IBM SkillsBuild',
      linkUrl: 'https://skillsbuild.org/',
    },
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="bg-glow-blob cyan" style={{ top: '15%', left: '10%' }}></div>

      <div className="section-header reveal-on-scroll">
        <span className="section-subtitle">Milestones & Accreditations</span>
        <h2 className="section-title">Achievements & Certifications</h2>
      </div>

      <div className="achievements-grid grid-2">
        {achievements.map((item, idx) => (
          <div
            key={item.id}
            className={`glass-card achievement-card reveal-on-scroll delay-${(idx + 1) * 100}`}
          >
            <div className="achievement-top">
              <div className="achievement-icon-wrapper">{item.icon}</div>
              <span className="achievement-badge">{item.badge}</span>
            </div>

            <div className="achievement-category">{item.category}</div>
            <h3 className="achievement-title">{item.title}</h3>
            <p className="achievement-desc">{item.description}</p>

            <div className="achievement-highlights">
              {item.highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="highlight-item">
                  <CheckCircle2 size={14} className="highlight-check" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="achievement-footer">
              <a
                href={item.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-link"
              >
                <span>{item.linkText}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
