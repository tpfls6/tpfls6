// app/projects/page.js
'use client';

import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import { schoolProjects, externalProjects } from '../../data/projects';

const TABS = [
  { id: 'all', label: '전체 보기' },
  { id: 'school', label: '학교 프로젝트' },
  { id: 'external', label: '외부 프로젝트' },
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const getProjects = () => {
    if (activeTab === 'school') return schoolProjects;
    if (activeTab === 'external') return externalProjects;
    // 전체 보기
    return [...schoolProjects, ...externalProjects];
  };

  const projects = getProjects();

  return (
    <main className="page">
      <section className="section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">프로젝트</h2>
            <p className="section-subtitle">
              학교에서 진행한 프로젝트와 대외 활동 프로젝트를 왼쪽 메뉴에서 선택해 볼 수 있습니다.
            </p>
          </header>

          <div className="projects-layout">
            {/* 왼쪽 사이드바 */}
            <aside className="projects-sidebar">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`projects-tab ${
                    activeTab === tab.id ? 'projects-tab--active' : ''
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </aside>

            {/* 오른쪽 프로젝트 리스트 */}
            <div className="projects-content">
              {projects.length === 0 ? (
                <p className="projects-empty">등록된 프로젝트가 아직 없습니다.</p>
              ) : (
                <div className="project-grid">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}