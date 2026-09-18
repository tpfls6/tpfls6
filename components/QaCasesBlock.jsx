// components/QaCasesBlock.jsx
const STEPS = [
  { key: 'situation', label: '문제' },
  { key: 'problem', label: '원인' },
  { key: 'fix', label: '해결' },
  { key: 'verification', label: '결과' },
];

export default function QaCasesBlock({ qaCases }) {
  if (!qaCases || qaCases.length === 0) return null;

  return (
    <div className="qa-cases">
      {qaCases.map((qaCase, i) => (
        <article key={i} className="qa-case" data-reveal>
          <span className="qa-case-num">CASE {String(i + 1).padStart(2, '0')}</span>
          <div className="qa-case-flow">
            {STEPS.map(
              ({ key, label }, j) =>
                qaCase[key] && (
                  <div key={key} className="qa-case-step">
                    <span className={`qa-case-label qa-case-label--${key}`}>{label}</span>
                    <p className="qa-case-text">{qaCase[key]}</p>
                    {j < STEPS.length - 1 && qaCase[STEPS[j + 1].key] && (
                      <span className="qa-case-arrow">↓</span>
                    )}
                  </div>
                )
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
