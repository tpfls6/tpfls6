import ProjectCover from '@/components/ui/ProjectCover';
import { STOCKMATE_VERIFY } from '@/data/stockmate';

export default function Verify({ onOpen }) {
  return (
    <section className="sm-block sm-verify">
      <div className="sm-inner">
        <p className="sm-kicker" data-reveal>
          검증과 개선
        </p>
        <h2 className="sm-title" data-reveal>
          검증하며 개선했습니다.
        </h2>
        <div className="sm-verify-list">
          {STOCKMATE_VERIFY.map((item, i) => (
            <article key={item.title} className="sm-case-row has-shot" data-reveal>
              <div className="sm-case-copy">
                <p className="sm-feat-num">CASE {String(i + 1).padStart(2, '0')}</p>
                <h3>{item.title}</h3>
                <dl>
                  <div>
                    <dt>발견</dt>
                    <dd>{item.found}</dd>
                  </div>
                  {item.cause ? (
                    <div>
                      <dt>원인</dt>
                      <dd>{item.cause}</dd>
                    </div>
                  ) : null}
                  <div>
                    <dt>개선</dt>
                    <dd>{item.fix}</dd>
                  </div>
                </dl>
              </div>
              {item.image ? (
                <button
                  type="button"
                  className="sm-feat-shot"
                  onClick={() => onOpen(item.image)}
                  aria-label={`${item.image.title} 확대`}
                >
                  <ProjectCover src={item.image.src} title={item.image.title} alt={item.image.title} />
                </button>
              ) : item.before ? (
                <div className="sm-ba-pair">
                  <div>
                    <span>Before</span>
                    <p>{item.before}</p>
                  </div>
                  <div>
                    <span>After</span>
                    <p>{item.after}</p>
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
