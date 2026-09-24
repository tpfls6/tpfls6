import { Fragment } from 'react';
import { IRIS_PROBLEM } from '@/data/iris';

export default function Problems() {
  const { title, items, direction } = IRIS_PROBLEM;

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
        <p className="sm-direction-box" data-reveal>
          {direction.map((line, i) => (
            <Fragment key={line}>
              {i > 0 ? <br /> : null}
              {line}
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}
