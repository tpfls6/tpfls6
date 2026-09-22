'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Lightbox from '@/components/ui/Lightbox';
import ViewSwitcher from '@/components/ui/ViewSwitcher';
import { useView } from '@/components/layout/RoleProvider';
import { getProjectImages, getProjectYear } from '@/data/projects';
import {
  getCardLine,
  getDisplayTitle,
  getProjectFacts,
  getProjectType,
  getViewRole,
} from '@/data/viewMeta';
import DeveloperStory from './DeveloperStory';
import PlannerStory from './PlannerStory';
import { CoverVisual } from './Scene';

const REPO_LABELS = {
  github: 'GitHub',
  frontendRepo: 'Frontend Repository',
  backendRepo: 'Backend Repository',
  orgRepo: 'Organization Repository',
};

export default function CaseStudyBody({ project }) {
  const { view } = useView();
  const resolved = view || 'planner';
  const [activeIndex, setActiveIndex] = useState(null);

  const images = useMemo(() => getProjectImages(project), [project]);
  const year = getProjectYear(project);
  const facts = getProjectFacts(project, resolved);
  const skipCover = project.theme === 'ledger' || project.theme === 'terminal';
  const heroItem = skipCover
    ? null
    : images.ui[0] || (images.hero ? { src: images.hero, title: project.title } : null);
  const lightboxItems = useMemo(() => {
    const seen = new Set();
    return [...images.all, ...(heroItem ? [heroItem] : [])].filter((item) => {
      if (!item?.src || seen.has(item.src)) return false;
      seen.add(item.src);
      return true;
    });
  }, [images, heroItem]);

  const openItem = (item) => {
    const idx = lightboxItems.findIndex((entry) => entry.src === item.src);
    setActiveIndex(idx >= 0 ? idx : null);
  };

  const repoEntries = Object.entries(project.links || {}).filter(([key, url]) => key !== 'demo' && url);

  return (
    <article className={`case case--${resolved} case--${project.theme || 'default'}`}>
      <section className="scene scene--cover">
          <Link href="/#selected" className="back-link">
            ← Work
          </Link>
          <p className="scene-num">{project.featured ? '01 / SELECTED' : '02 / ARCHIVE'}</p>
          <h1 className="case-display">{getDisplayTitle(project)}</h1>
          <p className="scene-note">{getCardLine(project)}</p>
          <dl className="case-facts">
            <div>
              <dt>YEAR</dt>
              <dd>{year}</dd>
            </div>
            <div>
              <dt>TYPE</dt>
              <dd>{getProjectType(project)}</dd>
            </div>
            <div>
              <dt>{resolved === 'developer' ? 'DEVELOPMENT' : 'PLANNING'}</dt>
              <dd>{getViewRole(project, resolved)}</dd>
            </div>
          </dl>
          {facts.length > 0 && (
            <div className="fact-row">
              {facts.map((fact) => (
                <p key={fact.label} className="fact">
                  <b>{fact.value}</b>
                  <span>{fact.label}</span>
                </p>
              ))}
            </div>
          )}
          {repoEntries.length > 0 && (
            <div className="case-links">
              {repoEntries.map(([key, url]) => (
                <a key={key} href={url} target="_blank" rel="noreferrer" className="project-repo-link">
                  {REPO_LABELS[key] || key} →
                </a>
              ))}
            </div>
          )}
          <CoverVisual project={project} item={heroItem} onOpen={openItem} />
        </section>

      <div className="scene scene--switch">
        <p className="scene-num">VIEW</p>
        <h2 className="scene-headline">
          <span>같은 프로젝트를</span>
          <span>다른 이야기로.</span>
        </h2>
        <ViewSwitcher size="detail" />
      </div>

      <div className="view-sensitive" key={resolved}>
        {resolved === 'developer' ? (
          <DeveloperStory project={project} images={images} onOpen={openItem} />
        ) : (
          <PlannerStory project={project} images={images} onOpen={openItem} />
        )}
      </div>

      <Lightbox
        items={lightboxItems}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </article>
  );
}
