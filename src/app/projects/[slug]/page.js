import { notFound } from 'next/navigation';
import CaseStudyBody from '@/components/projects/CaseStudyBody';
import JewelryCase from '@/components/projects/jewelry/JewelryCase';
import StockMateCase from '@/components/projects/stockmate/StockMateCase';
import { getProjectBySlug, projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className={`page page--case${['stockmate', 'jewelry'].includes(project.slug) ? ` page--${project.slug}` : ''}`}>
      {project.slug === 'stockmate' ? (
        <StockMateCase project={project} />
      ) : project.slug === 'jewelry' ? (
        <JewelryCase />
      ) : (
        <CaseStudyBody project={project} />
      )}
    </main>
  );
}
