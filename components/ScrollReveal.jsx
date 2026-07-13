// components/ScrollReveal.jsx
'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const revealAll = () => {
      document
        .querySelectorAll('[data-reveal]:not(.is-visible)')
        .forEach((el) => el.classList.add('is-visible'));
    };

    if (prefersReducedMotion) {
      revealAll();
      const mutationObserver = new MutationObserver(revealAll);
      mutationObserver.observe(document.body, { childList: true, subtree: true });
      return () => mutationObserver.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    // 라우트 이동뿐 아니라 탭 전환처럼 페이지 이동 없이 새로 렌더링되는
    // [data-reveal] 요소도 놓치지 않도록 DOM 변화를 계속 감시합니다.
    const observeNewTargets = () => {
      document
        .querySelectorAll('[data-reveal]:not(.is-visible)')
        .forEach((el) => {
          if (!el.dataset.revealObserved) {
            el.dataset.revealObserved = 'true';
            observer.observe(el);
          }
        });
    };

    observeNewTargets();

    const mutationObserver = new MutationObserver(observeNewTargets);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
