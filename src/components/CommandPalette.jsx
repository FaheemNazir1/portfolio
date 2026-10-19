import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, CornerDownLeft, Compass, FolderGit2, Link2, Download, Mail, ExternalLink } from 'lucide-react';
import { Github, LinkedIn } from './BrandIcons';
import { projects } from '../data/projects';
import { scrollToId } from '../utils/scrollToId';
import resumePdf from '../assets/Faheem_Nazir_Resume.pdf';

const SECTIONS = ['home', 'about', 'projects', 'skills', 'education', 'achievements', 'experience', 'services', 'contact'];
const EMAIL = 'faheemnazir1234@gmail.com';

const CommandPalette = ({ open, onClose }) => {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const [toast, setToast] = useState('');
  const listRef = useRef(null);

  const items = useMemo(() => {
    const go = (id) => () => scrollToId(id);
    const link = (url) => () => window.open(url, '_blank', 'noopener');
    return [
      ...SECTIONS.map((id) => ({
        group: 'Navigate', label: `Go to ${id[0].toUpperCase()}${id.slice(1)}`, hint: `#${id}`,
        icon: <Compass size={16} />, run: go(id),
      })),
      ...projects.map((p) => ({
        group: 'Projects', label: p.title, hint: 'Open details', icon: <FolderGit2 size={16} />,
        run: () => { scrollToId('projects'); window.dispatchEvent(new CustomEvent('open-project', { detail: p.id })); },
      })),
      ...projects.filter((p) => p.live).map((p) => ({
        group: 'Live demos', label: `${p.title} — live demo`, hint: 'Opens new tab', icon: <ExternalLink size={16} />, run: link(p.live),
      })),
      { group: 'Links', label: 'GitHub profile', hint: 'FaheemNazir1', icon: <Github size={16} />, run: link('https://github.com/FaheemNazir1') },
      { group: 'Links', label: 'LinkedIn profile', hint: 'faheemnazir5050', icon: <LinkedIn size={16} />, run: link('https://www.linkedin.com/in/faheemnazir5050/') },
      {
        group: 'Actions', label: 'Download resume', hint: 'PDF', icon: <Download size={16} />,
        run: () => { const a = document.createElement('a'); a.href = resumePdf; a.download = 'Faheem_Nazir_Resume.pdf'; a.click(); },
      },
      {
        group: 'Actions', label: 'Copy email address', hint: EMAIL, icon: <Mail size={16} />,
        run: () => navigator.clipboard?.writeText(EMAIL).then(() => { setToast('Email copied to clipboard'); setTimeout(() => setToast(''), 2000); }),
      },
      { group: 'Actions', label: 'Copy portfolio link', hint: 'Share', icon: <Link2 size={16} />,
        run: () => navigator.clipboard?.writeText(window.location.href).then(() => { setToast('Link copied'); setTimeout(() => setToast(''), 2000); }) },
    ];
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? items.filter((i) => `${i.label} ${i.group} ${i.hint}`.toLowerCase().includes(q)) : items;
  }, [items, query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowDown') { e.preventDefault(); setIndex((i) => (i + 1) % Math.max(results.length, 1)); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setIndex((i) => (i - 1 + results.length) % Math.max(results.length, 1)); }
      else if (e.key === 'Enter' && results[index]) { e.preventDefault(); onClose(); results[index].run(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, results, index, onClose]);

  useEffect(() => {
    listRef.current?.querySelector('.selected')?.scrollIntoView({ block: 'nearest' });
  }, [index]);

  if (!open && !toast) return null;

  let lastGroup = null;
  return (
    <>
      {open && (
        <div className="palette-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
          <div className="palette" role="dialog" aria-modal="true" aria-label="Command palette">
            <div className="palette-input">
              <Search size={18} />
              <input
                autoFocus
                value={query}
                onChange={(e) => { setQuery(e.target.value); setIndex(0); }}
                placeholder="Jump to a section, open a project, copy my email…"
                aria-label="Search commands"
              />
            </div>
            <div className="palette-list" ref={listRef}>
              {results.length === 0 && <div className="palette-empty">No results for “{query}”</div>}
              {results.map((item, i) => {
                const header = item.group !== lastGroup ? <div className="palette-group" key={`g-${item.group}`}>{item.group}</div> : null;
                lastGroup = item.group;
                return (
                  <div key={`${item.group}-${item.label}`}>
                    {header}
                    <button
                      className={`palette-item ${i === index ? 'selected' : ''}`}
                      onMouseMove={() => setIndex(i)}
                      onClick={() => { onClose(); item.run(); }}
                    >
                      <span className="pi-icon">{item.icon}</span>
                      <span>{item.label}</span>
                      <span className="pi-hint">{item.hint}</span>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="palette-foot">
              <span><kbd>↑</kbd> <kbd>↓</kbd> navigate</span>
              <span><kbd>↵</kbd> select <CornerDownLeft size={11} style={{ verticalAlign: 'middle' }} /></span>
              <span><kbd>esc</kbd> close</span>
            </div>
          </div>
        </div>
      )}
      {toast && <div className="toast" role="status">{toast}</div>}
    </>
  );
};

export default CommandPalette;
