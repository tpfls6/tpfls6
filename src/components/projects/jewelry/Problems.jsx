import { Fragment } from 'react';
import { JEWELRY_PROBLEM } from '@/data/jewelry';

export default function Problems() {
  const { title, items, direction } = JEWELRY_PROBLEM;

  return (
    <section className="sm-block sm-problems">
      <div className="sm-inner">
        <p className="sm-kicker" data-reveal>
          문제와 방향
        </p>
        <h2 className="sm-title sm-title--wide" data-reveal>
          {title.map((line, i) => (
            <Fragment key={line}>
              {i > 0 ? <br /> : null}
              {line}
            </Fragment>
          ))}
        </h2>
        <ol className="sm-issue-list">
          {items.map((lines, i) => (
            <li key={lines[0]} data-reveal>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <p>
                {lines.map((line, j) => (
                  <Fragment key={line}>
                    {j > 0 ? <br /> : null}
                    {line}
                  </Fragment>
                ))}
              </p>
            </li>
          ))}
        </ol>
        <p className="sm-direction-flow" data-reveal>
          <span className="sm-direction-arrow" aria-hidden="true">
            <svg viewBox="0 0 108 32" fill="currentColor">
              <path d="M0 8h72V2.2L106 16 72 29.8V24H0z" />
            </svg>
          </span>
          <span className="sm-direction-box">
            {direction.map((line, i) => (
              <Fragment key={line}>
                {i > 0 ? <br /> : null}
                {line}
              </Fragment>
            ))}
          </span>
        </p>
      </div>
    </section>
  );
}
