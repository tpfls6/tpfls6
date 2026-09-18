// components/ProjectCover.jsx
'use client';

import { useState } from 'react';

// 실제 이미지가 아직 없는 프로젝트를 위한 대체 표시.
// public/projects/<slug>/cover.webp 를 추가하면 자동으로 교체된다.
export default function ProjectCover({ src, alt, title, className = '' }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
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
      onError={() => setFailed(true)}
    />
  );
}
