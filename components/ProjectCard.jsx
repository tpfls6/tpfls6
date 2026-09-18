// components/ProjectCard.jsx
'use client';

import Link from 'next/link';
import { useRole } from './RoleProvider';

const REPO_LABELS = {
  github: 'GitHub',
  frontendRepo: 'Frontend Repository',
  backendRepo: 'Backend Repository',
  orgRepo: 'Organization Repository',
};

export default function ProjectCard({ project }) {
  const { role } = useRole();
  const { title, tagline, period, role: teamRole, techStack, links, roleContent } = project;

  const emphasis = role !== 'all' ? roleContent?.[role] : null;
  const description = emphasis?.summary || tagline;
  const repoEntries = Object.entries(links || {}).filter(
    ([key, url]) => key !== 'demo' && url
  );

  return (
    <article className={`project-card project-card--${role}`} data-reveal>
      <div className="project-card-body">
        <div className="project-card-heading">
          <div>
            <h3 className="project-card-title">{title}</h3>
            <p className="project-card-role">{teamRole}</p>
          </div>
          <span className="project-card-period">{period}</span>
        </div>

        <p className="project-card-desc">{description}</p>

        {emphasis?.points?.length > 0 && (
          <ul className="project-card-points">
            {emphasis.points.slice(0, 3).map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}

        <div className="project-tech-list">
          {techStack.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card-footer">
          <Link href={`/projects/${project.slug}`} className="project-detail-link">
            상세보기 →
          </Link>
          {role === 'developer' &&
            repoEntries.map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="project-repo-link"
              >
                {REPO_LABELS[key] || key} →
              </a>
            ))}
        </div>
      </div>
    </article>
  );
}
