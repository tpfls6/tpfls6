import { strengths } from '@/data/site';

export default function StrengthsSection() {
  return (
    <section id="strengths" className="strengths" aria-labelledby="strengths-title">
      <div className="strengths-inner">
        <h2 id="strengths-title" className="strengths-kicker" data-reveal>
          강점
        </h2>

        <ol className="strengths-list">
          {strengths.map((item, index) => (
            <li key={item.title[0]} className={`strength strength--${item.tone}`} data-reveal>
              <span className="strength-wash" aria-hidden="true" />
              <div className="strength-card">
                <p className="strength-num">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="strength-title">
                  {item.title.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
                <p className="strength-desc">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
