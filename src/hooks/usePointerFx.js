import { useEffect } from 'react';

/**
 * Global pointer effects:
 *  - .glass-card gets --mx/--my so its CSS spotlight follows the cursor
 *  - [data-magnetic] elements are gently pulled toward the cursor
 */
export const usePointerFx = () => {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let magnetEl = null;

    const resetMagnet = () => {
      if (magnetEl) {
        magnetEl.style.transform = '';
        magnetEl = null;
      }
    };

    const onMove = (e) => {
      const card = e.target.closest?.('.glass-card');
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      }

      const mag = e.target.closest?.('[data-magnetic]');
      if (mag !== magnetEl) resetMagnet();
      if (mag) {
        magnetEl = mag;
        const r = mag.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.25;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.35;
        mag.style.transform = `translate(${dx}px, ${dy}px)`;
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      resetMagnet();
    };
  }, []);
};

export default usePointerFx;
