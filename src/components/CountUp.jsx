import { useEffect, useRef, useState } from 'react';

/** Animates from 0 to `to` the first time it scrolls into view. */
const CountUp = ({ to, decimals = 0, suffix = '', duration = 1600 }) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf;

    const run = () => {
      if (reduce) return setValue(to);
      const start = performance.now();
      const step = (now) => {
        const t = Math.min((now - start) / duration, 1);
        setValue(to * (1 - Math.pow(1 - t, 3)));
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default CountUp;
