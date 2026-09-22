import { JEWELRY_CLOSE } from '@/data/jewelry';
import Wash from '../stockmate/Wash';

export default function Close() {
  const { title, results, process } = JEWELRY_CLOSE;

  return (
    <section className="sm-block sm-close">
      <Wash className="sm-wash sm-wash--soft" seed="15" tone="jewelry" />
      <div className="sm-inner">
        <p className="sm-kicker" data-reveal>
          결과 및 역할
        </p>
        <h2 className="sm-title sm-title--wide" data-reveal>
          {title.map((line, i) => (
            <span key={line}>
              {i > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </h2>
        <ol className="sm-result-list" data-reveal>
          {results.map((item, i) => (
            <li key={item}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {item}
            </li>
          ))}
        </ol>
        <div className="jw-path" data-reveal>
          {process.map((step, i) => (
            <div key={step} className="jw-path-item">
              {i > 0 ? (
                <span className="jw-path-arrow" aria-hidden="true">
                  <svg viewBox="0 0 108 32" fill="currentColor">
                    <path d="M0 8h72V2.2L106 16 72 29.8V24H0z" />
                  </svg>
                </span>
              ) : null}
              <p className={i === process.length - 1 ? 'is-end' : undefined}>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
