'use client';

import { Fragment, useMemo, useState } from 'react';
import Lightbox from '@/components/ui/Lightbox';
import ProjectCover from '@/components/ui/ProjectCover';
import CaseHero from './CaseHero';
import Wash from './stockmate/Wash';
import './stockmate/StockMateCase.css';

function Lines({ lines }) {
  return lines.map((line, i) => (
    <Fragment key={line}>
      {i > 0 ? <br /> : null}
      {line}
    </Fragment>
  ));
}

export default function MoreCase({ data }) {
  const { tone, hero, problem, plan, screens, result, github } = data;
  const [activeIndex, setActiveIndex] = useState(null);
  const lightboxItems = useMemo(() => {
    const seen = new Set();
    return [...hero.shots, ...screens.items.map((item) => item.image)].filter((item) => {
      if (!item?.src || seen.has(item.src)) return false;
      seen.add(item.src);
      return true;
    });
  }, [hero.shots, screens.items]);

  const open = (item) => {
    const idx = lightboxItems.findIndex((entry) => entry.src === item.src);
    setActiveIndex(idx >= 0 ? idx : null);
  };

  return (
    <article className={`sm-case sm-case--${tone}`}>
      <CaseHero data={hero} tone={tone} backHref="/#archive" onOpen={open} />

      <section className="sm-block sm-problems">
        <div className="sm-inner">
          <p className="sm-kicker" data-reveal>
            문제와 목표
          </p>
          <h2 className="sm-title sm-title--wide" data-reveal>
            <Lines lines={problem.title} />
          </h2>
          <ol className="sm-issue-list">
            {problem.items.map((text, i) => (
              <li key={text} data-reveal>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <p className="sm-direction-box" data-reveal>
            {problem.direction}
          </p>
        </div>
      </section>

      <section className="sm-block sm-core">
        <div className="sm-inner">
          <p className="sm-kicker" data-reveal>
            내가 맡은 기획
          </p>
          <h2 className="sm-title" data-reveal>
            {plan.title}
          </h2>
          <div className="sm-core-list">
            {plan.items.map((item, i) => (
              <article key={item.title} className="sm-core-item" data-reveal>
                <p className="sm-core-head">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {item.title}
                </p>
                <div className="sm-tri">
                  <div>
                    <b>문제</b>
                    <p>{item.problem}</p>
                  </div>
                  <div>
                    <b>판단</b>
                    <p>{item.decision}</p>
                  </div>
                  <div className="is-end">
                    <b>기획</b>
                    <p>{item.solution}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sm-block sm-screens">
        <Wash className="sm-wash sm-wash--soft" seed="19" tone={tone} />
        <div className="sm-inner sm-inner--wide">
          <p className="sm-kicker" data-reveal>
            주요 화면
          </p>
          <h2 className="sm-title" data-reveal>
            {screens.title}
          </h2>
          <div className="sm-feat-list">
            {screens.items.map((item, i) => (
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
                  onClick={() => open(item.image)}
                  aria-label={`${item.image.title} 확대`}
                >
                  <ProjectCover src={item.image.src} title={item.image.title} alt={item.image.title} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sm-block sm-close">
        <Wash className="sm-wash sm-wash--soft" seed="15" tone={tone} />
        <div className="sm-inner" data-reveal>
          <p className="sm-kicker">결과</p>
          <h2 className="sm-title">{result.title}</h2>
          <ol className="sm-result-list">
            {result.items.map((item, i) => (
              <li key={item}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ol>
          <blockquote>
            <p>{result.note}</p>
          </blockquote>
          {github ? (
            <p className="sm-close-meta">
              <a href={github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
          ) : null}
        </div>
      </section>

      <Lightbox
        items={lightboxItems}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </article>
  );
}
