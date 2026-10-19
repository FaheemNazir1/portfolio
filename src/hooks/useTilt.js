import { useCallback, useRef } from 'react';

/** 3D tilt that follows the cursor. Spread the returned props onto an element. */
export const useTilt = (max = 8) => {
  const ref = useRef(null);

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--ry', `${(px * max * 2).toFixed(2)}deg`);
      el.style.setProperty('--rx', `${(-py * max * 2).toFixed(2)}deg`);
    },
    [max]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--rx', '0deg');
  }, []);

  return { ref, onMouseMove, onMouseLeave };
};

export default useTilt;
