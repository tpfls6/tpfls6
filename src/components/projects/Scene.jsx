import ProjectCover from '@/components/ui/ProjectCover';
import ThemePlaceholder from '@/components/ui/ThemePlaceholder';
import { getDisplayTitle } from '@/data/viewMeta';

export function clip(text, max = 180) {
  const one = String(text).replace(/\s+/g, ' ').trim();
  if (one.length <= max) return one;
  const cut = one.slice(0, max);
  const mark = Math.max(cut.lastIndexOf('다.'), cut.lastIndexOf('. '));
  return mark > 40 ? one.slice(0, mark + 1) : `${cut.trim()}…`;
}

export function Scene({ num, label, lines, note, variant, children }) {
  const headline = lines?.length ? lines : note ? [clip(note, 90)] : [];
  const body = lines?.length ? note : null;

  return (
    <section className={`scene scene--${(label || 'block').toLowerCase().replace(/[^a-z]+/g, '-')} ${variant ? `is-${variant}` : ''}`} data-reveal>
      <p className="scene-num">
        {num} / {label}
      </p>
      {headline.length > 0 && (
        <h2 className="scene-headline">
          {headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
      )}
      {children}
      {body && <p className="scene-note">{clip(body)}</p>}
    </section>
  );
}

export function WorkLines({ points, tone = 'plain' }) {
  return (
    <ol className={`work-lines work-lines--${tone}`}>
      {points.map((point, i) => (
        <li key={point}>
          <span>{String(i + 1).padStart(2, '0')}</span>
          <p>{point}</p>
        </li>
      ))}
    </ol>
  );
}

export function FlowTrack({ steps }) {
  return (
    <div className="flow-line">
      {steps.map((step) => {
        const [label, note] = Array.isArray(step) ? step : [step, ''];
        return (
          <div className="flow-node" key={label}>
            <b>{label}</b>
            {note && <span>{note}</span>}
          </div>
        );
      })}
    </div>
  );
}

export function ArchMap({ steps }) {
  return (
    <ol className="arch-map">
      {steps.map(([title, items]) => (
        <li key={title}>
          <b>{title}</b>
          <span>{items}</span>
        </li>
      ))}
    </ol>
  );
}

export function CoverVisual({ project, item, onOpen }) {
  if (!item) {
    return <ThemePlaceholder theme={project.theme} title={getDisplayTitle(project)} />;
  }
  return (
    <button type="button" className="shot shot--cover" onClick={() => onOpen(item)} aria-label={`${item.title || project.title} 이미지 확대`}>
      <ProjectCover src={item.src} title={item.title || project.title} />
    </button>
  );
}

export function ShotStage({ items, onOpen, layout }) {
  if (!items?.length) return null;
  const shown = items.slice(0, layout === 'stack' || layout === 'float' ? 3 : items.length);

  return (
    <div className={`shots shots--${layout}`}>
      {shown.map((item, i) => (
        <button
          type="button"
          key={`${item.src}-${i}`}
          className={`shot shot--${i}`}
          onClick={() => onOpen(item)}
          aria-label={`${item.title || '화면'} 확대`}
        >
          <ProjectCover src={item.src} title={item.title} />
          {item.title && layout !== 'stack' && <span>{item.title}</span>}
        </button>
      ))}
    </div>
  );
}
