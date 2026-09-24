import { Fragment } from 'react';
import { STOCKMATE_PROBLEM } from '@/data/stockmate';

export default function Problems() {
  const { title, items, direction } = STOCKMATE_PROBLEM;

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
          {items.map((text, i) => (
            <li key={text} data-reveal>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <p className="sm-direction-box" data-reveal>
          {direction}
        </p>
      </div>
    </section>
  );
}
