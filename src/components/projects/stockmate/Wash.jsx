const PALETTES = {
  stockmate: ['#c9b6e4', '#d4c4f0', '#b8c4ee'],
  jewelry: ['#e8c39a', '#f0b7a0', '#efb7a3'],
};

export default function Wash({ className, seed, tone = 'stockmate' }) {
  const id = `sm-bleed-${seed}`;
  const [a, b, c] = PALETTES[tone] || PALETTES.stockmate;
  return (
    <svg className={className} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <filter id={id} x="-35%" y="-35%" width="170%" height="170%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018 0.028" numOctaves="3" seed={seed} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="28" xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <g filter={`url(#${id})`} fill={a}>
        <circle cx="180" cy="120" r="90" opacity="0.42" />
        <circle cx="320" cy="80" r="46" opacity="0.22" />
      </g>
      <g filter={`url(#${id})`} fill={b}>
        <ellipse cx="1180" cy="220" rx="110" ry="70" opacity="0.36" />
      </g>
      <g filter={`url(#${id})`} fill={c}>
        <circle cx="1280" cy="720" r="88" opacity="0.28" />
        <circle cx="160" cy="780" r="64" opacity="0.18" />
      </g>
    </svg>
  );
}
