import { useEffect, useRef } from 'react';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, .project-card, .milestone-item';

/** Soft spotlight + trailing ring that grows over interactive elements (fine pointers only). */
const CursorGlow = () => {
  const glowRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const glow = { ...target };
    const ring = { ...target };
    let raf;

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      ringRef.current?.classList.remove('hidden');
      ringRef.current?.classList.toggle('hot', !!e.target.closest?.(INTERACTIVE));
    };
    const onLeave = () => ringRef.current?.classList.add('hidden');

    const tick = () => {
      glow.x += (target.x - glow.x) * 0.08;
      glow.y += (target.y - glow.y) * 0.08;
      ring.x += (target.x - ring.x) * 0.22;
      ring.y += (target.y - ring.y) * 0.22;
      if (glowRef.current) glowRef.current.style.transform = `translate(${glow.x}px, ${glow.y}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
      <div className="cursor-ring hidden" ref={ringRef} aria-hidden="true" />
    </>
  );
};

export default CursorGlow;
