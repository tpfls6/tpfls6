// data/site.js
// 프로필 · 카피 · 연락처. 기존 데이터만 재배치.
import { STOCKMATE_HERO } from './stockmate';

export const profile = {
  name: "박세린",
  englishName: "SERIN PARK",
  email: "dlfksmfqwr@naver.com",
  phone: "010-2388-7425",
  address: "서울 구로구",
  github: "https://github.com/tpfls6",
  blog: "https://tpflss.tistory.com/",
  school: "동양미래대학교 컴퓨터소프트웨어공학과",
};

export const heroCopy = {
  role: "서비스 기획자",
  lines: ["어디에든 스며들어,", "더 나은 방향을 그립니다."],
  intro: [
    "새로운 환경과 관점을 빠르게 받아들이고,",
    "사용자의 문제를 발견해 서비스에 필요한 답을 그려가는 기획자입니다.",
  ],
};

export const strengths = [
  {
    tone: "blue",
    title: ["문제를 구조화하고", "끝까지 해결하는 힘"],
    desc: "복잡한 문제 속에서 핵심을 찾고, 해결 가능한 단위로 정리해 끝까지 풀어냅니다.",
  },
  {
    tone: "peach",
    title: ["사용자 관점에서", "불편을 발견하는 감각"],
    desc: "기능 자체보다 사용자의 흐름과 경험을 먼저 보고, 더 직관적인 방향을 고민합니다.",
  },
  {
    tone: "mint",
    title: ["다양한 관점을 연결해", "방향을 만드는 능력"],
    desc: "사용자, 팀, 개발의 관점을 연결해 실행 가능한 서비스 방향으로 구체화합니다.",
  },
];

export const viewCopy = {
  planner: {
    headline: ["From problem", "to experience."],
    desc: "문제를 발견하고 사용자에게 필요한 경험으로 구체화합니다.",
    capabilities: [
      {
        title: "Service Planning",
        desc: "문제를 정의하고 필요한 기능과 서비스 구조를 설계합니다.",
      },
      {
        title: "User Flow & UX",
        desc: "사용자가 서비스를 이용하는 흐름과 화면 경험을 설계합니다.",
      },
      {
        title: "Requirements",
        desc: "아이디어를 실제 구현 가능한 요구사항과 기능으로 구체화합니다.",
      },
      {
        title: "QA & Improvement",
        desc: "직접 서비스를 테스트하고 문제를 발견해 개선합니다.",
      },
    ],
    story: ["Problem", "Planning", "User Flow / UX", "QA", "Improvement"],
  },
  developer: {
    headline: ["From idea", "to working product."],
    desc: "아이디어를 실제 사용 가능한 서비스로 구현합니다.",
    capabilities: [
      {
        title: "Frontend",
        desc: "사용자 경험과 기획 의도를 실제 인터페이스로 구현합니다.",
      },
      {
        title: "Backend",
        desc: "서비스 로직과 API를 설계하고 구현합니다.",
      },
      {
        title: "Database",
        desc: "서비스의 데이터 구조와 흐름을 설계하고 관리합니다.",
      },
      {
        title: "Troubleshooting",
        desc: "구현 과정에서 발생하는 문제를 분석하고 해결합니다.",
      },
    ],
    story: ["Goal", "Architecture", "Implementation", "Data / API", "Troubleshooting", "Result"],
  },
};

export const aboutCopy = {
  title: "I connect ideas with implementation.",
  titleKo: "아이디어가 실제로 동작할 때까지.",
  desc: "사용자 경험을 고민하는 것에서 시작해 기능을 정의하고, 직접 구현하고, 테스트하며 개선하는 과정을 좋아합니다.",
  steps: [
    { key: "PLAN", desc: "문제를 발견하고 사용자 흐름을 설계합니다." },
    { key: "BUILD", desc: "기획을 실제 동작하는 서비스로 구현합니다." },
    { key: "IMPROVE", desc: "QA와 피드백을 통해 문제를 발견하고 개선합니다." },
  ],
};

export const featuredWorks = [
  {
    slug: "jewelry",
    num: "01",
    name: "Jewelry Factory",
    headline: "주얼리 공장 업무 관리 시스템",
    desc: [
      "입·출고, 중량 측정, 사진 기록, 대장과 통계를",
      "하나의 흐름에서 관리할 수 있도록 설계했습니다.",
    ],
    tags: ["현장 업무 분석", "기능·정책 설계", "UX", "QA"],
    core: [
      "복잡하게 흩어진 작업 기록을 단순화하고,",
      "실제 업무 방식에 맞춰 사용성을 개선했습니다.",
    ],
    images: ["/projects/jewelry/ledger.jpg", "/projects/jewelry/stats.jpg"],
    tone: "gold",
  },
  {
    slug: "stockmate",
    num: "02",
    name: "StockMate",
    headline: "AI 개인 맞춤형 투자 학습 및 모의투자 플랫폼",
    desc: [
      "사용자의 투자 성향과 학습 수준에 맞춘 콘텐츠를 제공하고,",
      "주식 특화 AI 분석과 모의투자를 통해 배운 내용을 직접 적용할 수 있도록 설계했습니다.",
    ],
    tags: STOCKMATE_HERO.roleTags,
    core: [
      "개인에게 맞게 배우고, AI로 분석하고,",
      "모의투자로 직접 적용할 수 있도록 설계했습니다.",
    ],
    images: [
      "/projects/stockmate/cover.png",
      "/projects/stockmate/stock-detail.png",
    ],
    tone: "aqua",
    flip: true,
  },
  {
    slug: "iris",
    num: "03",
    name: "IRIS",
    headline: "AI 기반 개발 지원 환경",
    desc: [
      "AI와 IDE를 연결해 프로젝트 탐색, 파일 작성,",
      "실행까지 이어질 수 있도록 설계한 개발 지원 도구입니다.",
    ],
    tags: ["제품 기획", "Developer UX", "AI", "인터랙션", "QA"],
    core: [
      "AI와 실제 개발 환경 사이의 단절을 줄이고,",
      "대화에서 실행까지 자연스럽게 이어지는 경험을 설계했습니다.",
    ],
    images: ["/projects/iris/splash.jpg", "/projects/iris/workspace.jpg"],
    tone: "lilac",
  },
];

export const worksCopy = {
  moreTitle: "More Works",
  moreDesc: "다양한 환경에서 문제를 해결하며 쌓아온 프로젝트들입니다.",
};

export const journeyCopy = {
  title: "My Journey",
  desc: "프로젝트를 거듭하며 역할의 경계를 넓혀왔습니다.",
};

export const experienceCopy = {
  title: "이력",
  lead: "개발을 이해하고 직접 만들고 검증해온 경험을 바탕으로, 서비스 전체를 바라봅니다.",
};

export const contactCopy = {
  kicker: "CONTACT",
  desc: ["서비스 기획 및 협업 관련 문의는", "아래 채널로 연락주세요."],
};

export const techStackGroups = [
  {
    title: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "MUI", "Axios", "Bootstrap"],
  },
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Python", "REST API"],
  },
  {
    title: "Database",
    items: ["MySQL", "Redis"],
  },
  {
    title: "Infrastructure",
    items: ["Git", "GitHub", "Docker", "AWS EC2", "Vercel", "Swagger", "Postman"],
  },
  {
    title: "Product",
    items: ["Figma", "Notion", "회의록 작성", "일정 관리", "요구사항 정리", "QA 테스트", "팀 프로젝트 리딩"],
  },
];

export const abilities = [
  {
    title: "구조화·정리 능력",
    description:
      "노션, PPT, 회의록 등으로 요구사항과 프로젝트 흐름을 체계적으로 정리하고, 컴포넌트 기반으로 화면을 구조화합니다.",
  },
  {
    title: "빠른 학습력과 실전 적용력",
    description:
      "React, Next.js, Spring Boot, AWS 등 새로운 기술을 짧은 시간 안에 학습해 실제 프로젝트에 바로 적용합니다.",
  },
  {
    title: "팀장 경험과 협업 커뮤니케이션",
    description:
      "팀장으로서 역할 분담, 일정 관리, 회의록·보고서 작성을 주도하며 팀이 같은 방향을 보도록 조율합니다.",
  },
  {
    title: "끝까지 완성하는 실행력과 QA",
    description:
      "화면 동작·API 응답·사용자 흐름을 직접 점검하는 QA까지 책임지며, 여러 프로젝트를 동시에 완성도 있게 마무리합니다.",
  },
];
