import ProjectCover from '@/components/ui/ProjectCover';
import { IRIS_FEATURES } from '@/data/iris';
import Wash from '../stockmate/Wash';

export default function Features({ onOpen }) {
  return (
    <section className="sm-block sm-screens">
      <Wash className="sm-wash sm-wash--soft" seed="19" tone="iris" />
      <div className="sm-inner sm-inner--wide">
        <p className="sm-kicker" data-reveal>
          주요 기능
        </p>
        <h2 className="sm-title" data-reveal>
          대화에서 실행까지
        </h2>
        <div className="sm-feat-list">
          {IRIS_FEATURES.map((item, i) => (
            <article key={item.title} className="sm-feat" data-reveal>
              <div className="sm-feat-copy">
                <p className="sm-feat-num">{String(i + 1).padStart(2, '0')}</p>
                <h3>{item.title}</h3>
                <p className={`ir-scope ir-scope--${item.scope}`}>
                  {item.scope === 'mine' ? '나의 기여' : '프로젝트 구조'}
                </p>
                <p className="sm-feat-chain">{item.chain}</p>
                <p>{item.note}</p>
              </div>
              {item.image ? (
                <button
                  type="button"
                  className="sm-feat-shot"
                  onClick={() => onOpen(item.image)}
                  aria-label={`${item.image.title} 확대`}
                >
                  <ProjectCover src={item.image.src} title={item.image.title} alt={item.image.title} />
                </button>
              ) : (
                <ol className="jw-record">
                  {item.items.map((action, j) => (
                    <li key={action}>
                      <span>{String(j + 1).padStart(2, '0')}</span>
                      {action}
                    </li>
                  ))}
                </ol>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
