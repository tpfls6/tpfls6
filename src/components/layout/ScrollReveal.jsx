'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const reveal = (el) => el.classList.add('is-visible');

    const revealAll = () => {
      document.querySelectorAll('[data-reveal]').forEach(reveal);
    };

    if (prefersReducedMotion) {
      revealAll();
      document.documentElement.classList.add('reveal-on');
      const mutationObserver = new MutationObserver(revealAll);
      mutationObserver.observe(document.body, { childList: true, subtree: true });
      return () => {
        mutationObserver.disconnect();
        document.documentElement.classList.remove('reveal-on');
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );

    const sync = () => {
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
        if (inView) reveal(el);
        else observer.observe(el);
      });
    };

    sync();
    document.documentElement.classList.add('reveal-on');

    const mutationObserver = new MutationObserver(sync);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      document.documentElement.classList.remove('reveal-on');
    };
  }, []);

  return null;
}
