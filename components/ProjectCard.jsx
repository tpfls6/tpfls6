// components/ProjectCard.jsx
import Link from "next/link";

export default function ProjectCard({ project }) {
  const {
    id,
    title,
    period,
    role,
    techStack,
    summary,
    description,
    githubUrl,
    notionUrl,
    demoUrl,
    jiraUrl,
    award,
    highlight,
  } = project;

  return (
    <article
      className={`project-card ${highlight ? "project-card--highlight" : ""}`}
    >
      <div className="project-card-header">
        <h3 className="project-title">{title}</h3>
        {award && <span className="badge badge--award">{award}</span>}
      </div>

      <p className="project-period">{period}</p>
      <p className="project-role">{role}</p>

      <div className="project-tech-list">
        {techStack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <p className="project-summary">{summary}</p>
      <p className="project-description">{description}</p>

      <div className="project-links">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="link-button"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub
          </a>
        )}
        {notionUrl && (
          <a
            href={notionUrl}
            target="_blank"
            rel="noreferrer"
            className="link-button link-button--ghost"
            onClick={(e) => e.stopPropagation()}
          >
            Notion
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="link-button link-button--ghost"
            onClick={(e) => e.stopPropagation()}
          >
            Demo
          </a>
        )}
        {jiraUrl && (
          <a
            href={jiraUrl}
            target="_blank"
            rel="noreferrer"
            className="link-button link-button--ghost"
            onClick={(e) => e.stopPropagation()}
          >
            Jira
          </a>
        )}
      </div>
    </article>
  );
}
