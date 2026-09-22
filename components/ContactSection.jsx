import { contactCopy, heroCopy, profile } from '../data/site';

const LINKS = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'GitHub', href: profile.github, external: true },
  { label: 'Blog', href: profile.blog, external: true },
];

export default function ContactSection() {
  const who = `${profile.name} · ${heroCopy.role}`;

  return (
    <section id="contact" className="close">
      <svg className="section-wash" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <filter id="close-bleed" x="-40%" y="-40%" width="180%" height="180%">
            <feTurbulence type="fractalNoise" baseFrequency="0.018 0.028" numOctaves="3" seed="4" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="26" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>
        <g filter="url(#close-bleed)" fill="#8fb7de">
          <circle cx="120" cy="180" r="92" opacity="0.28" />
          <circle cx="220" cy="120" r="48" opacity="0.16" />
        </g>
        <g filter="url(#close-bleed)" fill="#c9b6e4">
          <circle cx="980" cy="210" r="86" opacity="0.2" />
          <ellipse cx="720" cy="520" rx="110" ry="64" opacity="0.14" />
        </g>
        <g filter="url(#close-bleed)" fill="#efb7a3">
          <circle cx="1280" cy="640" r="96" opacity="0.24" />
        </g>
        <g filter="url(#close-bleed)" fill="#9ed4c2">
          <circle cx="380" cy="700" r="70" opacity="0.16" />
        </g>
      </svg>

      <div className="close-inner" data-reveal>
        <p className="close-kicker">{contactCopy.kicker}</p>
        <h2 className="close-title">{who}</h2>
        <p className="close-desc">
          {contactCopy.desc.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <ul className="close-links">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {link.label}
                <span className="close-arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="close-foot">
        <span>{who}</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </section>
  );
}
