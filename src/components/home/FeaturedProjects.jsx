import Link from 'next/link';
import { featuredWorks } from '@/data/site';
import ProjectCover from '@/components/ui/ProjectCover';

export default function FeaturedProjects() {
  return (
    <section id="selected" className="works">
      <div className="works-inner">
        <h2 className="works-kicker" data-reveal>
          대표 프로젝트
        </h2>

        <div className="works-list">
          {featuredWorks.map((item) => (
            <Link
              key={item.slug}
              href={`/projects/${item.slug}`}
              className={`work work--${item.tone}${item.flip ? ' work--flip' : ''}`}
              data-reveal
            >
              <div className="work-copy">
                <p className="work-num">{item.num}</p>
                <h3 className="work-name">
                  {item.name}
                  <svg className="work-arrow" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      d="M4 10h11M11 5l5 5-5 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </h3>
                <p className="work-headline">{item.headline}</p>
                <p className="work-desc">
                  {item.desc.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
                <ul className="work-pills">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <p className="work-note">
                  {item.core.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              </div>

              <div className={`work-visual${item.images[1] ? ' is-stack' : ''}`}>
                <div className="work-shot work-shot--main">
                  <ProjectCover src={item.images[0]} title={item.name} alt={`${item.name} 화면`} />
                </div>
                {item.images[1] ? (
                  <div className="work-shot work-shot--aux">
                    <ProjectCover src={item.images[1]} title={item.name} alt={`${item.name} 상세 화면`} />
                  </div>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
