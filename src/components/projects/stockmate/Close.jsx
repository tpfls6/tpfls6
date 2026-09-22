import { STOCKMATE_CLOSE, STOCKMATE_HERO } from '@/data/stockmate';
import RoleBlock from './RoleBlock';
import Wash from './Wash';

export default function Close({ github }) {
  const { results, collab, retro } = STOCKMATE_CLOSE;
  const { period, team, detailRoleTags } = STOCKMATE_HERO;

  return (
    <section className="sm-block sm-close">
      <Wash className="sm-wash sm-wash--soft" seed="15" />
      <div className="sm-inner" data-reveal>
        <p className="sm-kicker">결과 및 역할</p>
        <h2 className="sm-title">결과와 역할</h2>
        <ol className="sm-result-list">
          {results.map((item, i) => (
            <li key={item}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {item}
            </li>
          ))}
        </ol>
        <RoleBlock tags={detailRoleTags} />
        <blockquote>
          <p>{retro}</p>
        </blockquote>
        <p className="sm-close-meta">
          {period} · {team}
          {github ? (
            <>
              {' · '}
              <a href={github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </>
          ) : null}
        </p>
        <ul className="sm-tools">
          {collab.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
