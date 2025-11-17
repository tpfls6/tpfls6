// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <main className="page">
      <section className="section section--hero">
        <div className="container">
          <h2 className="hero-title">안녕하세요, 프론트엔드 개발자 박세린입니다.</h2>
          <p className="hero-text">
            학교 프로젝트와 대외 활동을 통해 웹과 모바일 프론트엔드, 그리고
            서비스 기획까지 경험해왔습니다. 아래 카드에서 프로필, 프로젝트,
            자격증 정보를 각각 확인할 수 있습니다.
          </p>

          <div className="overview-grid">
            <Link href="/profile" className="overview-card">
              <h3 className="overview-title">내 프로필</h3>
              <p className="overview-text">
                자기소개, 강점, GitHub·Notion 링크, 학습/커뮤니케이션/기록/기획 역량을 한눈에 볼 수 있는 페이지입니다.
              </p>
            </Link>

            <Link href="/projects" className="overview-card">
              <h3 className="overview-title">프로젝트</h3>
              <p className="overview-text">
                학교·대외 프로젝트를 정리한 섹션입니다. 한이음 Navis, Expo, EL 동계/미니 프로젝트 등.
              </p>
            </Link>

            <Link href="/certificates" className="overview-card">
              <h3 className="overview-title">자격증 / 이력</h3>
              <p className="overview-text">
                취득한 자격증과 준비 중인 시험, 주요 이력과 수상 경력을 정리한 페이지입니다.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}