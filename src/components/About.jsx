import { Award, BookOpen, GraduationCap, Code2 } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award size={22} color="#06B6D4" />, value: '3+', label: 'Major Projects' },
    { icon: <Code2 size={22} color="#3B82F6" />, value: '200+', label: 'DSA Problems' },
    { icon: <BookOpen size={22} color="#A855F7" />, value: '15+', label: 'Technologies' },
    { icon: <GraduationCap size={22} color="#10B981" />, value: '7.6 CGPA', label: 'B.Tech (6th Sem)' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-header reveal-on-scroll">
        <span className="section-subtitle">Get to Know Me</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-content grid-2">
        {/* Left column: Text context */}
        <div className="about-text-column reveal-on-scroll">
          <h3 className="about-greeting">
            Engineering Practical <span className="accent-gradient">AI/ML & Full-Stack Systems</span>
          </h3>
          <p className="about-paragraph">
            Hi, I'm <strong>Faheem Nazir</strong>, a B.Tech Computer Science student building applied machine-learning systems in Python, with hands-on experience in biomedical signal processing, feature engineering, and rigorous cross-subject model validation.
          </p>
          <p className="about-paragraph">
            I am also fluent in full-stack and backend engineering across React.js, TypeScript, Node.js, Express.js, and REST APIs, with a growing focus on building reliable, explainable, and production-grade AI systems.
          </p>
          <p className="about-paragraph">
            Beyond coding and algorithmic problem-solving, I enjoy playing chess, reading books, and watching cinema. Exploring diverse narratives and strategic games helps broaden my perspective and analytical thinking.
          </p>
          <p className="about-paragraph">
            Currently pursuing my B.Tech in Computer Science Engineering at <strong>Kolhapur Institute of Technology</strong> (2023–2027, 6th semester, CGPA: 7.6 / 10), I am actively developing practical, high-impact projects.
          </p>
        </div>

        {/* Right column: Stats cards grid */}
        <div className="about-stats-column">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className={`glass-card stat-card reveal-on-scroll delay-${(idx + 1) * 100}`}>
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

          <div className="about-mindset-box glass-card reveal-on-scroll delay-300">
            <h4>My Engineering Philosophy</h4>
            <p>
              "Software engineering and AI must be grounded in reliability, transparency, and purpose. Building intelligent systems is not merely about achieving high metrics—it is about designing resilient architectures that generalize to real-world complexities and make life simpler."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
