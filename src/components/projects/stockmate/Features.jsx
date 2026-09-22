import ProjectCover from '@/components/ui/ProjectCover';
import { STOCKMATE_FEATURES } from '@/data/stockmate';
import Wash from './Wash';

export default function Features({ onOpen }) {
  return (
    <section className="sm-block sm-screens">
      <Wash className="sm-wash sm-wash--soft" seed="19" />
      <div className="sm-inner sm-inner--wide">
        <p className="sm-kicker" data-reveal>
          주요 기능
        </p>
        <h2 className="sm-title" data-reveal>
          흐름을 만드는 세 가지
        </h2>
        <div className="sm-feat-list">
          {STOCKMATE_FEATURES.map((item, i) => (
            <article key={item.title} className="sm-feat" data-reveal>
              <div className="sm-feat-copy">
                <p className="sm-feat-num">{String(i + 1).padStart(2, '0')}</p>
                <h3>{item.title}</h3>
                <p className="sm-feat-chain">{item.chain}</p>
                <p>{item.note}</p>
              </div>
              <button
                type="button"
                className="sm-feat-shot"
                onClick={() => onOpen(item.image)}
                aria-label={`${item.image.title} 확대`}
              >
                <ProjectCover src={item.image.src} title={item.image.title} alt={item.image.title} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
