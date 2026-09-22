'use client';

import { useState } from 'react';

export default function ProjectCover({ src, alt, title, className = '' }) {
  const [failedSrc, setFailedSrc] = useState(null);

  if (!src || failedSrc === src) {
    return (
      <div className={`project-cover project-cover--placeholder ${className}`}>
        <span>{title}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`project-cover ${className}`}
      loading="lazy"
      onError={() => setFailedSrc(src)}
    />
  );
}
