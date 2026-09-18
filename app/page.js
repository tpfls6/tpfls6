// app/page.js
import Link from 'next/link';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { getFeaturedProjects } from '../data/projects';

const WORK_KEYWORDS = [
  {
    word: 'STRUCTURE',
    desc: '복잡한 요구사항과 기능을 정리하고 구조화합니다.',
  },
  {
    word: 'USER FLOW',
    desc: '기능 자체보다 사용자가 서비스를 어떤 순서로 사용하는지 먼저 생각합니다.',
  },
  {
    word: 'BUILD',
    desc: '기획한 내용을 실제 화면과 기능으로 구현합니다.',
  },
  {
    word: 'VERIFY',
    desc: '정상적인 상황뿐 아니라 다양한 예외 상황을 고려하여 직접 테스트합니다.',
  },
  {
    word: 'IMPROVE',
    desc: '발견한 문제를 기록하는 것에서 끝내지 않고 수정 후 다시 검증합니다.',
  },
];

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <main className="page">
      <Hero />

      {/* How I work */}
      <section className="section">
        <div className="container">
          <div className="section-header" data-reveal>
            <h2 className="section-title-sticky">HOW I WORK</h2>
            <p className="section-subtitle">
              기술 스택을 나열하기 전에, 어떤 방식으로 일하는 사람인지를 먼저 보여드리고 싶었습니다.
            </p>
          </div>

          <div className="keyword-grid">
            {WORK_KEYWORDS.map((item, i) => (
              <div
                key={item.word}
                className="keyword-card"
                data-reveal
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <h3 className="keyword-word">{item.word}</h3>
                <p className="keyword-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header" data-reveal>
            <h2 className="section-title-sticky">PROJECTS</h2>
            <p className="section-subtitle">
              대표 프로젝트입니다. 상단에서 관점을 바꾸면 같은 프로젝트를 다른 강조점으로 볼 수 있습니다.
            </p>
          </div>

          <div className="project-grid project-grid--featured">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="section-cta" data-reveal>
            <Link href="/projects" className="link-button link-button--ghost">
              전체 프로젝트 보기 (Archive) →
            </Link>
          </div>
        </div>
      </section>

      {/* Hub links */}
      <section className="section">
        <div className="container">
          <div className="overview-grid">
            <Link href="/profile" className="overview-card" data-reveal>
              <h3 className="overview-title">About</h3>
              <p className="overview-text">
                일하는 방식, 핵심 역량, 기술 스택을 정리한 페이지입니다.
              </p>
            </Link>

            <Link href="/projects" className="overview-card" data-reveal>
              <h3 className="overview-title">Archive</h3>
              <p className="overview-text">
                대표 프로젝트 외 모든 프로젝트를 필터로 찾아볼 수 있습니다.
              </p>
            </Link>

            <Link href="/certificates" className="overview-card" data-reveal>
              <h3 className="overview-title">Certificates &amp; History</h3>
              <p className="overview-text">
                자격증, 학력, 대내외활동, 교육 이수 내역을 정리했습니다.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
