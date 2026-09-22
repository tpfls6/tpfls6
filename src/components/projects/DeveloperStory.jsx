import QaCasesBlock from '@/components/ui/QaCasesBlock';
import { STOCKMATE_TROUBLESHOOTING } from '@/data/stockmate';
import { getStoryLines, getViewFlow, getViewMeta } from '@/data/viewMeta';
import { ArchMap, Scene, ShotStage, WorkLines } from './Scene';

export default function DeveloperStory({ project, images, onOpen }) {
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
