// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <main className="page">
      {/* 1. 상단 히어로 영역 */}
      <section className="section section--hero">
        <div className="container">
          <header className="section-header">
            <h2 className="hero-title">
              정리와 기록을 좋아하는 프론트엔드 개발자, 박세린입니다.
            </h2>
            <p className="hero-text">
              학교 프로젝트, 동아리, 대외 활동을 오가며 실제로 돌아가는 서비스를 만드는 경험을 쌓아왔습니다.
              기획부터 화면 설계, UI 개발, 협업 문서 정리까지 한 흐름으로 가져가는 일을 좋아합니다.
            </p>
          </header>

          {/* 강점 한 줄 요약 (pill 형태) */}
          <div className="project-tech-list" style={{ marginTop: '0.8rem' }}>
            <span className="chip">정리·구조화에 강함</span>
            <span className="chip">문서·기록 꾸준히 남김</span>
            <span className="chip">프론트엔드 중심 풀스택 경험</span>
            <span className="chip">팀 프로젝트·대회 경험 다수</span>
          </div>
        </div>
      </section>

      {/* 2. 지금의 나 요약 영역 */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <h3 className="section-title">지금의 나를 한 문단으로 소개한다면</h3>
            <p className="section-subtitle">
              React·Next 기반의 웹 프론트엔드를 중심으로, 디자인 툴과 협업 도구를 함께 다루며
              “보이는 것”과 “동작하는 것”을 동시에 맞추는 개발자입니다.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)', gap: '2rem' }}>
            {/* 왼쪽: 자기소개 문단 */}
            <div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginTop: 0 }}>
                학교에서는 팀 프로젝트와 동아리 활동을 통해
                <strong> 프로젝트 관리 도구(PMS)</strong>,
                <strong> 환경 리워드 앱</strong>,
                <strong> EXPO용 게임·웹 서비스</strong> 등을 만들었습니다.
                기획 문서를 정리하고, Figma로 화면을 설계하고, React·Next로 실제 화면을 구현하는 일을 자연스럽게
                연결하는 편입니다.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
                코드만 잘 짜는 것보다, <strong>읽기 쉬운 구조</strong>와
                <strong> 나중에 다시 봐도 이해되는 UI 흐름</strong>을 중요하게 생각합니다.
                그래서 Notion, GitHub 이슈, 회의록 등 “흔적을 남기는 작업”을 꾸준히 하고,
                팀 단위로 일할 때 흐름을 정리하는 역할을 많이 맡아왔습니다.
              </p>
            </div>

            {/* 오른쪽: 간단 요약 정보 */}
            <div className="contact-box">
              <p className="contact-line"><strong>이름</strong> · 박세린</p>
              <p className="contact-line"><strong>관심 분야</strong> · 웹 프론트엔드, UI 개발, 협업 프로세스</p>
              <p className="contact-line">
                <strong>주요 스택</strong> · React, Next.js, TypeScript, Tailwind/MUI, Express, Spring Boot, MySQL
              </p>
              <p className="contact-line">
                <strong>지금 하는 일</strong> · 포트폴리오 정리, 프로젝트 회고, SQLD 등 자격증 준비
              </p>
              <p className="contact-line" style={{ marginTop: '0.8rem' }}>
                더 자세한 프로필은 <Link href="/profile" className="contact-link">프로필 페이지</Link>에서,
                프로젝트 전체 목록은 <Link href="/projects" className="contact-link">프로젝트 페이지</Link>에서 볼 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 하이라이트 섹션: 프로젝트 / 자격증 / 경력으로 이어지는 허브 */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h3 className="section-title">무엇을 해왔는지 한눈에 보기</h3>
            <p className="section-subtitle">
              아래의 블록들은 각각 상세 페이지의 요약 버전입니다.
              흥미가 가는 부분을 눌러 들어가면 더 자세한 내용을 볼 수 있습니다.
            </p>
          </div>

          <div className="overview-grid">
            {/* 프로필 하이라이트 */}
            <Link href="/profile" className="overview-card">
              <h3 className="overview-title">Profile · 나라는 사람</h3>
              <p className="overview-text">
                개발자로서의 방향성, 강점, 가치관을 정리한 페이지입니다.
                함께 일할 때 어떤 스타일인지, 기록과 커뮤니케이션을 어떻게 해왔는지 담았습니다.
              </p>
            </Link>

            {/* 프로젝트 하이라이트 */}
            <Link href="/projects" className="overview-card">
              <h3 className="overview-title">Projects · 내가 만든 것들</h3>
              <p className="overview-text">
                한이음 Navis, EL EXPO, 환경 리워드 앱, EL 동계 프로젝트 등
                학교·동아리·대외 활동에서 진행한 프로젝트를 모아두었습니다.
                역할과 사용 기술, 링크를 함께 정리했습니다.
              </p>
            </Link>

            {/* 자격증 / 이력 하이라이트 */}
            <Link href="/certificates" className="overview-card">
              <h3 className="overview-title">Certificates & History</h3>
              <p className="overview-text">
                ITQ, 전산회계 2급, GTQ 1급 등 지금까지 취득한 자격증과
                준비 중인 SQLD, 활동 이력/수상 내역을 함께 볼 수 있는 섹션입니다.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}