import Link from 'next/link';
import ProjectCover from '@/components/ui/ProjectCover';
import RoleBlock from './stockmate/RoleBlock';
import Wash from './stockmate/Wash';
import './stockmate/StockMateCase.css';

const WASH_SEED = { jewelry: '8', iris: '5', reroute: '7', navis: '4', pulteogi: '6', expo: '9' };

export default function CaseHero({ data, tone = 'stockmate', backHref = '/#selected', onOpen }) {
  const { title, headline, desc, facts = [], detailRoleTags, shots = [] } = data;

  return (
    <section className={`sm-hero sm-hero--${tone}`}>
      <Wash className="sm-wash sm-wash--hero" seed={WASH_SEED[tone] || '3'} tone={tone} />
      <Link href={backHref} className="sm-back" aria-label="프로젝트 목록으로">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M19 12H5M12 19l-7-7 7-7"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <div className="sm-hero-inner">
        <div className="sm-hero-copy" data-reveal>
          <h1 className="sm-display">{title}</h1>
          <p className="sm-headline">{headline}</p>
          <p className="sm-intro">{desc}</p>
          {facts.length > 0 && (
            <dl className="sm-meta">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <RoleBlock tags={detailRoleTags} />
        </div>

        <div
          className={`sm-hero-visual${shots.length === 2 ? ' is-2' : ''}${shots.some((shot) => shot.tall) ? ' is-tall' : ''}`}
        >
          {shots.map((shot, i) => (
            <button
              type="button"
              key={shot.src}
              className={`sm-shot sm-shot--${i}`}
              onClick={() => onOpen(shot)}
              aria-label={`${shot.title} 확대`}
            >
              <ProjectCover src={shot.src} title={shot.title} alt={shot.title} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
