import { JEWELRY_QA, JEWELRY_VERIFY } from '@/data/jewelry';

function KaratVisual() {
  return (
    <div className="jw-ba">
      <div>
        <span>Before</span>
        <div className="jw-sheet is-before" aria-hidden="true">
          <b>18K</b>
          <b>14K</b>
          <i>입고</i>
          <i>입고</i>
          <i>입고</i>
          <i className="is-empty" />
          <i>출고</i>
          <i className="is-empty" />
          <i>입고</i>
          <i className="is-empty" />
        </div>
      </div>
      <div>
        <span>After</span>
        <div className="jw-sheet is-after" aria-hidden="true">
          <div>
            <b>18K</b>
            <i>입고</i>
            <i>입고</i>
            <i>출고</i>
            <i>입고</i>
          </div>
          <div>
            <b>14K</b>
            <i>입고</i>
          </div>
        </div>
      </div>
    </div>
  );
}

function SyncVisual({ exceptions }) {
  return (
    <div className="jw-sync">
      <div className="jw-sync-pcs" aria-hidden="true">
        <p>PC 01</p>
        <span>
          <svg viewBox="0 0 108 32" fill="currentColor">
            <path d="M0 8h72V2.2L106 16 72 29.8V24H0z" />
          </svg>
        </span>
        <p>Supabase</p>
        <span>
          <svg viewBox="0 0 108 32" fill="currentColor">
            <path d="M0 8h72V2.2L106 16 72 29.8V24H0z" />
          </svg>
        </span>
        <p>PC 02</p>
      </div>
      <p className="jw-cond-label">예외 처리</p>
      <ul className="jw-ex">
        {exceptions.map((ex) => (
          <li key={ex}>{ex}</li>
        ))}
      </ul>
    </div>
  );
}

function StackVisual({ from, to }) {
  return (
    <div className="jw-switch" aria-hidden="true">
      <p>{from}</p>
      <span>
        <svg viewBox="0 0 108 32" fill="currentColor">
          <path d="M0 8h72V2.2L106 16 72 29.8V24H0z" />
        </svg>
      </span>
      <p className="is-end">{to}</p>
    </div>
  );
}

export default function Verify() {
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
          {JEWELRY_VERIFY.map((item, i) => (
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
                </dl>
              </div>
              {item.visual === 'karat' ? (
                <KaratVisual />
              ) : item.exceptions ? (
                <SyncVisual exceptions={item.exceptions} />
              ) : (
                <StackVisual from={item.from} to={item.to} />
              )}
            </article>
          ))}
        </div>

        <div className="jw-qa" data-reveal>
          <p className="jw-cond-label">추가 QA</p>
          <ul>
            {JEWELRY_QA.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
