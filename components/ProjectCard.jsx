// components/ProjectCard.jsx

export default function ProjectCard({ project }) {
  const {
    title,
    period,
    status,
    team,
    role,
    techStack,
    problem,
    solution,
    result,
    retrospect,
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
      data-reveal
    >
      <div className="project-card-header">
        <h3 className="project-title">{title}</h3>
        <div className="project-badges">
          {status && <span className="badge badge--status">{status}</span>}
          {award && <span className="badge badge--award">{award}</span>}
        </div>
      </div>

      <div className="project-meta">
        <span className="project-period">{period}</span>
        {team && <span className="project-meta-dot" />}
        {team && <span className="project-team">{team}</span>}
      </div>
      <p className="project-role">{role}</p>

      <div className="project-tech-list">
        {techStack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-story">
        {problem && (
          <div className="project-story-row">
            <span className="project-story-label">문제</span>
            <p className="project-story-text">{problem}</p>
          </div>
        )}
        {solution && (
          <div className="project-story-row">
            <span className="project-story-label">해결 과정</span>
            <p className="project-story-text">{solution}</p>
          </div>
        )}
        {result && (
          <div className="project-story-row">
            <span className="project-story-label">결과</span>
            <p className="project-story-text">{result}</p>
          </div>
        )}
        {retrospect && (
          <div className="project-story-row">
            <span className="project-story-label">회고</span>
            <p className="project-story-text">{retrospect}</p>
          </div>
        )}
      </div>

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
