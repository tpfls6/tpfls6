// app/projects/page.js
'use client';

import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import RoleSwitcher from '../../components/RoleSwitcher';
import { ARCHIVE_FILTERS, getProjectsByFilter } from '../../data/projects';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('ALL');
  const projects = getProjectsByFilter(filter);

  return (
    <main className="page">
      <section className="section">
        <div className="container">
          <header className="section-header" data-reveal>
            <h2 className="section-title-sticky">ARCHIVE</h2>
            <p className="section-subtitle">
              대표 프로젝트를 포함한 전체 프로젝트입니다. 필터로 좁혀보고, 상단에서 관점을 바꿔 강조 정보를 다르게 볼 수 있습니다.
            </p>
          </header>

          <div className="archive-controls" data-reveal>
            <div className="archive-filters">
              {ARCHIVE_FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  className={`archive-filter ${filter === f ? 'is-active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
            <RoleSwitcher />
          </div>

          <div className="projects-content">
            {projects.length === 0 ? (
              <p className="projects-empty">해당 조건의 프로젝트가 아직 없습니다.</p>
            ) : (
              <div className="project-grid">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
