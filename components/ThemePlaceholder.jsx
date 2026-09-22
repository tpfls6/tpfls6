// components/ThemePlaceholder.jsx
export default function ThemePlaceholder({ theme, title }) {
  if (theme === 'ledger') {
    return (
      <div className="identity identity--ledger" aria-hidden="true">
        <span>IN</span>
        <span>WEIGHT</span>
        <span>PHOTO</span>
        <span>LEDGER</span>
      </div>
    );
  }

  if (theme === 'terminal') {
    return (
      <div className="identity identity--terminal" aria-hidden="true">
        <code>
          <span>$ iris --local</span>
          <span>connecting ollama · showui</span>
          <span className="is-cursor">_</span>
        </code>
        <strong>{title}</strong>
      </div>
    );
  }

  return (
    <div className="identity identity--finance" aria-hidden="true">
      <svg viewBox="0 0 320 90" role="img" aria-label="">
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          points="0,70 40,62 80,66 120,40 160,48 200,22 240,30 280,12 320,18"
        />
      </svg>
      <strong>{title}</strong>
    </div>
  );
}
