'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import ProjectCover from './ProjectCover';
import Lightbox from './Lightbox';
import QaCasesBlock from './QaCasesBlock';
import ViewSwitcher from './ViewSwitcher';
import ThemePlaceholder from './ThemePlaceholder';
import { useView } from './RoleProvider';
import { getProjectImages, getProjectYear } from '../data/projects';
import {
  getCardLine,
  getDisplayTitle,
  getProjectFacts,
  getProjectType,
  getStoryLines,
  getViewFlow,
  getViewMeta,
  getViewRole,
} from '../data/viewMeta';
import { STOCKMATE_TROUBLESHOOTING } from '../data/stockmate';

const REPO_LABELS = {
  github: 'GitHub',
  frontendRepo: 'Frontend Repository',
  backendRepo: 'Backend Repository',
  orgRepo: 'Organization Repository',
};

export default function CaseStudyBody({ project }) {
  const { view } = useView();
  const resolved = view || 'planner';
  const [activeIndex, setActiveIndex] = useState(null);

  const images = useMemo(() => getProjectImages(project), [project]);
  const year = getProjectYear(project);
  const facts = getProjectFacts(project, resolved);
  const skipCover = project.theme === 'ledger' || project.theme === 'terminal';
  const heroItem = skipCover
    ? null
    : images.ui[0] || (images.hero ? { src: images.hero, title: project.title } : null);
  const lightboxItems = images.all.length ? images.all : heroItem ? [heroItem] : [];

  const openItem = (item) => {
    const idx = lightboxItems.findIndex((entry) => entry.src === item.src);
    setActiveIndex(idx >= 0 ? idx : null);
  };

  const repoEntries = Object.entries(project.links || {}).filter(([key, url]) => key !== 'demo' && url);

  return (
    <article className={`case case--${resolved} case--${project.theme || 'default'}`}>
      <section className="scene scene--cover">
        <Link href="/#selected" className="back-link">
          ← Work
        </Link>
        <p className="scene-num">{project.featured ? '01 / SELECTED' : '02 / ARCHIVE'}</p>
        <h1 className="case-display">{getDisplayTitle(project)}</h1>
        <p className="scene-note">{getCardLine(project)}</p>
        <dl className="case-facts">
          <div>
            <dt>YEAR</dt>
            <dd>{year}</dd>
          </div>
          <div>
            <dt>TYPE</dt>
            <dd>{getProjectType(project)}</dd>
          </div>
          <div>
            <dt>{resolved === 'developer' ? 'DEVELOPMENT' : 'PLANNING'}</dt>
            <dd>{getViewRole(project, resolved)}</dd>
          </div>
        </dl>
        {facts.length > 0 && (
          <div className="fact-row">
            {facts.map((fact) => (
              <p key={fact.label} className="fact">
                <b>{fact.value}</b>
                <span>{fact.label}</span>
              </p>
            ))}
          </div>
        )}
        {repoEntries.length > 0 && (
          <div className="case-links">
            {repoEntries.map(([key, url]) => (
              <a key={key} href={url} target="_blank" rel="noreferrer" className="project-repo-link">
                {REPO_LABELS[key] || key} →
              </a>
            ))}
          </div>
        )}
        <CoverVisual project={project} item={heroItem} onOpen={openItem} />
      </section>

      <div className="scene scene--switch">
        <p className="scene-num">VIEW</p>
        <h2 className="scene-headline">
          <span>같은 프로젝트를</span>
          <span>다른 이야기로.</span>
        </h2>
        <ViewSwitcher size="detail" />
      </div>

      <div className="view-sensitive" key={resolved}>
        {resolved === 'developer' ? (
          <DeveloperStory project={project} images={images} onOpen={openItem} />
        ) : (
          <PlannerStory project={project} images={images} onOpen={openItem} />
        )}
      </div>

      <Lightbox
        items={lightboxItems}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </article>
  );
}

function PlannerStory({ project, images, onOpen }) {
  const { caseStudy = {}, roleContent = {}, qaCases = [] } = project;
  const flow = getViewFlow(project, 'planner');
  const work = roleContent.planner?.points || [];
  const qaPoints = roleContent.qa?.points || [];
  const lines = (key) => getStoryLines(project, 'planner', key);

  return (
    <>
      {caseStudy.problem && (
        <Scene num="01" label="PROBLEM" lines={lines('problem')} note={caseStudy.problem} />
      )}
      {caseStudy.planning && (
        <Scene num="02" label="APPROACH" lines={lines('approach')} note={caseStudy.planning} />
      )}
      {(flow.length > 0 || images.flow.length > 0) && (
        <Scene num="03" label="USER FLOW" lines={lines('flow')} variant="flow">
          {flow.length > 0 && <FlowTrack steps={flow} />}
          <ShotStage items={images.flow} onOpen={onOpen} layout="line" />
        </Scene>
      )}
      <Scene num="04" label="PRODUCT" lines={lines('product')} variant="visual">
        {images.ui.length > 0 ? (
          <ShotStage items={images.ui} onOpen={onOpen} layout="stack" />
        ) : (
          <ThemePlaceholder theme={project.theme} title={getDisplayTitle(project)} />
        )}
      </Scene>
      {work.length > 0 && (
        <Scene num="05" label="MY WORK" lines={lines('work')}>
          <WorkLines points={work} />
        </Scene>
      )}
      {(qaCases.length > 0 || caseStudy.improvements || qaPoints.length > 0) && (
        <Scene num="06" label="QA" lines={lines('qa')} note={caseStudy.qa || caseStudy.improvements}>
          <QaCasesBlock qaCases={qaCases} />
          <ShotStage items={images.beforeAfter} onOpen={onOpen} layout="compare" />
        </Scene>
      )}
      {caseStudy.result && (
        <Scene num="07" label="RESULT" lines={lines('result')} note={caseStudy.result} variant="result">
          <ShotStage items={images.ui.slice(-1)} onOpen={onOpen} layout="bleed" />
        </Scene>
      )}
    </>
  );
}

function DeveloperStory({ project, images, onOpen }) {
  const { caseStudy = {}, roleContent = {}, qaCases = [] } = project;
  const flow = getViewFlow(project, 'developer');
  const work = roleContent.developer?.points || [];
  const qaPoints = roleContent.qa?.points || [];
  const techUse = getViewMeta(project).techUse || [];
  const isStockMate = project.slug === 'stockmate';
  const lines = (key) => getStoryLines(project, 'developer', key);

  return (
    <>
      {(caseStudy.overview || caseStudy.development) && (
        <Scene num="01" label="GOAL" lines={lines('goal')} note={caseStudy.overview || caseStudy.development} />
      )}
      {(caseStudy.architecture || flow.length > 0 || images.architecture.length > 0) && (
        <Scene num="02" label="ARCHITECTURE" lines={lines('architecture')} note={caseStudy.architecture} variant="arch">
          {flow.length > 0 && <ArchMap steps={flow} />}
          <ShotStage items={images.architecture} onOpen={onOpen} layout="bleed" />
        </Scene>
      )}
      {work.length > 0 && (
        <Scene num="03" label="IMPLEMENTATION" lines={lines('implementation')} variant="code">
          <WorkLines points={work} tone="code" />
          <ShotStage items={images.ui} onOpen={onOpen} layout="float" />
        </Scene>
      )}
      {techUse.length > 0 && (
        <Scene num="04" label="DATA / API" lines={lines('data')} variant="data">
          <div className="data-map">
            {techUse.map(([name, used]) => (
              <div key={name} className="data-node">
                <strong>{name}</strong>
                <span>{used}</span>
              </div>
            ))}
          </div>
        </Scene>
      )}
      {(qaCases.length > 0 || isStockMate || qaPoints.length > 0) && (
        <Scene num="05" label="PROBLEM SOLVING" lines={lines('solving')} variant="code">
          {isStockMate
            ? STOCKMATE_TROUBLESHOOTING.map((item, i) => (
                <article className="issue" key={item.title}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.result}</p>
                </article>
              ))
            : <QaCasesBlock qaCases={qaCases} />}
        </Scene>
      )}
      {caseStudy.result && (
        <Scene num="06" label="RESULT" lines={lines('result')} note={caseStudy.result} variant="result" />
      )}
    </>
  );
}

function Scene({ num, label, lines, note, variant, children }) {
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

function clip(text, max = 180) {
  const one = String(text).replace(/\s+/g, ' ').trim();
  if (one.length <= max) return one;
  const cut = one.slice(0, max);
  const mark = Math.max(cut.lastIndexOf('다.'), cut.lastIndexOf('. '));
  return mark > 40 ? one.slice(0, mark + 1) : `${cut.trim()}…`;
}

function WorkLines({ points, tone = 'plain' }) {
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

function FlowTrack({ steps }) {
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

function ArchMap({ steps }) {
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

function CoverVisual({ project, item, onOpen }) {
  if (!item) {
    return <ThemePlaceholder theme={project.theme} title={getDisplayTitle(project)} />;
  }
  return (
    <button type="button" className="shot shot--cover" onClick={() => onOpen(item)} aria-label={`${item.title || project.title} 이미지 확대`}>
      <ProjectCover src={item.src} title={item.title || project.title} />
    </button>
  );
}

function ShotStage({ items, onOpen, layout }) {
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
