import { IRIS_CORE } from '@/data/iris';

export default function Core() {
  return (
    <section className="sm-block sm-core">
      <div className="sm-inner">
        <p className="sm-kicker" data-reveal>
          핵심 기획
        </p>
        <h2 className="sm-title" data-reveal>
          문제에서 해결까지
        </h2>
        <div className="sm-core-list">
          {IRIS_CORE.map((item, i) => (
            <article key={item.title} className="sm-core-item" data-reveal>
              <p className="sm-core-head">
                <span>{String(i + 1).padStart(2, '0')}</span>
                {item.title}
                <em className={`ir-scope ir-scope--${item.scope}`}>{item.scopeLabel}</em>
              </p>
              <div className="sm-tri">
                <div>
                  <b>문제</b>
                  <p>{item.problem}</p>
                </div>
                <div>
                  <b>판단</b>
                  <p>{item.decision}</p>
                </div>
                <div className="is-end">
                  <b>해결</b>
                  <p>{item.solution}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
