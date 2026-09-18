'use client';

import { useEffect, useState } from 'react';
import ProjectCover from './ProjectCover';

export default function ProjectScreens({ items, onOpen }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    if (!items || items.length < 2 || paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [items, paused]);

  if (!items || items.length === 0) return null;

  const current = items[active] || items[0];
  const go = (dir) => setActive((currentIndex) => (currentIndex + dir + items.length) % items.length);
  const onTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) go(diff > 0 ? 1 : -1);
    setTouchStart(null);
  };

  return (
    <div
      className="project-screens"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
    >
      {current.type === 'gif' && <span className="case-media-tag">FEATURE IN ACTION</span>}
      <button type="button" className="project-screens-frame" onClick={() => onOpen(current)}>
        <ProjectCover src={current.src} title={current.title} />
      </button>

      {items.length > 1 && (
        <>
          <div className="project-screens-nav">
            <button type="button" onClick={() => go(-1)} aria-label="이전 화면">
            ‹
            </button>
            <button type="button" onClick={() => go(1)} aria-label="다음 화면">
            ›
            </button>
          </div>
          <div className="project-screens-dots" aria-label="화면 이미지 선택">
            {items.map((item, index) => (
              <button
                type="button"
                key={`${item.src}-${item.title || index}`}
                className={index === active ? 'is-active' : ''}
                onClick={() => setActive(index)}
                aria-label={`${index + 1}번째 이미지 보기`}
              />
            ))}
          </div>
        </>
      )}

      {(current.title || current.description) && (
        <div className="case-media-caption">
          {current.title && <strong>{current.title}</strong>}
          {current.description && <p>{current.description}</p>}
        </div>
      )}
    </div>
  );
}
