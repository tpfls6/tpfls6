import { heroCopy, profile } from '@/data/site';

export default function Hero() {
  return (
    <section className="cover" aria-label="소개">
      <svg className="cover-wash" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <filter id="cover-bleed" x="-35%" y="-35%" width="170%" height="170%">
            <feTurbulence type="fractalNoise" baseFrequency="0.018 0.028" numOctaves="3" seed="7" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="28" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        <g filter="url(#cover-bleed)" fill="#8fb7de">
          <circle cx="36" cy="28" r="78" opacity="0.55" />
          <circle cx="108" cy="8" r="42" opacity="0.28" />
          <circle cx="8" cy="92" r="48" opacity="0.32" />
        </g>
        <g filter="url(#cover-bleed)" fill="#c9b6e4">
          <ellipse cx="318" cy="448" rx="72" ry="46" opacity="0.28" />
        </g>
        <g filter="url(#cover-bleed)" fill="#efb7a3">
          <circle cx="1398" cy="620" r="88" opacity="0.5" />
          <circle cx="1330" cy="710" r="54" opacity="0.28" />
        </g>
        <g filter="url(#cover-bleed)" fill="#9ed4c2">
          <circle cx="80" cy="820" r="56" opacity="0.28" />
        </g>
      </svg>

      <div className="cover-inner">
        <div className="cover-copy">
          <p className="cover-identity">
            <span className="cover-name">{profile.name}</span>
            <span className="cover-role">{heroCopy.role}</span>
          </p>
          <h1 className="cover-title">
            {heroCopy.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="cover-desc">
            {heroCopy.intro[0]}
            <br />
            {heroCopy.intro[1]}
          </p>
        </div>

        <figure className="cover-photo">
          <div className="cover-photo-frame">
            <span>PHOTO</span>
          </div>
        </figure>
      </div>
    </section>
  );
}
