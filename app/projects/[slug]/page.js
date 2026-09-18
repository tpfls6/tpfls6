// app/projects/[slug]/page.js
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CaseStudyBody from '../../../components/CaseStudyBody';
import { projects, getProjectBySlug } from '../../../data/projects';

const REPO_LABELS = {
  github: 'GitHub',
  frontendRepo: 'Frontend Repository',
  backendRepo: 'Backend Repository',
  orgRepo: 'Organization Repository',
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { title, tagline, period, role, team, techStack, links } = project;

  const repoEntries = Object.entries(links || {}).filter(([key, url]) => key !== 'demo' && url);

  return (
    <main className="page">
      <section className="section">
        <div className="container">
          <Link href="/projects" className="back-link" data-reveal>
            ← Archive로 돌아가기
          </Link>

          <header className="case-header" data-reveal>
            <h1 className="case-title">{title}</h1>
            <p className="case-tagline">{tagline}</p>

            <dl className="case-meta">
              <div>
                <dt>기간</dt>
                <dd>{period}</dd>
              </div>
              <div>
                <dt>역할</dt>
                <dd>{role}</dd>
              </div>
              {team && (
                <div>
                  <dt>팀</dt>
                  <dd>{team}</dd>
                </div>
              )}
            </dl>

            <div className="project-tech-list">
              {techStack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>

            <div className="case-links">
              {repoEntries.map(([key, url]) => (
                <a key={key} href={url} target="_blank" rel="noreferrer" className="project-repo-link">
                  {REPO_LABELS[key] || key} →
                </a>
              ))}
              {links?.demo && (
                <a href={links.demo} target="_blank" rel="noreferrer" className="link-button">
                  배포 사이트 보기
                </a>
              )}
            </div>
          </header>

          <CaseStudyBody project={project} />
        </div>
      </section>
    </main>
  );
}
