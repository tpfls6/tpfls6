import Link from 'next/link';

export default function PortfolioTabs({ active }) {
  return (
    <nav className="portfolio-tabs" aria-label="포트폴리오 페이지">
      <Link href="/">Home</Link>
      <Link href="/projects" aria-current={active === 'projects' ? 'page' : undefined}>Projects</Link>
      <Link href="/experience" aria-current={active === 'experience' ? 'page' : undefined}>Experience</Link>
    </nav>
  );
}
