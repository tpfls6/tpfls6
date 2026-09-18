'use client';

import { useMemo, useRef, useState } from 'react';
import ProjectCover from './ProjectCover';
import Lightbox from './Lightbox';
import QaCasesBlock from './QaCasesBlock';
import ProjectScreens from './ProjectScreens';
import { useRole } from './RoleProvider';

const TABS = [
  { key: 'overview', label: 'Overview' },
  { key: 'features', label: 'Features' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'role', label: 'My Role' },
  { key: 'troubleshooting', label: 'Troubleshooting' },
  { key: 'result', label: 'Result / Retrospective' },
];

const ROLE_LABELS = {
  developer: 'Development',
  planner: 'Planning',
  pm: 'PM',
  qa: 'QA',
};

const FLOW_STEPS = [
  ['Frontend', ['React', 'TypeScript', 'JavaScript', 'React Native', 'PySide6', 'PyQt/PySide', 'MUI']],
  ['Backend', ['NestJS', 'Spring Boot', 'Express', 'FastAPI', 'REST API', 'JWT', 'Spring Security']],
  ['DB', ['MySQL', 'Redis', 'Local DB', 'Supabase', 'JPA']],
  ['External API', ['OpenAI API', 'KRX', '키움증권', 'DART', 'Ollama', 'LLM']],
];

const sentence = (text = '') => text.split(/[.!?。]/)[0] || text;

const STOCKMATE_OVERVIEW = [
  {
    title: '무슨 프로젝트?',
    headline: '주식 초보자를 위한 AI 기반 투자 학습·모의투자 플랫폼',
    desc: '투자 개념 학습부터 AI 분석, 모의투자까지 하나의 흐름으로 경험할 수 있도록 설계한 서비스입니다.',
  },
  {
    title: '왜 만들었나?',
    headline: '학습과 실제 투자 경험 사이의 간극을 줄이기 위해 시작했습니다.',
    desc: '투자 초보자가 개념을 공부한 뒤 이를 실제 투자 상황에 어떻게 적용해야 하는지 연습할 수 있는 환경을 만들고자 했습니다.',
  },
  {
    title: '핵심 구현',
    headline: '학습 → 분석 → 투자로 이어지는 사용자 흐름을 구현했습니다.',
    desc: 'React·TypeScript 기반 Frontend와 NestJS·MySQL·Redis 기반 Backend를 연결하고 AI 분석과 모의투자 기능을 통합했습니다.',
  },
  {
    title: '현재 결과',
    headline: '기능 중심의 프로토타입에서 하나의 서비스 흐름을 가진 플랫폼으로 발전시키고 있습니다.',
    desc: '베타테스트와 QA를 반복하며 회원, 학습, AI, 모의투자 등 주요 기능을 실제 사용자 흐름 기준으로 개선하고 있습니다.',
  },
];

const STOCKMATE_FEATURES = [
  ['회원 / Authentication', '사용자 계정과 인증 흐름을 관리합니다.', ['일반 회원가입', '로그인 / 로그아웃', '이메일 인증', 'Google 로그인', '회원 정보 관리', '회원 탈퇴']],
  ['투자 학습 / Learning', '투자 초보자가 단계적으로 개념을 학습할 수 있도록 구성했습니다.', ['초급 / 중급 / 고급 단계별 학습', '개인별 맞춤 학습', '투자 개념 학습', '카테고리별 학습', '개인별 학습 진행도 관리', '퀴즈', '학습 결과 확인']],
  ['종목 / Stock', '투자 판단에 필요한 종목 정보를 탐색할 수 있습니다.', ['종목 검색', '종목 상세 정보', '주가 데이터 조회', '실시간 종목 정보', '관심 종목 관리']],
  ['AI', '사용자가 투자 개념과 종목 정보를 쉽게 이해할 수 있도록 AI 기능을 제공합니다.', ['AI 채팅', '투자 학습 지원', 'AI 질문 생성', '종목 분석', '대화 기록 관리']],
  ['모의투자 / Simulation', '실제 자산을 사용하지 않고 투자 흐름을 연습할 수 있습니다.', ['가상 투자 계좌', '매수 / 매도', '보유 종목', '거래 내역', '투자 수익률', '자산 현황']],
  ['랭킹 · 커뮤니티', '투자 결과를 확인하고 다른 사용자와 경험을 공유할 수 있습니다.', ['투자 성과 기반 랭킹', '시즌 기반 랭킹', '사용자 커뮤니티', '투자 관련 정보 공유']],
];

const STOCKMATE_ROLES = [
  ['Frontend', '주요 화면 구현과 Backend API 연동을 담당했습니다.', ['React / TypeScript 기반 주요 화면 구현', '공통 UI Component 구현', 'REST API 연동', 'API Response 기반 화면 상태 처리', '사용자 입력 및 상태 관리', 'Error / Loading / Empty State 처리', 'UI/UX 개선', 'Frontend 오류 분석 및 수정']],
  ['Planning / PM', '서비스 기능 정의부터 사용자 흐름과 팀 일정까지 전체 프로젝트 흐름을 관리했습니다.', ['서비스 주요 기능 정의', '사용자 흐름 설계', '기능 우선순위 관리', 'Figma 화면 설계', '팀원 역할 분담', '일정 및 진행 상황 관리', '회의 진행 및 회의록 작성', '개발 범위 조정', '팀원 간 의견 조율']],
  ['Backend', '일부 Backend 기능 구현과 Frontend 연동 과정의 데이터 흐름을 확인했습니다.', ['User CRUD 및 회원 상태 처리', '모의투자 / 주식 데이터 기능 구현', '커뮤니티 / 랭킹 / 뉴스 기능 구현', '알림 기능 및 Notification 연동', 'REST API 및 DB 데이터 흐름 검증', '인증 / API 오류 분석 및 수정', 'Swagger 기반 API 테스트', 'Frontend와 Backend 데이터 Type 검증']],
  ['QA', '단순 정상 동작 확인이 아니라 실제 사용 상황을 가정한 통합 QA를 진행했습니다.', ['회원가입 / 로그인 / 로그아웃', 'Google 로그인', '회원 탈퇴 / 재가입', '권한 없는 API 요청', '사용자 상태별 화면 검증', 'API Response와 UI 데이터 비교', '학습 / 퀴즈 / 관심 종목 검증', 'AI API 오류 검증', '모의투자 데이터 검증', '정상 / 예외 / 반복 사용 Case 설계']],
];

const STOCKMATE_TROUBLESHOOTING = [
  {
    title: '회원 탈퇴 후 재가입 데이터 문제',
    problem: '회원 탈퇴 후 동일한 이메일로 재가입하거나 Google 로그인을 시도할 때 이전 계정의 닉네임과 전화번호가 남을 가능성이 있었습니다.',
    cause: '기존 탈퇴 로직에서는 사용자 상태만 DELETED로 변경하고 이메일, 닉네임 등 식별 정보가 그대로 남아 있었습니다.',
    solution: ['탈퇴 시 이메일과 닉네임을 deleted-* 형태로 변경', '기존 개인정보 식별값 해제', 'Legacy DELETED 사용자 처리', '일반 재가입 시 새로운 사용자 정보 적용', 'Google 로그인 시 탈퇴 사용자 처리 검토', '일반 로그인에서 status / ban_until 검증', '닉네임 중복 확인 로직 수정'],
    result: '일반 가입 → 로그인 → 탈퇴 → 재가입 → Google 로그인까지 전체 흐름을 다시 QA하여 계정 상태에 따라 올바르게 동작하도록 개선했습니다.',
  },
  {
    title: 'Frontend와 Backend 통합 과정의 API 오류',
    problem: '서비스 통합 과정에서 401, 404, 500 Error와 Frontend / Backend Type 불일치 문제가 반복적으로 발생했습니다.',
    cause: '요청 URL, 인증 헤더, Request Body, Controller, Service Logic, Response Type 중 어느 한 지점만 봐서는 원인 분리가 어려웠습니다.',
    solution: ['Frontend 요청 URL', 'HTTP Method', 'Authorization Header', 'Request Body', 'Backend Controller', 'Service Logic', '실제 API Response', 'Frontend Type', 'Rendering 결과', '수정 후 전체 사용자 흐름 재검증'],
    result: '요청부터 렌더링까지 단계적으로 확인하는 디버깅 방식을 정립했습니다.',
  },
  {
    title: '많은 기능을 하나의 사용자 흐름으로 연결',
    problem: '회원, 학습, 종목, AI, 모의투자, 랭킹, 커뮤니티 등 여러 기능이 개별적으로 동작하면 하나의 서비스처럼 느껴지기 어려웠습니다.',
    cause: '기능 단위 구현은 충분했지만 사용자가 다음 행동으로 이동하는 경로와 화면 간 연결성이 약했습니다.',
    solution: ['사용자 시나리오 정리', '화면 흐름 재검토', '기능 간 이동 경로 정리', '기능 우선순위 설정', '데이터 전달 구조 확인', 'QA 결과 기반 UI 개선', '학습 → 종목 → AI → 모의투자 흐름 연결'],
    result: '개별 기능 중심의 구조에서 하나의 서비스 안에서 자연스럽게 다음 행동으로 이동할 수 있는 구조로 개선했습니다.',
  },
];

const STOCKMATE_RETROSPECTIVE =
  'StockMate를 개발하면서 여러 기능을 하나의 서비스 안에 자연스럽게 연결하기 위해서는 단순히 기능을 구현하는 것뿐만 아니라 전체 사용자 흐름과 각 기능 간의 조화를 함께 고민해야 한다는 점을 배웠습니다.\n\n특히 사용자가 조금이라도 더 편리하게 서비스를 이용할 수 있도록 화면 구성과 기능 이동 흐름을 사용자 관점에서 계속 검토하면서 UX의 중요성을 크게 느꼈습니다.\n\n또한 팀장으로서 역할 분담, 일정 관리, 회의록과 보고서 작성, QA 결과 정리 등을 담당하면서 개발 역량뿐만 아니라 팀원 간의 정보를 정리하고 프로젝트 전체 진행 상황을 파악하는 능력도 서비스 완성도에 큰 영향을 준다는 것을 경험했습니다.\n\n프로젝트를 처음 설계할 때는 이전 프로젝트에서 경험했던 시행착오를 반복하지 않기 위해 가능한 여러 상황과 예외 케이스를 미리 생각하며 기능을 정리하려고 했습니다.\n\n예상보다 많은 경우의 수를 고려해야 해 어려움도 있었지만, 그 과정을 통해 실제 사용자 관점에서 발생할 수 있는 문제를 조금 더 꼼꼼하게 바라볼 수 있게 되었습니다.';

const STOCKMATE_ROLE_TAGS = {
  Planning: ['Service Flow', 'Feature Planning', 'Figma', 'Schedule'],
  Frontend: ['Dashboard', 'Learning', 'Stock', 'Simulation', 'Community'],
  Backend: ['User', 'Simulation', 'Community', 'Ranking', 'News', 'Notification'],
  QA: ['Authentication', 'API', 'Edge Case', 'Integration Test'],
  AI: ['Analysis', 'Question', 'Integration'],
};

export default function CaseStudyBody({ project }) {
  const { role } = useRole();
  const [activeTab, setActiveTab] = useState('overview');
  const [activeIndex, setActiveIndex] = useState(null);
  const tabRefs = useRef({});
  const { caseStudy = {}, media = [], qaCases = [], roleContent = {}, techStack = [], cover, title, tagline } = project;
  const isStockMate = project.slug === 'stockmate';

  const screens = useMemo(() => media.filter((m) => m.section !== 'architecture'), [media]);
  const architectureMedia = useMemo(() => media.filter((m) => m.section === 'architecture'), [media]);
  const displayScreens = screens.length ? screens : cover ? [{ src: cover, title, description: tagline }] : [];
  const lightboxItems = media.length ? media : displayScreens;
  const featureItems = screens.length
    ? screens
    : (roleContent.developer?.points || []).map((point, index) => ({ title: `Feature ${index + 1}`, description: point }));
  const currentRole = roleContent[role];

  const openItem = (item) => {
    const idx = lightboxItems.findIndex((entry) => entry === item || entry.src === item.src);
    setActiveIndex(idx >= 0 ? idx : null);
  };

  const stackRows = FLOW_STEPS.map(([label, keywords]) => ({
    label,
    items: techStack.filter((tech) => keywords.some((keyword) => tech.includes(keyword))),
  })).filter((row) => row.items.length);

  const stockMateScreens = [
    { src: imgPath('invest-dashboard.png'), title: 'Dashboard', description: '투자 현황, 학습 상태, 관심 종목을 한눈에 확인하는 메인 화면' },
    { src: imgPath('learning-overview.png'), title: 'Learning', description: '투자 개념을 단계별로 학습하고 퀴즈로 이해도를 확인하는 화면' },
    { src: imgPath('stock-detail.png'), title: 'Stock Detail', description: '종목 정보와 가격 데이터를 확인하고 AI 분석으로 이어지는 화면' },
    { src: imgPath('invest-dashboard.png'), title: 'Simulation', description: '가상 자금을 이용해 매수·매도와 투자 결과를 경험하는 화면' },
    { src: imgPath('learning-personalized.png'), title: 'AI Learning & Analysis', description: '투자 개념이나 종목에 대해 AI의 도움을 받을 수 있는 화면' },
  ];

  function imgPath(file) {
    return `/projects/${project.slug}/${file}`;
  }

  const stockMateContent = {
    overview: (
      <div className="stockmate-section">
        <SectionKicker num="01" label="Overview" title="Project at a glance" />
        <section className="stockmate-dashboard">
          <div className="stockmate-dashboard-main">
            <span className="stockmate-status">IN PROGRESS</span>
            <h2>StockMate</h2>
            <strong>AI Investment Learning Platform</strong>
            <p>학습부터 AI 분석, 모의투자까지 하나의 투자 경험으로 연결했습니다.</p>
          </div>
          <div className="stockmate-metrics">
            {[
              ['TEAM', '03'],
              ['PERIOD', '2026.03 - 2026.11'],
              ['ROLE', 'Frontend Main'],
              ['POSITION', 'Team Lead'],
            ].map(([label, value]) => (
              <div className="stockmate-metric" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="stockmate-overview-notes">
            {STOCKMATE_OVERVIEW.map((item) => (
              <article key={item.title}>
                <span>{item.title}</span>
                <strong>{item.headline}</strong>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="case-visual-block">
          <div className="section-copy">
            <h2>StockMate User Flow</h2>
            <p>학습한 투자 개념을 실제 투자 판단과 모의투자로 이어갈 수 있도록 전체 사용자 흐름을 연결했습니다.</p>
          </div>
          <FlowLine steps={['01 LEARN|투자 개념 학습', '02 QUIZ|이해도 확인', '03 EXPLORE|종목 탐색', '04 ANALYZE|AI 분석', '05 INVEST|모의투자', '06 REVIEW|수익률 및 결과 확인']} />
        </section>
      </div>
    ),
    features: (
      <div className="stockmate-section">
        <SectionKicker num="02" label="Features" title="What StockMate provides" />
        <div className="stockmate-bento">
          {STOCKMATE_FEATURES.map(([title, desc, points]) => (
            <FeatureCard key={title} title={title} desc={desc} points={points.slice(0, title.includes('학습') || title.includes('Simulation') ? 4 : 3)} />
          ))}
        </div>
        <ProjectScreens items={stockMateScreens} onOpen={openItem} />
      </div>
    ),
    architecture: (
      <div className="stockmate-section">
        <SectionKicker num="03" label="Architecture" title="How it works" />
        <section className="case-visual-block">
          <div className="section-copy">
            <h2>System Architecture</h2>
            <p>Frontend, Backend, Database, 배포 환경을 분리하여 서비스 구조를 구성했습니다.</p>
          </div>
          <div className="system-map">
            <SystemNode title="Frontend" items={['React', 'TypeScript']} />
            <span className="system-link">REST API</span>
            <SystemNode title="Backend" items={['NestJS']} />
            <span className="system-link">Data Layer</span>
            <SystemNode title="Database" items={['MySQL', 'Redis']} />
          </div>
        </section>
        <div className="deploy-grid stockmate-deploy">
          {[
            ['Frontend', ['React / TypeScript', 'Vercel']],
            ['Backend', ['NestJS', 'Docker → AWS EC2']],
            ['Database', ['MySQL', 'Redis']],
          ].map(([title, items]) => (
            <article className="case-info-card deploy-card" key={title}>
              <span>{title}</span>
              <strong>{items[0]}</strong>
              <p>{items.slice(1).join(' · ')}</p>
            </article>
          ))}
        </div>
        <TechTable />
      </div>
    ),
    role: (
      <div className="stockmate-section">
        <SectionKicker num="04" label="My Role" title="What I contributed" />
        <section className="role-hero">
          <strong>Team Lead · Frontend Main · Planning · QA · Backend Partial</strong>
          <p>StockMate에서는 팀장으로 프로젝트 전체 진행을 관리하면서 Frontend를 중심으로 개발하고, 기획·QA·Backend 일부까지 담당했습니다.</p>
        </section>
        <div className="contribution-map">
          <div className="contribution-center">STOCKMATE</div>
          {[
            ['Planning', 'MAIN'],
            ['Frontend', 'MAIN'],
            ['Backend', 'PARTIAL'],
            ['QA', 'MAIN'],
            ['AI', 'INTEGRATION'],
          ].map(([title, level]) => (
            <article className="contribution-node" key={title}>
              <div>
                <span>{title}</span>
                <strong>{level}</strong>
              </div>
              <ul>
                {STOCKMATE_ROLE_TAGS[title].map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="case-feature-grid">
          {STOCKMATE_ROLES.map(([title, desc, points]) => (
            <FeatureCard key={title} title={title} desc={desc} points={points.slice(0, 5)} />
          ))}
        </div>
      </div>
    ),
    troubleshooting: (
      <div className="qa-cases">
        <SectionKicker num="05" label="Troubleshooting" title="Problems I solved" />
        {STOCKMATE_TROUBLESHOOTING.map((item, index) => (
          <article className="qa-case troubleshooting-card issue-log" key={item.title}>
            <div className="issue-log-head">
              <span>ISSUE {String(index + 1).padStart(2, '0')}</span>
              <strong>RESOLVED</strong>
            </div>
            <h2>{item.title}</h2>
            <p>{item.problem}</p>
            <details>
              <summary>자세히 보기</summary>
              <QaFlow item={item} />
            </details>
          </article>
        ))}
      </div>
    ),
    result: (
      <div className="stockmate-section">
        <SectionKicker num="06" label="Result" title="What I learned" />
        <div className="result-grid">
          {[
            ['03', 'TEAM MEMBERS'],
            ['09+', 'MONTHS'],
            ['FRONTEND', 'MAIN ROLE'],
            ['06+', 'BACKEND DOMAINS'],
          ].map(([value, label]) => (
            <article className="result-card" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
        <section className="case-visual-block">
          <div>
            <h2>What I Learned</h2>
          </div>
          <div className="learned-grid">
            {[
              ['01', '기능보다 서비스 흐름', '각 기능을 개별적으로 구현하는 것보다 사용자가 하나의 서비스 안에서 자연스럽게 다음 행동으로 이어질 수 있도록 연결하는 것이 중요하다는 것을 배웠습니다.'],
              ['02', '통합 QA의 중요성', 'Frontend와 Backend가 각각 정상적으로 동작하더라도 실제 사용자 흐름에서는 새로운 문제가 발생할 수 있다는 것을 경험했습니다.'],
              ['03', '팀 리딩과 협업', '일정 관리, 역할 분담, QA, 문서화, 의견 조율이 서비스 완성도에 큰 영향을 준다는 것을 배웠습니다.'],
            ].map(([num, title, desc]) => (
              <article className="case-info-card learned-card" key={num}>
                <span>{num}</span>
                <strong>{title}</strong>
                <p>{desc}</p>
              </article>
            ))}
          </div>
          <details className="retrospective-detail">
            <summary>상세 회고 보기</summary>
            {STOCKMATE_RETROSPECTIVE.split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </details>
        </section>
      </div>
    ),
  };

  const tabContent = isStockMate ? stockMateContent : {
    overview: (
      <div className="case-tab-grid">
        {[
          ['무슨 프로젝트?', caseStudy.overview],
          ['왜 만들었나?', caseStudy.problem],
          ['핵심 구현', caseStudy.development || caseStudy.planning],
          ['현재 결과', caseStudy.result],
        ]
          .filter(([, text]) => text)
          .map(([title, text]) => (
            <article className="case-info-card" key={title}>
              <span>{title}</span>
              <p>{sentence(text)}</p>
              <details>
                <summary>자세히 보기</summary>
                <p>{text}</p>
              </details>
            </article>
          ))}
      </div>
    ),
    features: (
      <div className="case-feature-grid">
        {featureItems.map((item) => (
          <article className="case-feature-card" key={item.src || item.description}>
            <strong>{item.title}</strong>
            <p>{item.description || item.title}</p>
          </article>
        ))}
      </div>
    ),
    architecture: (
      <div className="case-stack">
        {caseStudy.architecture && <p className="case-tab-lead">{caseStudy.architecture}</p>}
        <div className="case-flow">
          {FLOW_STEPS.map(([label], index) => (
            <div className="case-flow-step" key={label}>
              <span>{label}</span>
              {index < FLOW_STEPS.length - 1 && <b>→</b>}
            </div>
          ))}
        </div>
        {stackRows.length > 0 && (
          <table className="case-table">
            <tbody>
              {stackRows.map((row) => (
                <tr key={row.label}>
                  <th>{row.label}</th>
                  <td>{row.items.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {architectureMedia.length > 0 && (
          <div className="architecture-scroll">
            {architectureMedia.map((item) => (
              <button type="button" key={item.src} className="architecture-frame" onClick={() => openItem(item)}>
                <ProjectCover src={item.src} title={item.title} />
                {item.title && <span className="architecture-caption">{item.title}</span>}
              </button>
            ))}
          </div>
        )}
      </div>
    ),
    role: (
      <div className="case-role-list">
        {Object.entries(roleContent).map(([key, content]) => (
          <article className={`case-role-card ${key === role ? 'is-active' : ''}`} key={key}>
            <span>{ROLE_LABELS[key] || key}</span>
            <p>{content.summary}</p>
            <strong>{key === role ? '주도' : '참여'}</strong>
          </article>
        ))}
        {currentRole?.points?.length > 0 && (
          <table className="case-table">
            <thead>
              <tr>
                <th>분야</th>
                <th>담당 내용</th>
                <th>기여도</th>
              </tr>
            </thead>
            <tbody>
              {currentRole.points.map((point) => (
                <tr key={point}>
                  <td>{ROLE_LABELS[role] || 'Role'}</td>
                  <td>{point}</td>
                  <td>주도</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    ),
    troubleshooting: qaCases.length ? (
      <QaCasesBlock qaCases={qaCases} />
    ) : (
      <p className="case-empty">정리된 트러블슈팅 사례는 준비 중입니다.</p>
    ),
    result: (
      <div className="case-tab-grid">
        {[
          ['Result', caseStudy.result],
          ['Retrospective', caseStudy.learned],
          ['Improvement', caseStudy.improvements],
        ]
          .filter(([, text]) => text)
          .map(([title, text]) => (
            <article className="case-info-card" key={title}>
              <span>{title}</span>
              <p>{sentence(text)}</p>
              <details>
                <summary>자세히 보기</summary>
                <p>{text}</p>
              </details>
            </article>
          ))}
      </div>
    ),
  };

  return (
    <div className="case-body">
      {!isStockMate && (
        <section className="case-summary" data-reveal>
          <p>{caseStudy.overview}</p>
          {currentRole?.summary && <strong>{currentRole.summary}</strong>}
        </section>
      )}

      {!isStockMate && displayScreens.length > 0 && (
        <section className="case-screens" data-reveal>
          <ProjectScreens items={displayScreens} onOpen={openItem} />
        </section>
      )}

      <section className="case-tabs" data-reveal>
        <div className="case-tab-list" role="tablist" aria-label="프로젝트 상세 정보">
          {TABS.map((tab) => (
            <button
              type="button"
              key={tab.key}
              ref={(node) => {
                tabRefs.current[tab.key] = node;
              }}
              className={activeTab === tab.key ? 'is-active' : ''}
              onClick={() => {
                setActiveTab(tab.key);
                tabRefs.current[tab.key]?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
              }}
              role="tab"
              aria-selected={activeTab === tab.key}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="case-tab-panel" role="tabpanel">
          {tabContent[activeTab]}
        </div>
      </section>

      <Lightbox items={lightboxItems} index={activeIndex} onClose={() => setActiveIndex(null)} onNavigate={setActiveIndex} />
    </div>
  );
}

function FeatureCard({ title, desc, points }) {
  return (
    <article className="case-feature-card">
      <strong>{title}</strong>
      <p>{desc}</p>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

function SectionKicker({ num, label, title }) {
  return (
    <div className="case-section-kicker">
      <span>{num} / {label}</span>
      <h2>{title}</h2>
    </div>
  );
}

function SystemNode({ title, items }) {
  return (
    <div className="system-node">
      <span>{title}</span>
      <strong>{items.join(' / ')}</strong>
    </div>
  );
}

function FlowLine({ steps, vertical = false }) {
  return (
    <div className={`flow-line ${vertical ? 'flow-line--vertical' : ''}`}>
      {steps.map((step, index) => (
        <div className="flow-node-wrap" key={step}>
          <span className="flow-node">
            {step.split('|').map((line) => (
              <i key={line}>{line}</i>
            ))}
          </span>
          {index < steps.length - 1 && <b>{vertical ? '↓' : '→'}</b>}
        </div>
      ))}
    </div>
  );
}

function TechTable() {
  const rows = [
    ['Frontend', 'React, TypeScript, Axios'],
    ['Backend', 'NestJS, REST API, Swagger'],
    ['Database', 'MySQL, Redis'],
    ['Infrastructure', 'AWS EC2, Vercel, Docker'],
    ['Collaboration', 'Git, GitHub, Notion, Figma, Swagger, Postman, Discord, KakaoTalk'],
  ];

  return (
    <table className="case-table">
      <tbody>
        {rows.map(([label, items]) => (
          <tr key={label}>
            <th>{label}</th>
            <td>{items}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function QaFlow({ item }) {
  const rows = [
    ['Problem', item.problem],
    ['Cause', item.cause],
    ['Solution', item.solution],
    ['Result', item.result],
  ];

  return (
    <div className="qa-case-flow">
      {rows.map(([label, value], index) => (
        <div className="qa-case-step" key={label}>
          <span className="qa-case-label">{label}</span>
          {Array.isArray(value) ? (
            <ul>
              {value.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="qa-case-text">{value}</p>
          )}
          {index < rows.length - 1 && <span className="qa-case-arrow">↓</span>}
        </div>
      ))}
    </div>
  );
}
