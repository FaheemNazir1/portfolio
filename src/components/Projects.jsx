import { ExternalLink, ShieldCheck, ShoppingCart, Film, Landmark, Activity, Users, Sparkles } from 'lucide-react';
import { Github } from './BrandIcons';

const Projects = () => {
  const projects = [
    {
      id: 1,
      featured: true,
      featuredBadge: 'Featured AI / Signal Processing',
      title: 'PhysioStress AI',
      subtitle: 'Multimodal Physiological Stress Detection (WESAD) | 2026',
      description:
        'Built a subject-independent physiological stress classification system using multimodal ECG, EDA, and respiration signals from the WESAD dataset, processing 859 sixty-second windows across 15 subjects at 700 Hz. Engineered 28 physiological biomarkers via zero-phase Butterworth filtering, R-peak detection & HRV analysis, EDA tonic/phasic decomposition with SCR detection, and respiration cycle analysis. Benchmarked 4 ML models under 15-fold Leave-One-Subject-Out (LOSO) validation, achieving 94.25% pooled Macro F1 and 0.983 ROC-AUC with Logistic Regression. Features a formal data-leakage audit and an interactive Streamlit research dashboard.',
      tech: [
        'Python',
        'scikit-learn',
        'NumPy',
        'Pandas',
        'SciPy',
        'Plotly',
        'Streamlit',
        'Signal Processing',
        'Explainable AI',
      ],
      github: 'https://github.com/FaheemNazir1/Multimodal-Physiological-Signal-Based-Stress-Detection-Using-Machine-and-Deep-Learning-Models',
      image: '/physiostress.png',
      icon: <Activity size={36} className="proj-graphic-icon" color="#06B6D4" />,
      gradient: 'linear-gradient(135deg, #083344 0%, #06B6D4 100%)',
    },
    {
      id: 2,
      featured: true,
      featuredBadge: 'Featured Full-Stack + AI',
      title: 'HireSensei AI',
      subtitle: 'AI-Powered Recruitment & Placement Platform | 2026',
      description:
        'Architected a full-stack recruitment and placement platform connecting students, recruiters, companies, and colleges using React.js, TypeScript, Node.js, Express.js, MongoDB, and Mongoose. Implemented secure JWT authentication and role-based access control across Student, Recruiter, TPO, and Admin roles, with bcrypt password hashing, Zod validation, and protected REST APIs. Building the AI engineering layer with LLM-based resume analysis, RAG-based retrieval over placement and job knowledge, and ML-assisted candidate-job matching.',
      tech: [
        'React.js',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'JWT',
        'REST APIs',
      ],
      github: 'https://github.com/FaheemNazir1/HireSensei-AI',
      live: 'https://hire-sensei-ai.vercel.app/',
      image: '/hiresensei.png',
      icon: <Users size={36} className="proj-graphic-icon" color="#A855F7" />,
      gradient: 'linear-gradient(135deg, #3B0764 0%, #A855F7 100%)',
    },
    {
      id: 3,
      featured: false,
      title: 'Farm2Market',
      subtitle: 'AI-Enabled Agri-Commerce Platform | 2025',
      description:
        'Engineered a full-stack agri-commerce marketplace integrating a machine learning-based fruit quality classifier and a data-driven price-prediction model to support fair, informed crop pricing. Built and integrated an image-analysis pipeline to assess produce freshness and grade, applying ML inference within a production-style full-stack application.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Machine Learning', 'Computer Vision', 'Full-Stack Web'],
      github: 'https://github.com/FaheemNazir1/Farm2Market',
      live: 'https://farm2market-one.vercel.app/',
      image: '/farm2market.png',
      icon: <ShoppingCart size={36} className="proj-graphic-icon" color="#10B981" />,
      gradient: 'linear-gradient(135deg, #064E3B 0%, #10B981 100%)',
    },
    {
      id: 4,
      featured: false,
      title: 'CineSuggest',
      subtitle: 'AI Movie Recommendation System | 2025',
      description:
        'A personalized movie recommendation platform utilizing content-based filtering algorithms. Features social friend chat, interactive bookmarking, sharing, ratings, and user taste profile management.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'JavaScript', 'Recommendation Systems'],
      github: 'https://github.com/FaheemNazir1/CineSuggest',
      live: 'https://cinesuggest-alpha.vercel.app/',
      image: '/cinesuggest.png',
      icon: <Film size={36} className="proj-graphic-icon" color="#EC4899" />,
      gradient: 'linear-gradient(135deg, #831843 0%, #EC4899 100%)',
    },
    {
      id: 5,
      featured: false,
      title: 'Cine News',
      subtitle: 'AI-Powered News Verification Platform | 2026',
      description:
        'An AI-driven news verification and aggregation portal using Hugging Face NLP models to analyze source credibility, verify claim authenticity, and perform domain reputation analysis.',
      tech: ['Python', 'NLP', 'Hugging Face', 'Machine Learning', 'REST APIs'],
      github: 'https://github.com/FaheemNazir1/News/tree/main/new-AI-project',
      live: 'https://verinews-app.vercel.app/',
      image: '/news_ai.png',
      icon: <ShieldCheck size={36} className="proj-graphic-icon" color="#3B82F6" />,
      gradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
    },
    {
      id: 6,
      featured: false,
      title: 'Incredible India',
      subtitle: 'Interactive Cultural Showcase Website | 2024',
      description:
        'An interactive cultural and travel portal showcasing Indian heritage, landmarks, and travel routes with state-wise itinerary planners and seasonal travel estimators.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/FaheemNazir1/incredible-india',
      live: 'https://incredible-india-amber.vercel.app/',
      image: '/incredible_india.png',
      icon: <Landmark size={36} className="proj-graphic-icon" color="#F59E0B" />,
      gradient: 'linear-gradient(135deg, #78350F 0%, #F59E0B 100%)',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="bg-glow-blob cyan" style={{ bottom: '20%', right: '5%' }}></div>

      <div className="section-header reveal-on-scroll">
        <span className="section-subtitle">Portfolio of Work</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid grid-2">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`glass-card project-card ${project.featured ? 'featured-project-card' : ''} reveal-on-scroll delay-${((idx % 2) + 1) * 100}`}
          >
            {project.featured && (
              <div className="featured-ribbon">
                <Sparkles size={13} /> {project.featuredBadge}
              </div>
            )}

            {/* Visual Cover Graphic */}
            <div className="project-cover-graphic">
              <img
                src={project.image}
                alt={project.title}
                className="project-cover-image"
                loading="lazy"
              />
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
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="project-tech-tag">
                    {t}
                  </span>
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
                  <Github size={16} /> Code Repository
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn primary-link"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
