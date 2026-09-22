'use client';

import { useCallback, useEffect } from 'react';

export default function Lightbox({ items, index, onClose, onNavigate }) {
  const hasPrev = index !== null && index > 0;
  const hasNext = index !== null && index < items.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) onNavigate(index - 1);
  }, [hasPrev, index, onNavigate]);

  const goNext = useCallback(() => {
    if (hasNext) onNavigate(index + 1);
  }, [hasNext, index, onNavigate]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, onClose, goPrev, goNext]);

  if (index === null) return null;
  const item = items[index];
  if (!item) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.title || ''}
        className="lightbox-image"
        onClick={(e) => e.stopPropagation()}
      />
      {(item.title || item.description) && (
        <div className="lightbox-caption" onClick={(e) => e.stopPropagation()}>
          {item.title && <strong>{item.title}</strong>}
          {item.description && <span>{item.description}</span>}
        </div>
      )}
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="닫기">
        ✕
      </button>
      {hasPrev && (
        <button
          type="button"
          className="lightbox-nav lightbox-nav--prev"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="이전 이미지"
        >
          ‹
        </button>
      )}
      {hasNext && (
        <button
          type="button"
          className="lightbox-nav lightbox-nav--next"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="다음 이미지"
        >
          ›
        </button>
      )}
    </div>
  );
}
