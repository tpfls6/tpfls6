'use client';

import Link from 'next/link';
import { worksCopy } from '@/data/site';
import { getProjectStartLabel, getTimelineProjects } from '@/data/projects';
import { getCardLine, getDisplayTitle, getViewRole } from '@/data/viewMeta';
import { useView } from '@/components/layout/RoleProvider';

const TONES = {
  're-route': 'mint',
  '25-hanium-navis': 'sky',
  expo: 'lilac',
};

export default function MoreWorks({ all = false }) {
  const { view } = useView();
  const list = getTimelineProjects(view, all);

  return (
    <section id="archive" className="more">
      <svg className="section-wash" viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <filter id="more-bleed" x="-40%" y="-40%" width="180%" height="180%">
            <feTurbulence type="fractalNoise" baseFrequency="0.018 0.028" numOctaves="3" seed="11" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="26" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        <g filter="url(#more-bleed)" fill="#c9b6e4">
          <circle cx="1280" cy="36" r="90" opacity="0.42" />
          <circle cx="1388" cy="110" r="48" opacity="0.22" />
        </g>
        <g filter="url(#more-bleed)" fill="#efb7a3">
          <ellipse cx="180" cy="520" rx="86" ry="52" opacity="0.28" />
        </g>
        <g filter="url(#more-bleed)" fill="#9ed4c2">
          <circle cx="70" cy="88" r="54" opacity="0.2" />
        </g>
      </svg>

      <div className="more-inner">
        <h2 className="more-kicker" data-reveal>
          {worksCopy.moreTitle}
        </h2>

        <ol className="tl view-sensitive" key={view || 'planner'}>
          {list.map((project) => {
            const title = getDisplayTitle(project);
            return (
              <li key={project.id} data-reveal>
                <Link
                  href={`/projects/${project.slug}`}
                  className={`tl-item${TONES[project.id] ? ` tl-item--${TONES[project.id]}` : ''}`}
                >
                  <time className="tl-date" dateTime={getProjectStartLabel(project)}>
                    {getProjectStartLabel(project)}
                  </time>
                  <span className="tl-dot" aria-hidden="true" />
                  <span className="tl-copy">
                    <h3 className="tl-name">{title}</h3>
                    <p className="tl-meta">{getViewRole(project, view)}</p>
                    <p className="tl-line">{getCardLine(project)}</p>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
