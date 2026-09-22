import { STOCKMATE_FLOW } from '@/data/stockmate';
import Wash from './Wash';

export default function Flow() {
  const { steps, caption } = STOCKMATE_FLOW;

  return (
    <section className="sm-block sm-flow">
      <Wash className="sm-wash sm-wash--soft" seed="11" />
      <div className="sm-inner">
        <p className="sm-kicker" data-reveal>
          사용자 흐름
        </p>
        <h2 className="sm-title" data-reveal>
          학습에서 모의투자까지
        </h2>
        <ol className="sm-pipeline" data-reveal>
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
