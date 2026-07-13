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
    school: "동양미래대 컴퓨터소프트웨어공학과"
  };

  // 기술 스택: 입사지원서 기술스택 표 구조를 그대로 반영
  const techStackGroups = [
    {
      title: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Java"],
    },
    {
      title: "Framework / Library",
      items: ["React", "Next.js", "Spring Boot", "MUI", "Axios", "Bootstrap"],
    },
    {
      title: "Server / Database",
      items: ["MySQL", "Redis", "REST API"],
    },
    {
      title: "Tooling / DevOps",
      items: ["Git", "GitHub", "Docker", "Swagger", "Postman", "Notion"],
    },
    {
      title: "Environment",
      items: ["IntelliJ IDEA", "VS Code", "macOS", "Windows"],
    },
    {
      title: "Design & Collaboration",
      items: [
        "Figma",
        "PPT",
        "회의록 작성",
        "일정 관리",
        "요구사항 정리",
        "QA 테스트",
        "팀 프로젝트 리딩",
      ],
    },
  ];

  // 핵심역량: 입사지원서 핵심역량 4가지를 그대로 반영
  const abilities = [
    {
      title: "구조화·정리 능력",
      icon: <FiLayers />,
      description:
        "노션, PPT, 회의록 등으로 요구사항과 프로젝트 흐름을 체계적으로 정리하고, 컴포넌트 기반으로 화면을 구조화합니다.",
    },
    {
      title: "빠른 학습력과 실전 적용력",
      icon: <FiZap />,
      description:
        "React, Next.js, Spring Boot, AWS 등 새로운 기술을 짧은 시간 안에 학습해 실제 프로젝트에 바로 적용합니다.",
    },
    {
      title: "팀장 경험과 협업 커뮤니케이션",
      icon: <FiUsers />,
      description:
        "팀장으로서 역할 분담, 일정 관리, 회의록·보고서 작성을 주도하며 팀이 같은 방향을 보도록 조율합니다.",
    },
    {
      title: "끝까지 완성하는 실행력과 QA",
      icon: <FiFlag />,
      description:
        "화면 동작·API 응답·사용자 흐름을 직접 점검하는 QA까지 책임지며, 여러 프로젝트를 동시에 완성도 있게 마무리합니다.",
    },
  ];

  return (
    <main className="page">
      <section className="section">
        <div className="container">
          <header className="section-header" data-reveal>
            <h2 className="section-title">내 프로필</h2>
            <p className="section-subtitle">
              기본 정보와 개발자로서의 핵심역량, 그리고 실제 사용해 본 기술
              스택을 정리한 페이지입니다.
            </p>
            <p className="profile-intro">
              화면을 구현하는 것에서 그치지 않고, 문제를 정의하고 API·데이터
              흐름을 설계하며 QA로 완성도를 높이는 것까지 책임지는
              프론트엔드 개발자입니다. 팀장으로서 역할 분담과 문서화를
              맡아온 경험을 바탕으로, 백엔드 구조에 대한 이해를 넓혀가고
              있습니다.
            </p>
          </header>

          <div className="profile-layout">
            {/* 왼쪽: 사진 + 기본 정보 */}
            <div className="profile-left" data-reveal>
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
                {profile.school && (
                  <div className="profile-info-row">
                    <dt>학력</dt>
                    <dd>{profile.school}</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* 오른쪽: 링크 → 기술스택 → 핵심역량 */}
            <div className="profile-right">
              {/* 1) GitHub / Blog / Notion 링크 */}
              <div className="profile-links" data-reveal>
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

              {/* 2) 기술 스택 (구분별 정리) */}
              <section className="profile-skills" data-reveal>
                <h3 className="profile-skills-title">기술 스택</h3>
                <p className="profile-skills-sub">
                  프로젝트에서 실제로 사용해 본 언어·프레임워크·협업 도구를
                  구분별로 정리했습니다.
                </p>

                <div className="techstack-groups">
                  {techStackGroups.map((group) => (
                    <div key={group.title} className="techstack-group">
                      <span className="techstack-group-title">
                        {group.title}
                      </span>
                      <div className="project-tech-list">
                        {group.items.map((item) => (
                          <span key={item} className="chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3) 핵심역량 카드 리스트 */}
              <section className="profile-skills" data-reveal>
                <h3 className="profile-skills-title">핵심역량</h3>
                <p className="profile-skills-sub">
                  함께 일할 때 강하게 드러나는 성향과, 실제 프로젝트에서
                  보여준 행동을 중심으로 정리했습니다.
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
