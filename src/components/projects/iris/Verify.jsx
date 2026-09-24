import ProjectCover from '@/components/ui/ProjectCover';
import { IRIS_QA, IRIS_VERIFY } from '@/data/iris';

function WorkspaceVisual({ before, after }) {
  return (
    <div className="ir-ba">
      <div>
        <span>Before</span>
        <ol className="ir-sync is-before" aria-hidden="true">
          {before.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
      <div>
        <span>After</span>
        <ol className="ir-sync is-after" aria-hidden="true">
          {after.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function BlocksVisual({ blocks }) {
  return (
    <ul className="ir-blocks" aria-hidden="true">
      {blocks.map((block) => (
        <li key={block}>{block}</li>
      ))}
    </ul>
  );
}

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
          {IRIS_VERIFY.map((item, i) => (
            <article key={item.title} className="sm-case-row has-shot" data-reveal>
              <div className="sm-case-copy">
                <p className="sm-feat-num">CASE {String(i + 1).padStart(2, '0')}</p>
                <h3>{item.title}</h3>
                <dl>
                  <div>
                    <dt>발견</dt>
                    <dd>{item.found}</dd>
                  </div>
                  <div>
                    <dt>개선</dt>
                    <dd>{item.fix}</dd>
                  </div>
                  {item.result ? (
                    <div>
                      <dt>결과</dt>
                      <dd>{item.result}</dd>
                    </div>
                  ) : null}
                </dl>
              </div>
              {item.visual === 'workspace' ? (
                <WorkspaceVisual before={item.before} after={item.after} />
              ) : item.visual === 'blocks' ? (
                <BlocksVisual blocks={item.blocks} />
              ) : (
                <button
                  type="button"
                  className="sm-feat-shot"
                  onClick={() => onOpen(item.image)}
                  aria-label={`${item.image.title} 확대`}
                >
                  <ProjectCover src={item.image.src} title={item.image.title} alt={item.image.title} />
                </button>
              )}
            </article>
          ))}
        </div>

        <div className="jw-qa" data-reveal>
          <p className="jw-cond-label">검증</p>
          <ul>
            {IRIS_QA.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
