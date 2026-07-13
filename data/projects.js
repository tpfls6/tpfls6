// data/projects.js

// 프로젝트는 "문제 → 해결 과정 → 결과 → 회고" 순서로 정리합니다.
// githubUrl, notionUrl 비워두면 버튼 안 나오고,
// award, highlight, status 값으로 배지/스타일만 바꿀 수 있게 구성해둠.

// 학교 프로젝트
export const schoolProjects = [
  {
    id: "stockmate",
    category: "school",
    title: "StockMate\nAI 기반 투자 학습 및 모의투자 플랫폼",
    period: "2026.03 - 2026.11",
    status: "진행중",
    team: "박세린(프론트·백엔드) · 백엔드 1명 · AI 1명 · 팀장",
    role: "팀장 · 프론트엔드 개발 · 백엔드 일부",
    techStack: [
      "React",
      "TypeScript",
      "Bootstrap",
      "MySQL",
      "Redis",
      "REST API",
      "Swagger",
      "Git",
      "GitHub",
      "Notion",
      "Figma",
    ],
    problem:
      "주식 초보자가 투자 개념을 학습하면서 실제와 비슷한 흐름으로 연습해볼 수 있는 서비스가 마땅치 않다는 문제에서 시작했습니다.",
    solution:
      "Figma로 화면 흐름을 설계한 뒤 React·TypeScript로 학습 콘텐츠, 모의투자, 시장 분석 화면을 구현했습니다. 백엔드에서는 사용자·모의투자 기능 CRUD를 팀원과 나눠 구현하고 Swagger로 API를 검증했습니다. 팀장으로서 GitHub·Notion 기반 역할 분담과 일정 관리, 회의록·보고서 작성을 담당하고 전반적인 QA를 직접 수행했습니다.",
    result:
      "3인 팀으로 프론트·백엔드·AI 영역을 나눠 약 9개월째 개발 중이며, 초보자도 이해하기 쉬운 투자 학습·모의투자 흐름을 갖춘 서비스로 완성해가고 있습니다.",
    retrospect:
      "화면 구현뿐 아니라 API 연동·데이터 흐름·QA까지 함께 고려해야 서비스 완성도가 올라간다는 것과, 팀장으로서 문서화와 소통이 개발 역량만큼 중요하다는 것을 배웠습니다.",
    githubUrl: "https://github.com/DMU-StockMate",
    notionUrl: "",
    demoUrl: "",
    award: null,
    highlight: true,
  },
  {
    id: "re-route",
    category: "school",
    title: "Re-Route\nAI 기반 회복탄력성 지원 플랫폼",
    period: "2026.05 - 2026.06",
    status: "진행중",
    team: "1인 개발 (기획 · 백엔드 MVP)",
    role: "기획 · 백엔드 MVP 개발",
    techStack: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST API",
      "OpenAI API",
      "Swagger",
      "GitHub",
      "Notion",
    ],
    problem:
      "감정과 고민을 정리하고 작은 실천으로 이어주는 자기회복 지원 서비스가 필요하다고 생각해 기획부터 개발까지 혼자 진행했습니다.",
    solution:
      "사업계획서를 작성해 타깃 사용자·핵심 기능·MVP 범위를 정리하고, AI 상담·감정 기록·사용자 상태 관리·회복 퀘스트 추천을 중심으로 1단계 MVP를 설계했습니다. 사용자·상담 기록·감정 데이터·퀘스트 구조를 직접 설계하고 REST API로 구현·검증했습니다.",
    result:
      "AI 상담 기반 자기회복 지원 서비스의 백엔드 MVP를 단독으로 완성하며 아이디어를 실제 동작하는 API로 구체화했습니다.",
    retrospect:
      "다양한 확장 아이디어를 우선순위에 따라 구현 가능한 MVP 범위로 좁히는 과정의 중요성과, 데이터 구조부터 API 흐름까지 처음부터 끝까지 책임지는 경험을 쌓았습니다.",
    githubUrl: "https://github.com/tpfls6/Re-Route",
    notionUrl: "",
    demoUrl: "",
    award: null,
    highlight: false,
  },
  {
    id: "expo",
    category: "school",
    title: "Expo 컴퓨터 비전 AI\n손 재활·발달 플랫폼 프로젝트",
    period: "2024.06 - 2024.10",
    status: null,
    team: "학교 동아리 팀 프로젝트",
    role: "프론트엔드 개발",
    techStack: [
      // Web
      "React",
      "JavaScript",
      "TypeScript",
      "Chart.js",
      "TailwindCSS",

      // Back End
      "Spring Boot",
      "Java",
      "MySQL",
      "AWS (EC2, VPC, Subnet)",

      // Game
      "Unity",
      "C#",
      "Unity Visual Scripting",

      // Design
      "Photoshop",
      "Figma",
      "Clip Studio",
      "Aseprite",

      // Cooperation
      "Git",
      "GitHub",
      "Notion",
    ],
    problem:
      "손 재활·발달을 돕는 콘텐츠가 동작을 재미있게 인식·분석해주지 못한다는 문제의식에서 시작한 컴퓨터 비전 기반 프로젝트입니다.",
    solution:
      "React로 기록 분석 페이지와 그래프 시각화, UI 레이아웃을 구현하고, 전체 UX 흐름과 주요 화면을 Figma로 설계해 Unity 게임과 웹 서비스가 자연스럽게 이어지도록 디자인 작업을 함께 진행했습니다.",
    result:
      "컴퓨터 비전으로 손 동작을 인식해 Unity 게임과 웹에서 실시간으로 분석·시각화하는 플랫폼을 완성했고, 교내 EXPO에서 대상을 수상했습니다.",
    retrospect:
      "게임과 웹처럼 서로 다른 플랫폼을 하나의 경험으로 연결하려면 초기 UX 설계가 얼마나 중요한지 배웠습니다.",
    githubUrl: "https://github.com/orgs/2024-dmu-expo-el/repositories",
    notionUrl:
      "https://gregarious-trampoline-da0.notion.site/2024-EL-EXPO-b6cfb8e0f5b149a6a73366e59cf35183",
    demoUrl: "",
    award: "대상",
    highlight: true,
  },
  {
    id: "el-winter",
    category: "school",
    title: "Feed Coder 커뮤니티 플랫폼",
    period: "2025.01 - 2025.02",
    status: null,
    team: "학교 동아리 팀 프로젝트",
    role: "프론트엔드 개발",
    techStack: [
      "React",
      "Express",
      "Git",
      "Notion",
      "Docker",
      "GCP",
      "JWT",
      "TailwindCSS",
      "MySQL",
    ],
    problem:
      "개발자들이 질문·답변을 통해 함께 성장할 수 있는 커뮤니티가 필요하다는 문제의식에서 출발했습니다.",
    solution:
      "실제 개발 환경과 유사하게 폴더를 기능별로 분리해 가독성·유지보수성을 높이고, UI 요소를 모듈화해 재사용성을 극대화했습니다. 공통 레이아웃·사이드바·헤더·리스트/상세 페이지 등 주요 화면을 구현하고 팀원 간 코드 리뷰 환경도 함께 고려했습니다.",
    result:
      "누구나 참여해 코딩 관련 문제를 공유·해결할 수 있는 커뮤니티 플랫폼을 완성했습니다.",
    retrospect:
      "반복되는 로직을 추상화하고 폴더 구조를 기능 단위로 나누는 것이 유지보수성과 확장성에 큰 영향을 준다는 것을 체감했습니다.",
    githubUrl: "https://github.com/tpfls6/EL-Project_Front",
    notionUrl: "",
    demoUrl: "",
    award: null,
    highlight: false,
  },
];

// 외부 프로젝트
export const externalProjects = [
  {
    id: "contest-app",
    category: "external",
    title: "경진대회 풀떼기 프로젝트\n환경 보호 리워드 앱",
    period: "2024.07 - 2024.09",
    status: null,
    team: "교내 경진대회 팀 프로젝트",
    role: "앱 프론트엔드 개발 · 백엔드 API 테스트 및 일부 설계",
    techStack: [
      // Planning / Design
      "Notion",
      "Figma",

      // Frontend
      "React Native",
      "Expo",

      // Backend
      "Spring Boot",
      "JPA",

      // Mobile / IDE
      "Android Studio",
      "Visual Studio Code",
      "IntelliJ IDEA",

      // API / Testing
      "Postman",
      "Swagger",

      // Infra / Database
      "Amazon EC2",
      "Amazon RDS",
      "MySQL",
    ],
    problem:
      "환경 보호를 위한 분리수거 실천을 꾸준히 이어가게 만들 동기부여 장치가 부족하다는 문제에서 출발했습니다.",
    solution:
      "온보딩·메인·활동 기록·리워드·마이페이지 등 핵심 화면과 전체 UI 흐름을 설계하고, Spring Boot 백엔드와 활동 등록·포인트 조회·사용자 정보 API 연동을 직접 담당했습니다. Postman·Swagger로 API 테스트와 요청/응답 구조 정리에 참여했습니다.",
    result:
      "분리수거 실천을 리워드로 이어주는 앱을 완성해 교내 경진대회에서 장려상을 받았습니다.",
    retrospect:
      "프론트엔드 구현뿐 아니라 API 설계·테스트까지 함께 맡으며 서비스 전체 흐름을 이해하는 경험을 쌓았습니다.",
    githubUrl: "https://github.com/2024-team-grass",
    notionUrl: "",
    demoUrl: "",
    award: "장려상",
    highlight: true,
  },
  {
    id: "25-hanium-navis",
    category: "external",
    title: "한이음 프로젝트 – Navis\nAI 기반 애자일 프로젝트 관리 솔루션",
    period: "2025.03 - 2025.11",
    status: null,
    team: "프론트엔드 3명 · 백엔드 2명",
    role: "프론트엔드 개발 · QA",
    techStack: [
      "JavaScript",
      "React",
      "MUI",
      "Axios",
      "REST API",
      "Custom Hooks",
      "Figma",
      "GitHub",
      "Jira",
      "Notion",
      "Swagger",
      "VS Code",
    ],
    problem:
      "프로젝트 기획과 협업 과정에서 반복되는 일정·업무 배치·리스크 관리를 체계적으로 도와줄 도구가 필요했습니다.",
    solution:
      "Figma로 화면을 설계하고 React 기반으로 프로젝트 생성·목록 조회·상세 정보 입력 등 주요 화면을 컴포넌트 단위로 구현했습니다. 목표·팀 정보·요구사항 입력을 단계별 화면으로 구성하고 상위 컴포넌트에서 상태를 관리해 API로 전달되는 흐름을 만들었으며, API 연동과 상태 관리를 커스텀 훅으로 분리했습니다. Figma 기반 화면 검토, 기능 동작 확인 등 QA도 함께 수행했습니다.",
    result:
      "AI가 일정·업무 배치·리스크 요소를 제안하는 애자일 PMS의 핵심 화면을 완성했고, 재사용 가능한 컴포넌트 구조로 유지보수성을 높였습니다.",
    retrospect:
      "컴포넌트 분리와 구조 설계가 유지보수성에 큰 영향을 준다는 것과, 개발자는 화면을 만드는 데서 끝나지 않고 QA로 완성도를 높여야 한다는 것을 배웠습니다.",
    githubUrl: "https://github.com/tpfls6/Navis-Frontend",
    notionUrl: "",
    demoUrl: "",
    jiraUrl:
      "https://jhjin104.atlassian.net/jira/software/projects/NAS/summary",
    award: "장려상",
    highlight: true,
  },
];
