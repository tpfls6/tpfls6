'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getAllProjects } from '@/data/projects';
import { featuredWorks } from '@/data/site';
import ProjectCover from '@/components/ui/ProjectCover';

const filters = [{ id: 'all', label: '전체' }, { id: 'main', label: 'Main Projects' }, { id: 'more', label: 'More Works' }];
const projects = getAllProjects('planner');

export default function ProjectGallery() {
  const [filter, setFilter] = useState('all');
  const visible = projects.filter((project) => filter === 'all' || (filter === 'main' ? project.featured : !project.featured));
  return (
    <div className="portfolio-page">
      <header className="portfolio-page-head">
        <p className="portfolio-eyebrow">SELECTED & MORE WORKS</p>
        <h1>Projects<span className="portfolio-count">{String(projects.length).padStart(2, '0')}</span></h1>
        <p>문제를 발견하고, 경험을 설계하고, 직접 구현한 프로젝트들.</p>
      </header>
      <div className="gallery-toolbar">
        <div className="gallery-filters" role="group" aria-label="프로젝트 분류">
          {filters.map((item) => <button type="button" key={item.id} aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.label}<span>{projects.filter((project) => item.id === 'all' || (item.id === 'main' ? project.featured : !project.featured)).length}</span></button>)}
        </div>
        <p aria-live="polite">{visible.length} projects</p>
      </div>
      <div className="project-gallery">
        {visible.map((project, index) => {
          const feature = featuredWorks.find((item) => item.slug === project.slug);
          return (
            <Link href={`/projects/${project.slug}`} key={project.slug} className={`gallery-card gallery-card--${feature?.tone || 'neutral'}`}>
              <div className="gallery-image">
                <ProjectCover src={feature?.images[0] || project.cover} title={feature?.name || project.title} alt={`${feature?.name || project.title} 프로젝트 화면`} />
                <span className="gallery-open" aria-hidden="true">↗</span>
              </div>
              <div className="gallery-card-body">
                <div className="gallery-card-meta"><span>{project.featured ? 'MAIN PROJECT' : 'MORE WORK'}</span><span>{String(index + 1).padStart(2, '0')}</span></div>
                <h2>{feature?.name || project.title}</h2>
                <p>{feature?.headline || project.tagline}</p>
                <ul>{(feature?.tags || project.tags).slice(0, 4).map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </div>
            </Link>
          );
        })}
      </div>
      <Link className="portfolio-next" href="/experience"><span>다음으로 살펴보기</span><strong>이력 및 기술 <span aria-hidden="true">↗</span></strong></Link>
    </div>
  );
}
