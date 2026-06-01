import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, ShoppingCart, Film, Landmark } from 'lucide-react';
import { Github } from './BrandIcons';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Cine News',
      subtitle: 'AI-Powered News Verification Platform (2026)',
      description: 'An AI-driven news aggregation platform utilizing Hugging Face NLP models to verify source credibility and detect fake news. Features domain reputation analysis and machine learning-based classification.',
      tech: ['Machine Learning', 'NLP', 'Hugging Face', 'APIs'],
      category: 'ai-ml',
      github: 'https://github.com/FaheemNazir1/News/tree/main/new-AI-project',
      live: 'https://verinews-app.vercel.app/',
      image: '/news_ai.png',
      icon: <ShieldCheck size={40} className="proj-graphic-icon" color="#3B82F6" />,
      gradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
    },
    {
      id: 2,
      title: 'FARM2Market',
      subtitle: 'AI-Enabled Agri-Commerce Platform (2025)',
      description: 'A marketplace connecting farmers directly to consumers with AI-powered fruit quality analysis and dynamic price prediction models. Includes image-based freshness detection and produce grading.',
      tech: ['Machine Learning', 'Computer Vision', 'Web Tech'],
      category: 'web-dev',
      github: 'https://github.com/FaheemNazir1/Farm2Market',
      live: 'https://farm2market-one.vercel.app/',
      image: '/farm2market.png',
      icon: <ShoppingCart size={40} className="proj-graphic-icon" color="#10B981" />,
      gradient: 'linear-gradient(135deg, #064E3B 0%, #10B981 100%)',
    },
    {
      id: 3,
      title: 'CineSuggest',
      subtitle: 'AI Movie Recommendation System (2025)',
      description: 'A personalized movie recommendation platform using content-based filtering. Includes social features such as friend chat, bookmarking, sharing, ratings, and user preference management.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'JavaScript'],
      category: 'ai-ml',
      github: 'https://github.com/FaheemNazir1/CineSuggest',
      live: 'https://cinesuggest-alpha.vercel.app/',
      image: '/cinesuggest.png',
      icon: <Film size={40} className="proj-graphic-icon" color="#A855F7" />,
      gradient: 'linear-gradient(135deg, #581C87 0%, #A855F7 100%)',
    },
    {
      id: 4,
      title: 'Incredible India',
      subtitle: 'Interactive Cultural Showcase Website (2024)',
      description: 'An interactive portal showcasing Indian culture, food, landmarks, and travel information across states. Features travel estimators, best-season recommendations, and a visually rich responsive interface.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      category: 'web-dev',
      github: 'https://github.com/FaheemNazir1/incredible-india',
      live: 'https://incredible-india-amber.vercel.app/',
      image: '/incredible_india.png',
      icon: <Landmark size={40} className="proj-graphic-icon" color="#F59E0B" />,
      gradient: 'linear-gradient(135deg, #78350F 0%, #F59E0B 100%)',
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="bg-glow-blob cyan" style={{ bottom: '20%', right: '5%' }}></div>

      <div className="section-header">
        <span className="section-subtitle">My Creative Works</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      {/* Filter Tabs */}
      <div className="projects-filter-tabs">
        <button
          className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Projects
        </button>
        <button
          className={`filter-tab ${filter === 'ai-ml' ? 'active' : ''}`}
          onClick={() => setFilter('ai-ml')}
        >
          AI & Machine Learning
        </button>
        <button
          className={`filter-tab ${filter === 'web-dev' ? 'active' : ''}`}
          onClick={() => setFilter('web-dev')}
        >
          Web Development
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid grid-2">
        {filteredProjects.map((project) => (
          <div key={project.id} className="glass-card project-card">
            {/* Visual Cover Graphic */}
            <div className="project-cover-graphic">
              <img src={project.image} alt={project.title} className="project-cover-image" />
              <div className="project-cover-overlay">
                <div className="graphic-glow-circle"></div>
                {project.icon}
                <span className="graphic-watermark">{project.title}</span>
              </div>
            </div>

            {/* Project Content */}
            <div className="project-details">
              <span className="project-subtitle-year">{project.subtitle}</span>
              <h3 className="project-title-name">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Tech Tags */}
              <div className="project-tech-tags">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="project-tech-tag">{t}</span>
                ))}
              </div>

              {/* Action Links */}
              <div className="project-action-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn primary-link"
                >
                  <ExternalLink size={16} /> Live Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
