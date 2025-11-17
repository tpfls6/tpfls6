// data/projects.js

// 나중에 필요한 만큼 자유롭게 추가/수정하면 됨.
// githubUrl, notionUrl 비워두면 버튼 안 나오고,
// award, highlight 같은 값으로 스타일만 바꿀 수 있게 구성해둠.

// 학교 프로젝트
export const schoolProjects = [
  {
    id: "expo",
    category: "school",
    title: "Expo 컴퓨터 비전 AI\n손 재활·발달 플랫폼 프로젝트",
    period: "2024.06 - 2024.10",
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
    summary:
      "AI 기반 손 재활·발달 플랫폼으로, 컴퓨터 비전으로 손 동작을 인식해 Unity 게임과 웹에서 실시간으로 분석·시각화하는 프로젝트입니다.",

    description:
      "React 기반의 프론트엔드 개발을 담당하여 기록 분석 페이지, 그래프 시각화, UI 레이아웃을 구현했습니다. 또한 전체 UX 흐름 및 주요 페이지를 Figma로 설계하여 Unity 게임과 웹 서비스가 자연스럽게 연결되도록 디자인 작업을 함께 진행했습니다.",
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
    period: "2025.1 - 2025.02",
    role: "프론트엔드 개발",
    techStack: [
      "React",
      "Express",
      "Git",
      "Notion",
      "Docker",
      "GCP",
      "Jwt",
      "tailwind Css",
      "mySQL",
    ],
    summary:
      "개발자들이 질문과 답변을 통해 함께 성장할 수 있는 커뮤니티 플랫폼입니다. 누구나 참여하여 코딩 관련 문제를 공유하고 해결할 수 있도록 설계한 프로젝트입니다.",
    description:
      "실제 개발 환경과 유사한 구조를 갖추기 위해 폴더를 기능별로 분리하여 가독성과 유지보수성을 높였습니다. 또한 UI 요소를 모듈화해 재사용성을 극대화하고, 반복되는 로직을 추상화하여 확장 가능한 구조를 구축했습니다. 공통 레이아웃, 사이드바, 헤더, 리스트·상세 페이지 등 주요 화면 개발을 담당했으며, 팀원 간 협업을 위한 코드 리뷰 환경도 함께 고려했습니다.",
    githubUrl: "https://github.com/tpfls6/EL-Project_Front",
    notionUrl: "",
    demoUrl: "",
    award: null,
    highlight: false,
  },
  // {
  //   id: "el-mini",
  //   category: "school",
  //   title: "동아리 미니 프로젝트",
  //   period: "2024.10",
  //   role: "서비스 기획 / UX 설계",
  //   techStack: ["기획", "Figma"],
  //   summary:
  //     "소규모 서비스 아이디어를 바탕으로 기능 정의, 화면 흐름, 와이어프레임을 만든 기획 중심 프로젝트입니다.",
  //   description:
  //     "타깃 사용자 정의, 주요 기능 도출, 정보 구조 설계, 화면 플로우를 정리했습니다. Figma로 기본 UI를 설계하며 UX 흐름을 고민했습니다.",
  //   githubUrl: "",
  //   notionUrl: "",
  //   demoUrl: "",
  //   award: null,
  //   highlight: false,
  // },
];

// 외부 프로젝트
export const externalProjects = [
  {
    id: "contest-app",
    category: "external",
    title: "경진대회 풀떼기 프로젝트",
    period: "2024.07 - 2024.09",
    role: "앱 프론트엔드 개발, 백엔드 API 테스트 및 일부 설계 참여",
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
    summary: "환경 보호를 위한 분리수거 실천 리워드 앱 입니다.",
    description:
      "온보딩, 메인, 활동 기록, 리워드, 마이페이지 등 핵심 화면을 구현하고 전체 UI 흐름을 설계했습니다. \
      Spring Boot 백엔드와의 API 연동(활동 등록·포인트 조회·사용자 정보)을 직접 담당했으며, \
      Postman·Swagger를 활용한 API 테스트 및 요청/응답 구조 정리에 참여했습니다.",
    githubUrl: "https://github.com/2024-team-grass",
    notionUrl: "",
    demoUrl: "",
    award: "장려상",
    highlight: true,
  },
  {
    id: "25-hanium-navis",
    category: "external",
    title: "한이음 프로젝트 – Navis",
    period: "2024.03 - 2024.11",
    role: "프론트엔드 개발자",
    techStack: [
      // Frontend
      "React",
      "MUI",
      "JavaScript",
      "TypeScript",
      "Axios",
      "Custom Hooks",

      // Dev Environment
      "Visual Studio Code",
      "Postman",
      "Figma",
      "ChatGPT",
      "Playground",

      // Backend / Infra
      "EC2",
      "HTTP/S",
      "SSH",
      "Bash",

      // OS
      "Windows 11",
      "macOS",
      "Ubuntu",

      // Collaboration / Docs
      "GitHub",
      "Jira",
      "Notion",
      "Swagger",
      "Discord",
    ],
    summary:
      "프로젝트 관리(PMS) 성격의 웹서비스로, 스프린트 관리, 프로젝트 생성/조회, 알림 기능 등의 프론트엔드를 구현한 대형 프로젝트입니다.",
    description:
      "프로젝트 생성·조회·삭제 흐름과 사이드바 기반 메인 레이아웃을 구현했습니다. \
      스프린트 카드·프로젝트 상세·모달 등 핵심 UI와 폼 검증 로직을 개발하고, Alert를 포함한 사용자 피드백 구조를 정리했습니다. \
      또한 디자인 시스템(Figma 기반 컬러·타이포 토큰, 컴포넌트 스펙)을 바탕으로 UI 일관성을 맞추고,  \
      API 연동과 상태 관리를 커스텀 훅으로 분리해 유지보수성과 재사용성을 높였습니다.",
    githubUrl: "https://github.com/tpfls6/Navis-Frontend",
    notionUrl: "",
    demoUrl: "",
    jiraUrl:
      "https://jhjin104.atlassian.net/jira/software/projects/NAS/summary",
    award: "장려상",
    highlight: true,
  },
];
