'use client';

import { useState } from 'react';
import CaseHero from './CaseHero';
import Lightbox from '@/components/ui/Lightbox';
import ProjectCover from '@/components/ui/ProjectCover';

const shots = [
  { src: '/projects/blanky/schedule.png', title: 'Blanky 일정·할 일 통합 관리' },
  { src: '/projects/blanky/home.png', title: 'Blanky AI 자연어 입력' },
  { src: '/projects/blanky/diary.png', title: 'Blanky 날짜별 일기 기록' },
  { src: '/projects/blanky/reading.png', title: 'Blanky 독서 라이브러리' },
];
const hero = {
  title: 'Blanky',
  headline: 'AI 기반 신규 서비스 기획 및 개인화 UX 설계',
  desc: '일정은 캘린더에, 할 일은 목록에, 생각은 메모에 흩어지는 불편에서 출발했습니다. 자연어로 입력한 내용을 정리하고 일정과 기록을 한 공간에서 관리하는 개인 워크스페이스를 만들어가고 있습니다.',
  facts: [{ label: '상태', value: '개발 진행 중' }, { label: '서비스 형태', value: '개인 일정·기록 관리 웹 서비스' }],
  detailRoleTags: ['문제 정의', '서비스 기획', 'AI 입력 흐름', '개인화 UX', '개발'],
  shots: shots.slice(0, 2),
};
const decisions = [
  { title: '분류보다 입력을 먼저', problem: '기록하기 전에 날짜·시간·분류를 일일이 선택하면 입력 자체가 부담이 됩니다.', solution: '자연어를 먼저 입력하고 날짜·시간·카테고리를 정리하는 흐름을 설계했습니다. 규칙 기반 파서를 우선 사용하고 필요한 경우 AI로 보완하며, 사용자가 결과를 수정할 수 있도록 구성했습니다.' },
  { title: '일정과 기록을 하나의 공간에', problem: '앞으로 할 일과 지난 기록이 다른 도구에 있으면 하루의 맥락을 다시 찾아야 합니다.', solution: '일정·할 일과 Activity·Diary·Reading·Memo를 같은 탐색 구조에 배치했습니다. 일정과 할 일은 공유 상태를 사용하고, 일기는 날짜·검색·즐겨찾기로 다시 찾을 수 있게 했습니다.' },
  { title: '내 방식으로 쓰는 워크스페이스', problem: '사용 목적과 취향이 달라도 정해진 화면만 사용해야 하는 불편이 있습니다.', solution: '카테고리와 개인 캘린더, 테마 선택·제작·미리보기를 통해 사용자가 공간을 구성하도록 설계했습니다. 테마를 확인한 뒤 적용하게 하고 카테고리 색상은 유지해 정보 식별을 돕습니다.' },
];

export default function BlankyCase() {
  const [index, setIndex] = useState(null);
  return (
    <article className="sm-case sm-case--blanky">
      <CaseHero data={hero} tone="blanky" onOpen={(shot) => setIndex(shots.findIndex((item) => item.src === shot.src))} />
      <section className="sm-block">
        <div className="sm-inner">
          <p className="sm-kicker" data-reveal>기획 배경 · 사용자 문제</p>
          <h2 className="sm-title sm-title--wide" data-reveal>기록하는 순간부터,<br />다시 찾는 순간까지 연결합니다.</h2>
          <p className="sm-note" data-reveal>여러 도구를 오가는 번거로움, 반복되는 입력과 분류, 나에게 맞지 않는 고정된 화면을 핵심 문제로 정의했습니다. 먼저 입력·확인·수정·조회가 이어지는 경험을 만들고, 자동화는 사용자가 결과를 확인할 수 있는 범위부터 확장하는 방향입니다.</p>
          <ol className="jw-workflow" data-reveal>
            {['자연어 입력', '분류 결과 확인·수정', '일정·할 일 저장', '일정·기록 조회'].map((step, i) => <li key={step}><span className="sm-pipeline-num">0{i + 1}</span><h3>{step}</h3></li>)}
          </ol>
        </div>
      </section>
      <section className="sm-block sm-core">
        <div className="sm-inner">
          <p className="sm-kicker" data-reveal>문제에서 UX 설계로</p>
          <h2 className="sm-title" data-reveal>기능의 수보다,<br />사용 흐름을 먼저 설계했습니다.</h2>
          <div className="bk-decisions">
            {decisions.map((item, i) => <section className="bk-card" key={item.title} data-reveal><p className="sm-kicker">0{i + 1}</p><h3>{item.title}</h3><p>{item.problem}</p><p>{item.solution}</p></section>)}
          </div>
        </div>
      </section>
      <section className="sm-block">
        <div className="sm-inner">
          <p className="sm-kicker" data-reveal>구현 범위와 다음 단계</p>
          <h2 className="sm-title sm-title--wide" data-reveal>현재 구현과 후속 계획을<br />구분해 발전시키고 있습니다.</h2>
          <div className="bk-status">
            <section className="bk-card" data-reveal>
              <p className="sm-kicker">구현 완료 · 코드 기준</p>
              <h3>입력·관리·개인화의 기본 경험</h3>
              <ul>
                <li>자연어 일정·할 일 입력, 규칙 기반 분류와 AI 보완 호출 경로</li>
                <li>일정·할 일 생성·수정·완료, 공유 상태를 통한 화면 간 반영</li>
                <li>Activity 이력, 일기와 독서·메모 기록 화면</li>
                <li>개인 캘린더·카테고리와 테마 선택·제작·미리보기</li>
                <li>PC 사이드바와 모바일 하단 메뉴·서랍 탐색</li>
              </ul>
              <p>AI 호출과 서버 저장은 Supabase 설정 및 배포가 필요합니다. 미설정 환경에서는 규칙 기반 파서와 사용자별 브라우저 저장을 사용합니다. 운영 환경의 AI 응답 품질과 서버 연동 검증은 별도 과제입니다.</p>
            </section>
            <section className="bk-card" data-reveal>
              <p className="sm-kicker">기획 중 · 후속 검증</p>
              <h3>사용 맥락을 반영하는 자동화</h3>
              <ul>
                <li>사용자 수정 패턴을 반영한 분류 개인화 고도화</li>
                <li>빈 시간 추천과 일정 자동 재배치</li>
                <li>주간 활동 분석과 기록을 활용한 추천</li>
                <li>모바일 앱과 오프라인 캐시</li>
              </ul>
              <p>향후에는 분류 결과 수정 빈도, 입력부터 저장까지의 과정, 기록 재탐색의 어려움을 확인해 개선 우선순위를 정할 계획입니다. 사용성 검증 결과나 추천 성과가 확보된 단계는 아닙니다.</p>
            </section>
          </div>
          <p className="sm-note" data-reveal>이미지는 개발 중인 실제 웹 화면입니다. 기능 범위는 초기 소개 문서가 아닌 현재 코드와 구현 문서를 기준으로 정리했습니다.</p>
          <div className="bk-gallery">
            {shots.slice(2).map((shot) => (
              <figure key={shot.src} data-reveal>
                <button type="button" className="bk-screen" onClick={() => setIndex(shots.indexOf(shot))} aria-label={`${shot.title} 확대`}>
                  <ProjectCover src={shot.src} title={shot.title} alt={shot.title} />
                </button>
                <figcaption>{shot.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <Lightbox items={shots} index={index} onClose={() => setIndex(null)} onNavigate={setIndex} />
    </article>
  );
}
