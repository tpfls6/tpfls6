import { IRIS_CLOSE, IRIS_EXPAND, IRIS_HERO } from '@/data/iris';
import RoleBlock from '../stockmate/RoleBlock';
import Wash from '../stockmate/Wash';

export default function Close() {
  const { title, project, mine } = IRIS_CLOSE;

  return (
    <section className="sm-block sm-close">
      <Wash className="sm-wash sm-wash--soft" seed="15" tone="iris" />
      <div className="sm-inner">
        <p className="sm-kicker" data-reveal>
          결과 및 역할
        </p>
        <h2 className="sm-title sm-title--wide" data-reveal>
          {title.map((line, i) => (
            <span key={line}>
              {i > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </h2>

        <div className="ir-split" data-reveal>
          <div>
            <p className="ir-scope ir-scope--project">프로젝트 전체</p>
            <ol className="sm-result-list">
              {project.map((item, i) => (
                <li key={item}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="ir-scope ir-scope--mine">나의 기여</p>
            <ol className="sm-result-list">
              {mine.map((item, i) => (
                <li key={item}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <RoleBlock tags={IRIS_HERO.detailRoleTags} />

        <aside className="ir-expand" data-reveal>
          <p className="ir-expand-kicker">{IRIS_EXPAND.title}</p>
          <p className="ir-expand-note">{IRIS_EXPAND.note}</p>
          <ul>
            {IRIS_EXPAND.items.map((item) => (
              <li key={item.who}>
                <b>{item.who}</b>
                {item.text}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
