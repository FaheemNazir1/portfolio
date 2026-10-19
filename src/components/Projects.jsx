import { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, Sparkles, ArrowUpRight, X, ChevronLeft, ChevronRight, Info, Maximize2 } from 'lucide-react';
import { Github } from './BrandIcons';
import { projects, PROJECT_FILTERS } from '../data/projects';
import { useTilt } from '../hooks/useTilt';

const ProjectCard = ({ project, index, onOpen }) => {
  const tilt = useTilt(6);
  const stop = (e) => e.stopPropagation();

  return (
    <div className="tilt-wrap" style={{ animationDelay: `${index * 70}ms` }}>
      <div
        {...tilt}
        className={`glass-card project-card ${project.featured ? 'featured' : ''}`}
        role="button"
        tabIndex={0}
        aria-label={`Open details for ${project.title}`}
        onClick={() => onOpen(project.id)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpen(project.id);
          }
        }}
      >
        {project.featured && (
          <div className="featured-ribbon">
            <Sparkles size={12} /> {project.badge}
          </div>
        )}
        <div className="project-cover-graphic">
          <img src={project.image} alt={project.title} className="project-cover-image" loading="lazy" />
          <div className="project-cover-overlay">
            <span className="proj-open"><Maximize2 size={16} /></span>
          </div>
        </div>
        <div className="project-details">
          <span className="project-subtitle-year">{project.subtitle}</span>
          <h3 className="project-title-name">{project.title}</h3>
          <p className="project-desc">{project.summary}</p>
          <div className="project-tech-tags">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="project-tech-tag">{t}</span>
            ))}
            {project.tech.length > 4 && <span className="project-more">+{project.tech.length - 4}</span>}
          </div>
          <div className="project-action-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" onClick={stop}>
              <Github size={15} /> Code
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link-btn primary-link" onClick={stop}>
                <ExternalLink size={15} /> Live
              </a>
            )}
          </div>
          <span className="details-hint">Click for details <ArrowUpRight size={13} /></span>
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose, onStep }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onStep]);

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={project.title} key={project.id}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={18} /></button>
        <div className="modal-cover"><img src={project.image} alt={project.title} /></div>
        <div className="modal-body">
          <span className="project-subtitle-year">{project.subtitle}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          {project.note && (
            <div className="modal-note">
              <Info size={18} style={{ flexShrink: 0, marginTop: 2 }} /> <span>{project.note}</span>
            </div>
          )}

          {project.highlights && (
            <div className="modal-highlights">
              {project.highlights.map((h) => (
                <div key={h.label} className="modal-highlight"><strong>{h.value}</strong><span>{h.label}</span></div>
              ))}
            </div>
          )}

          <h5>Tech stack</h5>
          <div className="project-tech-tags">
            {project.tech.map((t) => <span key={t} className="project-tech-tag">{t}</span>)}
          </div>

          <div className="project-action-links" style={{ marginTop: 26, maxWidth: 420 }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
              <Github size={16} /> Code Repository
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link-btn primary-link">
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>

          <div className="modal-nav">
            <button onClick={() => onStep(-1)}><ChevronLeft size={16} /> Previous</button>
            <button onClick={() => onStep(1)}>Next <ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [openId, setOpenId] = useState(null);

  const visible = projects.filter((p) => filter === 'all' || p.cats.includes(filter));
  const countFor = (id) => (id === 'all' ? projects.length : projects.filter((p) => p.cats.includes(id)).length);

  // Lets the command palette (or anything else) open a project via a custom event.
  useEffect(() => {
    const handler = (e) => setOpenId(e.detail);
    window.addEventListener('open-project', handler);
    return () => window.removeEventListener('open-project', handler);
  }, []);

  const step = useCallback((dir) => {
    setOpenId((id) => {
      const i = projects.findIndex((p) => p.id === id);
      return projects[(i + dir + projects.length) % projects.length].id;
    });
  }, []);
  const close = useCallback(() => setOpenId(null), []);
  const openProject = projects.find((p) => p.id === openId);

  return (
    <section id="projects" className="projects-section">
      <div className="bg-glow-blob cyan" style={{ bottom: '20%', right: '5%' }}></div>

      <div className="section-header reveal-on-scroll">
        <span className="section-subtitle">Portfolio of Work</span>
        <h2 className="section-title">Featured <span className="accent-gradient">Projects</span></h2>
      </div>

      <div className="filter-bar reveal-on-scroll delay-100" role="tablist" aria-label="Filter projects">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={filter === f.id}
            className={`filter-chip ${filter === f.id ? 'active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}<span className="count">{countFor(f.id)}</span>
          </button>
        ))}
      </div>

      <div className="projects-grid" key={filter}>
        {visible.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onOpen={setOpenId} />
        ))}
      </div>

      {openProject &&
        createPortal(<ProjectModal project={openProject} onClose={close} onStep={step} />, document.body)}
    </section>
  );
};

export default Projects;
