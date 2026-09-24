import { notFound } from 'next/navigation';
import CaseStudyBody from '@/components/projects/CaseStudyBody';
import MoreCase from '@/components/projects/MoreCase';
import IrisCase from '@/components/projects/iris/IrisCase';
import JewelryCase from '@/components/projects/jewelry/JewelryCase';
import StockMateCase from '@/components/projects/stockmate/StockMateCase';
import { getMoreCase } from '@/data/moreCases';
import { getProjectBySlug, projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const more = getMoreCase(project.slug);
  const caseSlug = ['stockmate', 'jewelry', 'iris'].includes(project.slug) || more;

  return (
    <main className={`page page--case${caseSlug ? ` page--${project.slug}` : ''}`}>
      {project.slug === 'stockmate' ? (
        <StockMateCase project={project} />
      ) : project.slug === 'jewelry' ? (
        <JewelryCase />
      ) : project.slug === 'iris' ? (
        <IrisCase />
      ) : more ? (
        <MoreCase data={more} />
      ) : (
        <CaseStudyBody project={project} />
      )}
    </main>
  );
}
