import { useEffect } from 'react';

/**
 * Custom hook to initialize an IntersectionObserver for elements
 * with the '.reveal-on-scroll' class.
 */
export const useScrollReveal = (loading = false) => {
  useEffect(() => {
    if (loading) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Small timeout to guarantee all DOM nodes are painted
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal-on-scroll');

      if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        elements.forEach((el) => el.classList.add('is-visible'));
        return;
      }

      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      };

      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -20px 0px',
        threshold: 0.05,
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      elements.forEach((el) => {
        // If element is already within viewport on load, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [loading]);
};

export default useScrollReveal;
