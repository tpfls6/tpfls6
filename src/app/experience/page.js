import Link from 'next/link';
import ExperienceTables from '@/components/profile/ExperienceTables';
import { awards, publications } from '@/data/history';
import { certificates } from '@/data/certificates';
import { techStackGroups } from '@/data/site';

const contexts = {
  Frontend: '화면 구현과 사용자 인터랙션',
  Backend: '서비스 로직과 API 개발',
  Database: '데이터 구조 설계와 저장·조회',
  Infrastructure: '협업·배포와 API 문서화·검증',
  Product: '요구사항 정리, UX 설계와 프로젝트 운영',
};

const capabilities = [
  ['문제 분석', '복잡한 문제를 원인과 흐름으로 나누고, 핵심과 우선순위를 정리합니다.'],
  ['해결 방법 탐색', '요구와 현장에 맞는 방법을 비교해, 실제 기능과 화면으로 구체화합니다.'],
  ['QA·개선', '화면·API·데이터 연동을 점검하고, 원인 분석부터 수정·재검증까지 이어갑니다.'],
  ['협업·일정 관리', 'GitHub와 Notion으로 일정을 관리하고, 역할 분담과 의견 조율을 이끕니다.'],
];

export const metadata = { title: 'Experience · SERIN PARK' };

export default function ExperiencePage() {
  return (
    <main className="page page--experience-overview page--portfolio-overview">
      <div className="portfolio-page portfolio-page--intro">
        <header className="portfolio-page-head">
          <p className="portfolio-eyebrow">EXPERIENCE & TOOLKIT</p>
          <h1>이력과 기술</h1>
          <p>프로젝트를 통해 쌓아온 경험과, 아이디어를 구체화하는 도구들.</p>
        </header>
        <section className="core-capabilities" aria-labelledby="capabilities-title">
          <div className="resume-table-heading"><h2 id="capabilities-title">핵심역량</h2></div>
          <ul className="capability-grid">
            {capabilities.map(([title, description], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </section>
        <dl className="experience-metrics">
          {[['수상', awards.length], ['논문·공동저자', publications.length], ['자격증', certificates.length], ['기술·도구 분야', techStackGroups.length]].map(([label, count]) => <div key={label}><dt>{label}</dt><dd>{String(count).padStart(2, '0')}<span>{label === '기술·도구 분야' ? '개 분야' : '건'}</span></dd></div>)}
        </dl>
      </div>
      <ExperienceTables />
      <section className="toolkit-section" aria-labelledby="toolkit-title">
        <div className="portfolio-page">
          <div className="toolkit-head"><div><p className="portfolio-eyebrow">TOOLKIT</p><h2 id="toolkit-title">기술 스택 & 업무 도구</h2></div><p>기술 분야별로 사용해온 도구와 활용 맥락을 정리했습니다.</p></div>
          <div className="toolkit-table-wrap">
            <table className="toolkit-table">
              <caption className="sr-only">분야별 기술 스택 및 업무 도구</caption>
              <thead><tr><th scope="col">분야</th><th scope="col">기술 · 도구</th><th scope="col">활용</th></tr></thead>
              <tbody>{techStackGroups.map((group, index) => <tr key={group.title}><th scope="row"><span className="toolkit-index">0{index + 1}</span>{group.title}</th><td><ul className="toolkit-tags">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></td><td>{contexts[group.title]}</td></tr>)}</tbody>
            </table>
          </div>
          <Link className="portfolio-next" href="/projects"><span>프로젝트에서 활용한 경험 살펴보기</span><strong>프로젝트 갤러리 <span aria-hidden="true">↗</span></strong></Link>
        </div>
      </section>
    </main>
  );
}
