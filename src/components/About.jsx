import { Award, BookOpen, GraduationCap, Code2 } from 'lucide-react';
import CountUp from './CountUp';

const INTERESTS = ['♟️ Chess', '📚 Reading', '🎬 Cinema', '🧩 Problem solving', '🧠 Applied AI'];

const About = () => {
  const stats = [
    { icon: <Award size={22} color="#22d3ee" />, to: 6, suffix: '', label: 'Projects built' },
    { icon: <Code2 size={22} color="#3b82f6" />, to: 200, suffix: '+', label: 'DSA problems' },
    { icon: <BookOpen size={22} color="#8b5cf6" />, to: 15, suffix: '+', label: 'Technologies' },
    { icon: <GraduationCap size={22} color="#34d399" />, to: 7.6, decimals: 1, suffix: ' CGPA', label: 'B.Tech (6th Sem)' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-header reveal-on-scroll">
        <span className="section-subtitle">Get to Know Me</span>
        <h2 className="section-title">About <span className="accent-gradient">Me</span></h2>
      </div>

      <div className="about-content grid-2">
        <div className="about-text-column reveal-on-scroll">
          <h3 className="about-greeting">
            Engineering practical <span className="accent-gradient">AI/ML & full-stack systems</span>
          </h3>
          <p className="about-paragraph">
            Hi, I'm <strong>Faheem Nazir</strong>, a B.Tech Computer Science student building applied machine-learning
            systems in Python, with hands-on experience in computer vision, recommendation systems and NLP.
          </p>
          <p className="about-paragraph">
            I am also fluent in full-stack and backend engineering across React.js, TypeScript, Node.js, Express.js,
            FastAPI and REST APIs, with a growing focus on reliable, explainable, production-grade AI systems.
          </p>
          <p className="about-paragraph">
            Currently pursuing my B.Tech in Computer Science Engineering at <strong>Kolhapur Institute of Technology</strong>{' '}
            (2023–2027, 6th semester, CGPA 7.6 / 10), actively developing practical, high-impact projects.
          </p>
          <p className="about-paragraph">Beyond code, I recharge with:</p>
          <div className="interest-chips">
            {INTERESTS.map((i) => <span key={i} className="interest-chip">{i}</span>)}
          </div>
        </div>

        <div className="about-stats-column">
          <div className="stats-grid">
            {stats.map((s, idx) => (
              <div key={s.label} className={`glass-card stat-card reveal-on-scroll delay-${(idx % 3 + 1) * 100}`}>
                <div className="stat-icon-wrapper">{s.icon}</div>
                <div className="stat-details">
                  <span className="stat-value"><CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} /></span>
                  <span className="stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about-mindset-box glass-card reveal-on-scroll delay-300">
            <h4>My Engineering Philosophy</h4>
            <p>
              "Software engineering and AI must be grounded in reliability, transparency, and purpose. Building
              intelligent systems is not merely about achieving high metrics — it is about designing resilient
              architectures that generalize to real-world complexities and make life simpler."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
