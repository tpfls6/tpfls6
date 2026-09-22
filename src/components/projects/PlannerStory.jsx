import QaCasesBlock from '@/components/ui/QaCasesBlock';
import ThemePlaceholder from '@/components/ui/ThemePlaceholder';
import { getDisplayTitle, getStoryLines, getViewFlow } from '@/data/viewMeta';
import { FlowTrack, Scene, ShotStage, WorkLines } from './Scene';

export default function PlannerStory({ project, images, onOpen }) {
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
