import { notFound } from 'next/navigation';
import CaseStudyBody from '../../../components/CaseStudyBody';
import { projects, getProjectBySlug } from '../../../data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="page page--case">
      <CaseStudyBody project={project} />
    </main>
  );
}
