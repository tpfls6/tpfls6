import { JEWELRY_FLOW } from '@/data/jewelry';
import Wash from '../stockmate/Wash';

export default function Flow() {
  const { title, conditions, steps, caption } = JEWELRY_FLOW;

  return (
    <section className="sm-block sm-flow">
      <Wash className="sm-wash sm-wash--soft" seed="11" tone="jewelry" />
      <div className="sm-inner">
        <p className="sm-kicker" data-reveal>
          업무 흐름
        </p>
        <h2 className="sm-title sm-title--wide" data-reveal>
          {title.map((line, i) => (
            <span key={line}>
              {i > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </h2>

        <div className="jw-cond" data-reveal>
          <p className="jw-cond-label">작업 조건</p>
          <div className="jw-cond-row">
            {conditions.map((pair, i) => (
              <div key={pair[0]} className="jw-cond-group">
                {i > 0 ? <span className="jw-times">×</span> : null}
                <div className="jw-pair">
                  {pair.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <ol className="sm-pipeline sm-pipeline--long" data-reveal>
          {steps.map((step, i) => (
            <li key={step}>
              <span className="sm-pipeline-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="sm-pipeline-label">{step}</span>
            </li>
          ))}
        </ol>
        <p className="sm-note sm-note--center" data-reveal>
          {caption}
        </p>
      </div>
    </section>
  );
}
