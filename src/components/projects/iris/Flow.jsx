import { IRIS_FLOW } from '@/data/iris';
import Wash from '../stockmate/Wash';

export default function Flow() {
  const { title, lanes, caption } = IRIS_FLOW;

  return (
    <section className="sm-block sm-flow">
      <Wash className="sm-wash sm-wash--soft" seed="11" tone="iris" />
      <div className="sm-inner">
        <p className="sm-kicker" data-reveal>
          사용자 흐름
        </p>
        <h2 className="sm-title sm-title--wide" data-reveal>
          {title.map((line, i) => (
            <span key={line}>
              {i > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </h2>

        <ol className="ir-flow" data-reveal>
          {lanes.map((lane, i) => (
            <li key={lane.label} className="ir-flow-lane">
              {i > 0 ? (
                <span className="ir-flow-join" aria-hidden="true">
                  <svg viewBox="0 0 24 36" fill="currentColor">
                    <path d="M10 0h4v22H6.5L12 36l5.5-14H14V0z" />
                  </svg>
                </span>
              ) : null}
              <p className="ir-flow-label">{lane.label}</p>
              <ol>
                {lane.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
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
