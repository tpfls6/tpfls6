// app/profile/page.js
import { FiLayers, FiZap, FiUsers, FiFlag } from "react-icons/fi";

export default function ProfilePage() {
  const profile = {
    name: "박세린",
    email: "dlfksmfqwr@naver.com",
    phone: "010-2388-7425",
    address: "서울 구로구",
    github: "https://github.com/tpfls6",
    blog: "https://tpflss.tistory.com/",
    notion: "",
  };

  // 강점: 아이콘은 키워드 앞 글자 (S/L/T/O)
  const abilities = [
    {
      title: "구조화·정리 능력",
      icon: <FiLayers />,
      description:
        "노션, PPT, 코드 주석 등을 활용해 개념·오류·프로젝트 흐름을 체계적으로 정리합니다.",
    },
    {
      title: "빠른 흡수력과 학습 지속력",
      icon: <FiZap />,
      description:
        "React, Next, AWS 등 새로운 기술을 빠르게 익히고 프로젝트에 바로 적용합니다.",
    },
    {
      title: "협업 커뮤니케이션",
      icon: <FiUsers />,
      description:
        "요구사항 정리, 회의 내용 정리, 질문 정리 등을 통해 팀이 같은 방향을 보도록 돕습니다.",
    },
    {
      title: "끝까지 밀고 가는 실행력",
      icon: <FiFlag />,
      description:
        "대회, 동아리, 수업 프로젝트를 동시에 진행하며 결과물을 끝까지 완성합니다.",
    },
  ];

  // 스킬 퍼센트 바 (주로 써온 언어/스택)
  const skills = [
    { name: "JavaScript / TypeScript", level: 80 },
    { name: "React / Next.js", level: 78 },
    { name: "SQL (MySQL)", level: 70 },
    { name: "Java (Spring 기초)", level: 60 },
    { name: "Python / 데이터 처리", level: 55 },
  ];

  return (
    <main className="page">
      <section className="section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">내 프로필</h2>
            <p className="section-subtitle">
              기본 정보와 개발자로서의 강점, 그리고 사용하는 기술 스택을 정리한
              페이지입니다.
            </p>
            <p className="profile-intro">
              프로젝트를 끝까지 밀어붙이는 실행력과, 정리·문서화를 좋아하는
              타입의 프론트엔드 개발자입니다. 새로운 기술을 빠르게 익혀서 실제
              서비스에 적용해 보는 경험을 계속 쌓고 있습니다.
            </p>
          </header>

          <div className="profile-layout">
            {/* 왼쪽: 사진 + 기본 정보 */}
            <div className="profile-left">
              <div className="profile-photo-box">
                <span className="profile-photo-text">Photo</span>
              </div>

              <dl className="profile-info">
                <div className="profile-info-row">
                  <dt>이름</dt>
                  <dd>{profile.name}</dd>
                </div>
                <div className="profile-info-row">
                  <dt>이메일</dt>
                  <dd>{profile.email}</dd>
                </div>
                {profile.phone && (
                  <div className="profile-info-row">
                    <dt>번호</dt>
                    <dd>{profile.phone}</dd>
                  </div>
                )}
                {profile.address && (
                  <div className="profile-info-row">
                    <dt>지역</dt>
                    <dd>{profile.address}</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* 오른쪽: 링크 → 스킬바 → 강점 */}
            <div className="profile-right">
              {/* 1) GitHub / Blog / Notion 링크 */}
              <div className="profile-links">
                {profile.github && (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="profile-link-row"
                  >
                    <div className="profile-link-icon profile-link-icon--github" />
                    <div className="profile-link-texts">
                      <span className="profile-link-label">GitHub</span>
                      <span className="profile-link-url">{profile.github}</span>
                    </div>
                  </a>
                )}

                {profile.blog && (
                  <a
                    href={profile.blog}
                    target="_blank"
                    rel="noreferrer"
                    className="profile-link-row"
                  >
                    <div className="profile-link-icon profile-link-icon--blog" />
                    <div className="profile-link-texts">
                      <span className="profile-link-label">Blog</span>
                      <span className="profile-link-url">{profile.blog}</span>
                    </div>
                  </a>
                )}

                {profile.notion && (
                  <a
                    href={profile.notion}
                    target="_blank"
                    rel="noreferrer"
                    className="profile-link-row"
                  >
                    <div className="profile-link-icon profile-link-icon--notion" />
                    <div className="profile-link-texts">
                      <span className="profile-link-label">Notion</span>
                      <span className="profile-link-url">{profile.notion}</span>
                    </div>
                  </a>
                )}
              </div>

              {/* 2) 스킬 퍼센트 바 */}
              <section className="profile-skills">
                <h3 className="profile-skills-title">사용 언어 · 기술 스택</h3>
                <p className="profile-skills-sub">
                  프로젝트에서 실제로 사용해 본 언어와 프레임워크 기준으로,
                  스스로 느끼는 숙련도를 퍼센트로 표현했습니다.
                </p>

                <div className="skill-list">
                  {skills.map((skill) => (
                    <div key={skill.name} className="skill-row">
                      <div className="skill-header">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3) 강점 카드 리스트 */}
              <section className="profile-skills">
                <h3 className="profile-skills-title">강점</h3>
                <p className="profile-skills-sub">
                  함께 일할 때 강하게 드러나는 성향과, 실제 프로젝트에서 보여준
                  행동을 중심으로 정리했습니다.
                </p>

                <div className="ability-list">
                  {abilities.map((item) => (
                    <article key={item.title} className="ability-card">
                      <div className="icon-circle">
                        <span className="icon-initial">{item.icon}</span>
                      </div>
                      <div>
                        <div className="ability-header">
                          <h3 className="ability-title">{item.title}</h3>
                          <span className="ability-tag">{item.keyword}</span>
                        </div>
                        <p className="ability-desc">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
