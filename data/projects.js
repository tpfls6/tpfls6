// data/projects.js
//
// 새 프로젝트를 추가하는 방법:
// 1) 아래 projects 배열에 객체 하나를 추가한다 (id/slug는 폴더명과 동일하게).
// 2) public/projects/<slug>/ 폴더에 이미지를 넣는다.
// 3) media 배열에 {src, title, description, section} 형태로 사진을 연결한다.
//    section 값에 따라 상세 페이지의 해당 케이스 스터디 섹션 안에서 자동으로 노출된다.
//    (overview / problem / planning / development / qa / result / architecture)
// 그 외 컴포넌트나 페이지 코드는 수정할 필요가 없다.

export const ARCHIVE_FILTERS = [
  "ALL",
  "DEVELOPMENT",
  "PLANNING",
  "PM",
  "AI",
  "WEB",
  "MOBILE",
  "ETC",
];

const img = (slug, file) => `/projects/${slug}/${file}`;

export const projects = [
  {
    id: "stockmate",
    slug: "stockmate",
    featured: true,
    tags: ["DEVELOPMENT", "PM", "AI", "WEB"],
    title: "StockMate",
    tagline: "AI 기반 주식 학습 · 모의투자 플랫폼",
    period: "2026.03.02 - 2026.11.25 진행 중",
    status: "진행중",
    team: "3인 팀 (팀장 · 프론트엔드 1 · 백엔드 1 · AI 1)",
    role: "Team Lead · Frontend · Backend 일부 · Planning · QA",
    techStack: [
      "React",
      "TypeScript",
      "NestJS",
      "MySQL",
      "Redis",
      "REST API",
      "Swagger",
      "GitHub",
      "Notion",
      "Figma",
      "AWS",
      "Vercel",
    ],
    cover: img("stockmate", "cover.png"),
    links: {
      github: "https://github.com/DMU-StockMate",
      demo: "",
    },
    roleContent: {
      developer: {
        summary:
          "React·TypeScript 프론트엔드 전체와 NestJS 백엔드 일부를 구현하고, Redis 캐싱과 배포 환경을 구성했습니다.",
        points: [
          "모의투자 대시보드 · 종목 상세 · 투자학습 화면을 React + TypeScript로 구현",
          "NestJS 기반 API 일부와 Redis 캐싱 구조 설계",
          "MySQL 스키마 설계 및 AWS · Vercel 배포 환경 구성",
          "KRX·키움증권·DART Open API를 백엔드에서 연동",
        ],
      },
      planner: {
        summary:
          "주식 초보자가 겪는 학습 장벽을 정의하고, 학습→모의투자로 이어지는 사용자 흐름을 설계했습니다.",
        points: [
          "문제 정의: 초보자가 투자 개념을 실전처럼 연습할 서비스 부재",
          "학습 콘텐츠 → 모의투자 → 시장 분석으로 이어지는 사용자 흐름 설계",
          "Figma로 정보구조(IA)와 주요 화면 와이어프레임 설계",
          "오답 기반 개인 맞춤 학습 등 기능 우선순위 정리",
        ],
      },
      pm: {
        summary:
          "3인 팀의 팀장으로서 역할 분담과 일정, 의사결정을 조율하고 QA까지 책임졌습니다.",
        points: [
          "팀 규모: 3인 (프론트엔드/기획 본인, 백엔드 1, AI 1)",
          "GitHub·Notion 기반 역할 분담과 스프린트 일정 관리, 회의록 정리",
          "기능 우선순위 및 기술 스택 의사결정 주도",
          "중간보고서 등 팀 보고 문서 작성",
        ],
      },
      qa: {
        summary:
          "매수/매도, 회원가입, 학습 콘텐츠 전반에서 정상 흐름과 예외 상황을 직접 테스트하고 개선했습니다.",
        points: [
          "모의투자 매수/매도 연속 처리 시 잔고 동기화 문제 발견 및 수정",
          "회원가입 이메일 중복 예외 케이스 보완 (프론트+DB 이중 검증)",
          "오답 데이터가 없는 신규 사용자의 빈 상태(empty state) UX 개선",
        ],
      },
    },
    media: [
      {
        src: img("stockmate", "invest-dashboard.png"),
        title: "모의투자 대시보드",
        description: "보유 자산, 평가 손익, 자산 추이를 한눈에 보여주는 대시보드 화면.",
        section: "development",
      },
      {
        src: img("stockmate", "stock-detail.png"),
        title: "종목 상세",
        description:
          "차트·수급·랭킹 데이터를 담은 종목 상세 화면. 실시간 데이터가 화면과 어긋나지 않는지 직접 검증했습니다.",
        section: "qa",
      },
      {
        src: img("stockmate", "learning-overview.png"),
        title: "투자학습 전체보기",
        description: "난이도별 학습 코스와 진행률을 보여주는 학습 허브 화면.",
        section: "planning",
      },
      {
        src: img("stockmate", "learning-personalized.png"),
        title: "AI 개인 맞춤 학습",
        description: "오답을 분석해 비슷한 유형의 문제를 생성해주는 맞춤 학습 화면.",
        section: "development",
      },
      {
        src: img("stockmate", "architecture.png"),
        title: "System Architecture",
        description:
          "React · NestJS · MySQL · Redis와 KRX / 키움증권 / DART Open API, AI 서버(FastAPI + LLM)를 연결하는 전체 구조.",
        section: "architecture",
      },
    ],
    qaCases: [
      {
        situation: "모의투자에서 종목을 매수한 직후 바로 같은 종목을 매도",
        expected: "매수 취소분만큼 예수금과 보유 수량이 즉시 정확하게 반영되어야 함",
        problem:
          "매수·매도를 연달아 빠르게 실행하면 화면이 API 응답보다 먼저 갱신되어, 일시적으로 예수금이 음수로 보이는 현상 발견",
        fix: "매수/매도는 낙관적 업데이트를 제거하고, API 응답을 받은 뒤 잔고를 재조회하도록 순서를 변경",
        verification: "연속 매수/매도, 새로고침, 다른 탭에서 동시 접속 등 여러 조건으로 재현·재검증",
      },
      {
        situation: "회원가입 시 이미 존재하는 이메일로 폼을 제출",
        expected: "중복된 이메일은 가입 단계에서 바로 안내되어야 함",
        problem: "프론트엔드 검증만 존재하고 DB에 유니크 제약이 없어, 동시에 같은 이메일로 요청을 보내면 중복 계정이 생성될 수 있는 문제 발견",
        fix: "MySQL 이메일 컬럼에 유니크 인덱스를 추가하고 API 레벨에서도 중복 여부를 다시 확인",
        verification: "같은 이메일로 두 요청을 동시에 보내는 시나리오로 재확인",
      },
      {
        situation: "오답 기록이 전혀 없는 신규 사용자가 개인 맞춤 학습을 실행",
        expected: "학습할 오답이 없을 때는 별도 안내가 보여야 함",
        problem: "오답 기반 생성 로직만 있어, 신규 사용자에게는 빈 화면만 나타나고 다음 행동을 안내하지 않는 문제 발견",
        fix: "오답 데이터가 없을 때 안내 문구와 함께 '프롬프트로 생성' 방식을 제안하는 UI 추가",
        verification: "신규 계정 / 오답이 있는 기존 계정 두 조건 모두 재확인",
      },
    ],
    caseStudy: {
      overview:
        "주식 초보자를 위한 AI 기반 학습·모의투자 플랫폼으로, 3인 팀으로 9개월 넘게 개발 중입니다.",
      problem:
        "주식 초보자가 투자 개념을 학습하면서 실제와 비슷한 흐름으로 연습해볼 수 있는 서비스가 마땅치 않다는 문제에서 시작했습니다.",
      myRole:
        "팀장으로서 기획·일정·역할 분담을 총괄하고, 프론트엔드 전체와 백엔드 일부, 그리고 QA를 직접 담당했습니다.",
      planning:
        "Figma로 학습 콘텐츠, 모의투자, 시장 분석 화면의 흐름을 설계하고 정보구조를 정리했습니다.",
      development:
        "React·TypeScript로 주요 화면을 구현하고, NestJS·MySQL·Redis로 API와 데이터 계층을 구축했습니다. KRX·키움증권·DART Open API를 연동해 실제 시세와 재무 데이터를 반영했습니다.",
      qa: "매수/매도 동시성, 회원가입 예외, 신규 사용자 빈 상태 등 실제 사용 흐름을 기준으로 QA를 진행했습니다. 아래는 그중 대표적인 케이스입니다.",
      improvements:
        "발견한 문제는 원인 코드까지 추적해 수정하고, 같은 시나리오를 다른 조건(신규/기존 사용자, 여러 탭 등)으로 바꿔가며 재검증했습니다.",
      architecture:
        "React 프론트엔드, NestJS 백엔드, MySQL·Redis 데이터 계층, 그리고 AI 서버(FastAPI)가 KRX·키움증권·DART Open API 및 LLM과 연결되는 구조입니다.",
      result:
        "초보자도 이해하기 쉬운 투자 학습·모의투자 흐름을 갖춘 서비스로 완성해가고 있습니다.",
      learned:
        "화면 구현뿐 아니라 API 연동·데이터 흐름·QA까지 함께 고려해야 서비스 완성도가 올라간다는 것과, 팀장으로서 문서화와 소통이 개발 역량만큼 중요하다는 것을 배웠습니다.",
    },
  },

  {
    id: "iris",
    slug: "iris",
    featured: true,
    tags: ["DEVELOPMENT", "PLANNING", "AI", "ETC"],
    title: "IRIS",
    tagline: "로컬·클라우드 AI 모델과 UI 제어를 결합한 데스크톱 AI 에이전트 / IDE",
    period: "2026.08 - 진행 중",
    status: "진행중",
    team: "1인 프로젝트 (기획 · 개발 · QA)",
    role: "Product Planning · UI/UX · Development · QA",
    techStack: ["Python", "PyQt/PySide", "QtWebEngine", "Ollama", "Hermes", "ShowUI"],
    cover: img("iris", "cover.webp"),
    links: {
      github: "",
      demo: "",
    },
    roleContent: {
      developer: {
        summary:
          "PyQt/PySide와 QtWebEngine 위에서 로컬·클라우드 LLM을 연결하고 UI 제어 에이전트를 구현했습니다.",
        points: [
          "Ollama 기반 로컬 모델과 클라우드 모델을 함께 호출하는 구조 설계",
          "Hermes · ShowUI를 활용한 UI 제어(에이전트가 화면을 조작) 기능 구현",
          "QtWebEngine으로 데스크톱 앱 안에 웹 기반 UI를 임베드",
          "PySide 시그널/슬롯 구조로 에이전트-UI 간 비동기 통신 설계",
        ],
      },
      planner: {
        summary:
          "개발자가 로컬 환경에서 AI 에이전트를 자연스럽게 쓸 수 있는 IDE형 경험을 기획했습니다.",
        points: [
          "문제 정의: 클라우드 종속 없이 로컬에서 동작하는 AI 개발 도구의 부재",
          "AI 에이전트가 대화 → 코드/화면 제어로 이어지는 사용자 흐름 설계",
          "IDE + 에이전트 채팅을 한 화면에 담는 화면 설계",
          "기능 범위를 단계적으로 넓혀가는 개선 로드맵 수립",
        ],
      },
      pm: {
        summary:
          "1인 프로젝트로 기획부터 개발, QA까지 전체 일정과 범위를 스스로 관리하고 있습니다.",
        points: [
          "팀 규모: 1인 (기획 · 개발 · QA 전담)",
          "기능 우선순위를 스스로 정하고 마일스톤 단위로 일정 관리",
          "로컬 모델 vs 클라우드 모델 사용 범위에 대한 기술 의사결정",
          "직접 시나리오 기반 QA로 에이전트 동작 검증",
        ],
      },
      qa: {
        summary: "로컬 LLM 응답과 UI 제어 동작을 다양한 입력 시나리오로 직접 검증하고 있습니다.",
        points: [
          "모델 응답이 지연·오류일 때 UI가 멈추지 않는지 확인",
          "잘못된 화면 상태에서 UI 제어 명령이 실행될 때의 예외 처리 점검",
        ],
      },
    },
    media: [],
    caseStudy: {
      overview:
        "로컬·클라우드 AI 모델과 UI 제어 기능을 결합한 데스크톱 AI 에이전트/IDE 프로젝트입니다.",
      problem:
        "클라우드 서비스에 의존하지 않고 로컬 환경에서도 자연스럽게 쓸 수 있는 AI 개발 도구가 부족하다는 문제에서 출발했습니다.",
      myRole: "기획부터 UI/UX 설계, 개발, QA까지 전 과정을 혼자 진행하고 있습니다.",
      planning:
        "IDE와 AI 에이전트 채팅이 한 화면에서 자연스럽게 이어지는 사용자 흐름과 화면 구조를 설계했습니다.",
      development:
        "PyQt/PySide와 QtWebEngine으로 데스크톱 앱을 구현하고, Ollama로 로컬 모델을, Hermes·ShowUI로 UI 제어 기능을 연결했습니다.",
      result:
        "로컬 모델 기반으로 화면을 직접 제어할 수 있는 데스크톱 AI 에이전트의 핵심 기능을 구현하며 개발을 이어가고 있습니다.",
      learned:
        "로컬 LLM과 UI 자동화를 함께 다루면서, 응답 속도와 정확도 사이의 트레이드오프를 제품 설계 단계에서부터 고려해야 한다는 것을 배우고 있습니다.",
    },
  },

  {
    id: "jewelry",
    slug: "jewelry",
    featured: true,
    tags: ["DEVELOPMENT", "PLANNING", "ETC"],
    title: "Jewelry Factory Management System",
    tagline: "주얼리 공장의 입·출고, 중량 측정, 사진 기록, 대장 관리를 위한 데스크톱 관리 프로그램",
    period: "2026.08 - 진행 중",
    status: "진행중",
    team: "1인 프로젝트 (실무 요구사항 기반 개발)",
    role: "Planning · UI/UX · Full-stack Development · QA",
    techStack: ["Python", "PySide6", "Local DB", "Supabase", "Serial Communication"],
    cover: img("jewelry", "cover.webp"),
    links: {
      github: "",
      demo: "",
    },
    roleContent: {
      developer: {
        summary:
          "PySide6 데스크톱 앱에서 전자저울 시리얼 통신, 로컬 DB, Supabase 동기화까지 전체를 구현했습니다.",
        points: [
          "전자저울과의 Serial Communication으로 실시간 중량 측정 연동",
          "로컬 DB로 오프라인 입출고 기록, Supabase로 원격 백업/동기화",
          "입고·출고·사진 기록·대장 조회 화면을 PySide6로 구현",
          "실무 데이터(중량 단위, 대장 양식)에 맞춘 검증 로직 설계",
        ],
      },
      planner: {
        summary:
          "현장 담당자의 수기 대장 관리 방식을 분석해 디지털 워크플로로 전환했습니다.",
        points: [
          "문제 정의: 수기 대장으로 인한 입·출고 기록 누락과 조회 어려움",
          "입고 → 중량 측정 → 사진 기록 → 대장 반영으로 이어지는 현장 흐름 설계",
          "현장에서 바로 쓸 수 있는 단순한 화면 구조(IA) 설계",
          "사용자(현장 담당자) 피드백을 반영한 화면 개선",
        ],
      },
      pm: {
        summary:
          "실무 담당자의 요구사항을 직접 수집해 기획부터 QA까지 전 과정을 혼자 책임졌습니다.",
        points: [
          "팀 규모: 1인 (기획 · 개발 · QA 전담)",
          "현장 담당자 인터뷰를 통한 요구사항 정리 및 우선순위 결정",
          "로컬 저장 vs 클라우드 동기화 방식에 대한 기술 의사결정",
          "실제 데이터로 입·출고 시나리오 QA 진행",
        ],
      },
      qa: {
        summary: "현장 데이터 입력 과정에서 발생할 수 있는 오차와 예외 케이스를 직접 검증하고 있습니다.",
        points: [
          "시리얼 통신이 끊겼을 때 재연결 및 사용자 안내 처리 확인",
          "오프라인 저장 후 온라인 동기화 시 데이터 충돌 케이스 점검",
        ],
      },
    },
    media: [],
    caseStudy: {
      overview:
        "주얼리 공장의 입·출고, 중량 측정, 사진 기록, 대장 관리를 하나의 데스크톱 프로그램으로 통합하는 프로젝트입니다.",
      problem:
        "수기 대장으로 입·출고를 관리하면서 기록 누락, 중량 오차, 사진 자료 분산 등의 문제가 반복되고 있었습니다.",
      myRole: "현장 요구사항 파악부터 화면 설계, 개발, QA까지 전 과정을 담당하고 있습니다.",
      planning:
        "입고 → 중량 측정 → 사진 기록 → 대장 반영으로 이어지는 현장 작업 흐름을 정리하고 화면 구조를 설계했습니다.",
      development:
        "PySide6로 데스크톱 UI를 구현하고, 전자저울과 Serial Communication으로 연동했으며, 로컬 DB와 Supabase를 함께 사용해 오프라인/온라인 데이터를 관리합니다.",
      result:
        "현장에서 바로 사용할 수 있는 입·출고 · 중량 · 사진 기록 통합 관리 프로그램을 구축해가고 있습니다.",
      learned:
        "실무 현장의 실제 작업 방식을 직접 관찰하고 반영하는 것이 소프트웨어 완성도에 얼마나 큰 영향을 주는지 배우고 있습니다.",
    },
  },

  {
    id: "re-route",
    slug: "reroute",
    featured: true,
    tags: ["DEVELOPMENT", "PLANNING", "AI", "WEB"],
    title: "Re-Route",
    tagline: "AI 기반 회복탄력성 지원 플랫폼",
    period: "2026.05.02 - 2026.06.17",
    status: null,
    team: "1인 프로젝트 (기획 · 백엔드 개발)",
    role: "Planning · Backend Development",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "REST API",
      "OpenAI API",
      "Swagger",
    ],
    cover: img("reroute", "cover.png"),
    links: {
      github: "https://github.com/tpfls6/Re-Route",
      demo: "",
    },
    roleContent: {
      developer: {
        summary:
          "Spring Boot 기반 백엔드에서 인증·보안 계층, OpenAI API 연동, 핵심 도메인 API를 구현했습니다.",
        points: [
          "Spring Security + JWT 기반 인증/인가 구조 구현",
          "OpenAI API를 연동한 AI 상담 · 회복 퀘스트 추천 로직 구현",
          "사용자 · 상담 기록 · 감정 데이터 · 퀘스트 도메인 및 MySQL 스키마 설계",
          "Swagger로 API 명세 정리 및 검증",
        ],
      },
      planner: {
        summary:
          "서비스 아이디어를 사업계획서로 구체화하고, AI 상담·감정 기록·회복 퀘스트로 이어지는 흐름을 설계했습니다.",
        points: [
          "타깃 사용자 정의 및 MVP 범위 설정",
          "AI 상담 → 감정 기록 → 퀘스트 추천 → VR 리허설로 이어지는 사용자 흐름 정의",
          "우선순위에 따라 확장 아이디어를 구현 가능한 MVP 범위로 좁히는 기획 정리",
        ],
      },
      pm: {
        summary: "1인 프로젝트로 기획부터 개발 일정, 인증 설계까지 스스로 관리했습니다.",
        points: [
          "타깃 사용자·핵심 기능 우선순위를 스스로 결정",
          "약 1.5개월의 짧은 기간 안에 기획 → 개발 → 검증 일정 관리",
          "인증/보안 관련 기술 의사결정(JWT 전략, 권한 구조) 주도",
        ],
      },
      qa: {
        summary:
          "회원 탈퇴·재가입, 인증 토큰 만료 등 실제로 발생 가능한 예외 상황을 직접 테스트하고 수정했습니다.",
        points: [
          "탈퇴 후 재가입 시 기존 개인정보가 남는 문제 발견 및 수정",
          "JWT 만료 시점의 동시 요청 처리 문제 발견 및 수정",
        ],
      },
    },
    media: [
      {
        src: img("reroute", "ai-counseling.png"),
        title: "AI 상담",
        description: "OpenAI API 기반으로 감정을 구조화하고 행동 과제를 제안하는 상담 화면.",
        section: "development",
      },
      {
        src: img("reroute", "vr-rehearsal.png"),
        title: "VR 마인드 리허설",
        description: "두려운 상황을 안전한 공간에서 미리 연습할 수 있도록 설계한 시나리오 기획.",
        section: "planning",
      },
      {
        src: img("reroute", "quest.png"),
        title: "퀘스트",
        description: "AI 상담·VR 리허설 결과로 생성되는 맞춤 퀘스트를 관리하는 화면.",
        section: "development",
      },
      {
        src: img("reroute", "golden-card.png"),
        title: "황금 카드",
        description: "완료한 퀘스트와 회고를 모아보는 화면.",
        section: "result",
      },
    ],
    qaCases: [
      {
        situation: "사용자가 탈퇴 후 동일 이메일로 재가입",
        expected: "기존 개인정보가 남아서는 안 됨",
        problem: "기존 사용자 row가 재사용되면서 이전 닉네임이 남는 문제 발견",
        fix: "탈퇴 데이터 처리 방식 수정",
        verification: "일반 가입 / Google 로그인 / 재가입 경우 모두 다시 테스트",
      },
      {
        situation: "JWT 액세스 토큰 만료 시점에 여러 API를 연속으로 요청",
        expected: "토큰이 만료되면 자동 갱신되거나 재로그인 안내가 나와야 함",
        problem: "만료 직후 여러 요청이 동시에 나가면서 일부만 401을 받아 화면 일부가 깨지는 현상 발견",
        fix: "Spring Security 필터에서 토큰 재발급 로직을 큐잉 처리하도록 수정",
        verification: "토큰 만료 시점 전후로 여러 요청을 동시에 보내는 시나리오로 재확인",
      },
    ],
    caseStudy: {
      overview: "감정과 고민을 정리하고 작은 실천으로 이어주는 AI 기반 자기회복 지원 서비스입니다.",
      problem:
        "감정과 고민을 정리하고 작은 실천으로 이어주는 자기회복 지원 서비스가 필요하다고 판단해 기획부터 개발까지 혼자 진행했습니다.",
      myRole: "서비스 기획과 사업계획서 작성, Spring Security·JWT 기반 백엔드 개발을 모두 담당했습니다.",
      planning:
        "사업계획서를 작성해 타깃 사용자·핵심 기능·MVP 범위를 정리하고, AI 상담·감정 기록·퀘스트 추천·VR 리허설을 중심으로 설계했습니다.",
      development:
        "Spring Boot로 사용자·상담 기록·감정 데이터·퀘스트 구조를 설계하고, Spring Security와 JWT로 인증/인가를, OpenAI API로 AI 상담 기능을 구현했습니다.",
      qa: "회원 탈퇴/재가입, 인증 토큰 만료 등 실제 사용에서 발생할 수 있는 예외 상황을 직접 테스트했습니다.",
      improvements: "발견한 문제는 원인이 되는 처리 로직을 수정하고, 관련된 모든 가입/로그인 경로를 다시 테스트했습니다.",
      architecture:
        "Spring Boot 백엔드가 MySQL에 사용자·상담·감정·퀘스트 데이터를 저장하고, OpenAI API와 통신해 AI 상담 응답을 생성하는 구조입니다.",
      result: "AI 상담 기반 자기회복 지원 서비스의 인증 체계를 포함한 백엔드 기능을 완성했습니다.",
      learned:
        "인증/보안 로직을 서비스 도메인에 맞게 설계하는 경험과, 짧은 기간 안에 기획부터 개발까지 책임지고 완성하는 과정을 배웠습니다.",
    },
  },

  // ── Archive 전용 (대표 프로젝트는 아니지만 기록으로 남기는 프로젝트) ──
  {
    id: "expo",
    slug: "expo",
    featured: false,
    tags: ["DEVELOPMENT", "PLANNING", "WEB", "ETC"],
    title: "Expo 컴퓨터 비전 AI",
    tagline: "손 재활 · 발달 플랫폼 프로젝트",
    period: "2024.06 - 2024.10",
    status: null,
    team: "학교 동아리 팀 프로젝트",
    role: "프론트엔드 개발",
    techStack: ["React", "TypeScript", "Chart.js", "TailwindCSS", "Spring Boot", "Unity", "Figma"],
    cover: img("expo", "cover.png"),
    links: {
      github: "https://github.com/orgs/2024-dmu-expo-el/repositories",
    },
    roleContent: {
      developer: {
        summary: "React로 기록 분석 페이지와 그래프 시각화, UI 레이아웃을 구현했습니다.",
        points: ["Chart.js 기반 손 동작 분석 그래프 시각화 구현", "Unity 게임과 연동되는 웹 UI 구현"],
      },
      planner: {
        summary: "전체 UX 흐름과 주요 화면을 Figma로 설계해 게임과 웹을 자연스럽게 연결했습니다.",
        points: ["게임 ↔ 웹 서비스가 이어지는 사용자 흐름 설계", "Figma 기반 주요 화면 IA 설계"],
      },
      pm: {
        summary: "교내 EXPO 전시를 목표로 팀 일정과 발표 자료를 함께 준비했습니다.",
        points: ["EXPO 전시 · 발표 일정에 맞춘 개발 진행", "교내 EXPO 대상 수상"],
      },
      qa: {
        summary: "손 동작 인식 데이터가 게임과 웹 양쪽에 정확히 반영되는지 확인했습니다.",
        points: ["동작 인식 오차가 큰 경우 그래프 표시 예외 처리 확인", "게임-웹 연동 시 세션 불일치 케이스 점검"],
      },
    },
    media: [
      {
        src: img("expo", "games.png"),
        title: "Unity 미니게임 모음",
        description: "손 동작 인식으로 조작하는 재활용 미니게임들.",
        section: "development",
      },
    ],
    caseStudy: {
      overview: "컴퓨터 비전으로 손 동작을 인식해 Unity 게임과 웹에서 분석·시각화하는 플랫폼입니다.",
      problem: "손 재활·발달을 돕는 콘텐츠가 동작을 재미있게 인식·분석해주지 못한다는 문제의식에서 시작했습니다.",
      development: "React로 기록 분석 페이지와 그래프 시각화, UI 레이아웃을 구현하고, Figma로 전체 UX 흐름을 설계했습니다.",
      result: "컴퓨터 비전 기반 플랫폼을 완성해 교내 EXPO에서 대상을 수상했습니다.",
      learned: "게임과 웹처럼 서로 다른 플랫폼을 하나의 경험으로 연결하려면 초기 UX 설계가 중요하다는 것을 배웠습니다.",
    },
  },
  {
    id: "el-winter",
    slug: "feed-coder",
    featured: false,
    tags: ["DEVELOPMENT", "WEB"],
    title: "Feed Coder",
    tagline: "개발자 커뮤니티 플랫폼",
    period: "2025.01 - 2025.02",
    status: null,
    team: "학교 동아리 팀 프로젝트",
    role: "프론트엔드 개발",
    techStack: ["React", "Express", "MySQL", "Docker", "GCP", "JWT", "TailwindCSS"],
    cover: img("el-winter", "cover.png"),
    links: {
      github: "https://github.com/tpfls6/EL-Project_Front",
    },
    roleContent: {
      developer: {
        summary: "기능 단위 폴더 구조와 재사용 가능한 UI 컴포넌트로 커뮤니티 플랫폼을 구현했습니다.",
        points: ["공통 레이아웃 · 사이드바 · 헤더 · 리스트/상세 페이지 구현", "기능별 폴더 분리로 유지보수성 확보"],
      },
      planner: {
        summary: "개발자들이 질문·답변으로 성장하는 커뮤니티 흐름을 설계했습니다.",
        points: ["질문 → 답변 → 코드 리뷰로 이어지는 커뮤니티 흐름 정의"],
      },
      pm: {
        summary: "팀원 간 코드 리뷰 환경을 함께 고려하며 개발을 진행했습니다.",
        points: ["팀 코드 컨벤션 및 협업 방식 조율"],
      },
      qa: {
        summary: "질문/답변 작성 흐름에서 발생할 수 있는 입력 예외를 점검했습니다.",
        points: ["빈 제목/본문으로 등록을 시도할 때의 검증 처리 확인", "작성 중 새로고침 시 입력 데이터 유실 여부 점검"],
      },
    },
    media: [],
    caseStudy: {
      overview: "개발자들이 질문·답변을 통해 함께 성장할 수 있는 커뮤니티 플랫폼입니다.",
      development: "실제 개발 환경과 유사하게 폴더를 기능별로 분리하고, UI 요소를 모듈화해 재사용성을 높였습니다.",
      result: "누구나 참여해 코딩 관련 문제를 공유·해결할 수 있는 커뮤니티 플랫폼을 완성했습니다.",
      learned: "반복되는 로직을 추상화하고 폴더 구조를 기능 단위로 나누는 것이 유지보수성과 확장성에 큰 영향을 준다는 것을 체감했습니다.",
    },
  },
  {
    id: "contest-app",
    slug: "pulteogi",
    featured: false,
    tags: ["DEVELOPMENT", "PLANNING", "MOBILE"],
    title: "풀떼기",
    tagline: "환경 보호 리워드 앱",
    period: "2024.07 - 2024.09",
    status: null,
    team: "교내 경진대회 팀 프로젝트",
    role: "앱 프론트엔드 개발 · 백엔드 API 테스트 및 일부 설계",
    techStack: ["React Native", "Expo", "Spring Boot", "JPA", "MySQL", "AWS EC2"],
    cover: img("contest-app", "cover.png"),
    links: {
      github: "https://github.com/2024-team-grass",
    },
    roleContent: {
      developer: {
        summary: "React Native 앱 화면 구현과 Spring Boot API 연동을 담당했습니다.",
        points: ["온보딩 · 메인 · 활동 기록 · 리워드 · 마이페이지 화면 구현", "활동 등록 · 포인트 조회 API 연동"],
      },
      planner: {
        summary: "분리수거 실천을 지속시키는 리워드 흐름을 기획했습니다.",
        points: ["활동 기록 → 포인트 적립 → 리워드로 이어지는 흐름 설계"],
      },
      pm: {
        summary: "경진대회 일정에 맞춰 팀 개발 범위를 조율했습니다.",
        points: ["경진대회 발표 일정에 맞춘 MVP 범위 조정", "교내 경진대회 장려상 수상"],
      },
      qa: {
        summary: "장바구니·결제 금액 계산과 게시물 등록 흐름의 예외 케이스를 직접 확인했습니다.",
        points: [
          "장바구니 수량 조작 시 음수 금액 표시 문제 발견 및 수정",
          "무료배송 기준 금액 근처에서 배송비 미갱신 문제 발견 및 수정",
        ],
      },
    },
    media: [
      {
        src: img("contest-app", "post.png"),
        title: "활동 게시물",
        description: "분리수거 인증 게시물을 올리고 포인트를 적립하는 피드 화면.",
        section: "development",
      },
      {
        src: img("contest-app", "product.gif"),
        title: "상품 구매 플로우",
        description: "상품 목록에서 상세로 이어지는 실제 동작 화면.",
        section: "development",
        type: "gif",
      },
      {
        src: img("contest-app", "cart.png"),
        title: "장바구니",
        description: "수량 변경 시 금액이 정확히 재계산되는지 검증한 화면.",
        section: "qa",
      },
      {
        src: img("contest-app", "order.png"),
        title: "주문 / 결제",
        description: "무료배송 기준과 배송비 계산 로직을 검증한 결제 화면.",
        section: "qa",
      },
      {
        src: img("contest-app", "erd.png"),
        title: "ERD",
        description: "사용자 · 게시물 · 장바구니 · 주문 · 배송 데이터를 연결한 데이터베이스 구조.",
        section: "architecture",
      },
      {
        src: img("contest-app", "architecture.png"),
        title: "System Architecture",
        description: "React Native 앱 · Spring Boot API · MySQL/RDS로 구성된 전체 시스템 구조.",
        section: "architecture",
      },
    ],
    qaCases: [
      {
        situation: "장바구니에서 수량 감소 버튼을 상품 수량이 1일 때 계속 누름",
        expected: "수량은 최소 1 이상으로 유지되거나, 0이 되면 항목이 제거되어야 함",
        problem: "수량이 음수까지 내려가면서 총 금액도 음수로 표시되는 문제 발견",
        fix: "수량 최소값을 1로 제한하고, 0 이하로 내려가면 삭제 확인 모달로 전환",
        verification: "여러 상품을 동시에 담고 수량을 반복적으로 늘리고 줄이는 시나리오로 재확인",
      },
      {
        situation: "결제 화면에서 총 상품 금액이 무료배송 기준(40,000원)에 정확히 도달",
        expected: "기준 금액 도달 시 배송비가 자동으로 0원으로 반영되어야 함",
        problem: "금액이 기준값과 정확히 같을 때 배송비가 갱신되지 않고 이전 값이 남는 문제 발견",
        fix: "총액이 바뀔 때마다 배송비를 다시 계산하도록 로직 수정",
        verification: "기준값보다 낮은 금액 / 정확히 같은 금액 / 높은 금액 세 가지 조건으로 재테스트",
      },
    ],
    caseStudy: {
      overview: "분리수거 실천을 리워드로 이어주는 환경 보호 앱입니다.",
      problem: "환경 보호를 위한 분리수거 실천을 꾸준히 이어가게 만들 동기부여 장치가 부족하다는 문제에서 출발했습니다.",
      development: "핵심 화면과 UI 흐름을 설계하고, Spring Boot 백엔드와 활동 등록·포인트 조회 API 연동을 담당했습니다.",
      qa: "장바구니 수량, 배송비 계산 등 결제와 직결되는 로직을 중심으로 예외 케이스를 검증했습니다.",
      architecture: "React Native 앱이 Spring Boot API를 통해 MySQL(Amazon RDS)에 저장된 사용자·상품·주문 데이터를 주고받는 구조입니다.",
      result: "분리수거 실천을 리워드로 이어주는 앱을 완성해 교내 경진대회에서 장려상을 받았습니다.",
      learned: "프론트엔드 구현뿐 아니라 API 설계·테스트까지 함께 맡으며 서비스 전체 흐름을 이해하는 경험을 쌓았습니다.",
    },
  },
  {
    id: "25-hanium-navis",
    slug: "navis",
    featured: false,
    tags: ["DEVELOPMENT", "PLANNING", "PM", "WEB"],
    title: "Navis",
    tagline: "AI 기반 애자일 프로젝트 관리 솔루션 (한이음 프로젝트)",
    period: "2025.03.02 - 2025.11.02",
    status: null,
    team: "프론트엔드 3명 · 백엔드 2명",
    role: "Frontend · UI/UX · QA",
    techStack: ["JavaScript", "React", "MUI", "Axios", "REST API", "Figma", "GitHub", "Notion"],
    cover: img("hanium-navis", "cover.png"),
    links: {
      github: "https://github.com/tpfls6/Navis-Frontend",
      demo: "",
    },
    roleContent: {
      developer: {
        summary: "React 컴포넌트 구조와 커스텀 훅으로 API 연동 화면을 구현했습니다.",
        points: [
          "프로젝트 생성 · 목록 조회 · 상세 정보 입력 화면 구현",
          "칸반 보드 · 캘린더 · 스프린트 관리 화면 구현",
          "API 연동과 상태 관리를 커스텀 훅으로 분리",
        ],
      },
      planner: {
        summary: "일정·업무 배치·리스크 관리를 돕는 화면 흐름을 설계했습니다.",
        points: [
          "요구사항 수집 → 태스크/스프린트 생성 → 일정 시각화 → 진행 추적 → 자동 재조정으로 이어지는 서비스 흐름 설계",
          "목표 · 팀 정보 · 요구사항 입력 단계별 화면 설계",
          "Figma 기반 화면 설계 및 검토",
        ],
      },
      pm: {
        summary: "5인 팀에서 QA를 담당하며 진행 상황을 관리했습니다.",
        points: ["팀 규모: 프론트엔드 3명 · 백엔드 2명", "요구사항 진행도 · 이슈 로그로 팀 진행 상황 공유"],
      },
      qa: {
        summary: "스프린트, 칸반 보드 등 여러 기능이 얽히는 화면에서 데이터 정합성을 직접 검증했습니다.",
        points: [
          "동일 이름 스프린트 중복 생성 문제 발견 및 수정",
          "칸반 카드 이동 후 API 실패 시 상태 롤백 처리 추가",
        ],
      },
    },
    media: [
      {
        src: img("hanium-navis", "service-flow.png"),
        title: "서비스 흐름도",
        description: "요구사항 수집부터 일정 자동 조정까지 이어지는 5단계 서비스 흐름 설계.",
        section: "planning",
      },
      {
        src: img("hanium-navis", "team.png"),
        title: "팀 구성",
        description: "프론트엔드/백엔드 팀 구성과 담당자를 정리하는 화면.",
        section: "planning",
      },
      {
        src: img("hanium-navis", "summary.png"),
        title: "요약 대시보드",
        description: "이슈·팀·스프린트·캘린더·진행도를 한 화면에서 보여주는 요약 뷰.",
        section: "development",
      },
      {
        src: img("hanium-navis", "sprint.png"),
        title: "스프린트 관리",
        description: "팀별 스프린트와 백로그를 관리하는 화면.",
        section: "development",
      },
      {
        src: img("hanium-navis", "calendar.png"),
        title: "캘린더",
        description: "스프린트 일정을 월/주/일 단위로 확인하는 캘린더 화면.",
        section: "development",
      },
      {
        src: img("hanium-navis", "board.png"),
        title: "칸반 보드",
        description: "대기중 · 진행중 · 검토중 상태 전환을 검증한 칸반 보드 화면.",
        section: "qa",
      },
      {
        src: img("hanium-navis", "issue.png"),
        title: "이슈 로그",
        description: "생성·수정·삭제 이력을 추적할 수 있는 이슈 로그 화면.",
        section: "qa",
      },
      {
        src: img("hanium-navis", "progress.png"),
        title: "요구사항 진행도",
        description: "요구사항별 진행률을 시각화한 화면.",
        section: "result",
      },
      {
        src: img("hanium-navis", "architecture.png"),
        title: "System Architecture",
        description: "React 프론트엔드와 백엔드 API, 데이터 저장 구조를 연결하는 전체 구성도.",
        section: "architecture",
      },
    ],
    qaCases: [
      {
        situation: "스프린트를 생성한 뒤 동일한 이름으로 다시 생성 시도",
        expected: "중복된 스프린트 이름은 생성 단계에서 안내되어야 함",
        problem: "프론트 폼에 유효성 검사가 없어 동일한 이름의 스프린트가 중복 생성되는 문제 발견",
        fix: "생성 전 이름 중복 여부를 확인하는 API 호출을 추가하고 에러 메시지를 노출",
        verification: "동일 이름 / 공백 이름 / 특수문자 이름으로 각각 재테스트",
      },
      {
        situation: "칸반 보드에서 카드를 다른 상태로 옮긴 직후 새로고침",
        expected: "변경한 상태가 새로고침 후에도 유지되어야 함",
        problem: "상태 변경 API 호출 전에 화면을 먼저 낙관적으로 업데이트해서, API가 실패하면 새로고침 시 원래 상태로 되돌아가는 문제 발견",
        fix: "API 성공 응답을 받은 뒤에만 상태를 확정하고, 실패 시 이전 상태로 롤백하며 에러 토스트를 표시하도록 수정",
        verification: "네트워크 지연·실패를 재현해 카드 이동 시나리오를 다시 확인",
      },
    ],
    caseStudy: {
      overview: "AI가 일정·업무 배치·리스크 요소를 제안하는 애자일 프로젝트 관리 솔루션입니다.",
      problem: "프로젝트 기획과 협업 과정에서 반복되는 일정·업무 배치·리스크 관리를 체계적으로 도와줄 도구가 필요했습니다.",
      myRole: "프론트엔드 화면 구현과 UI/UX, 그리고 팀의 QA를 담당했습니다.",
      planning: "요구사항 수집부터 일정 자동 조정까지 이어지는 5단계 서비스 흐름을 Figma로 설계했습니다.",
      development:
        "React 기반으로 요약 대시보드, 스프린트, 칸반 보드, 캘린더 등 주요 화면을 컴포넌트 단위로 구현했으며, API 연동과 상태 관리를 커스텀 훅으로 분리했습니다.",
      qa: "칸반 보드와 스프린트처럼 여러 기능이 얽히는 화면을 중심으로 데이터 정합성과 예외 케이스를 검증했습니다.",
      improvements: "발견한 문제는 API 호출 순서와 실패 시 롤백 처리를 중심으로 수정하고, 관련 시나리오를 다시 테스트했습니다.",
      architecture: "React 프론트엔드가 REST API를 통해 백엔드와 통신하며, 프로젝트·스프린트·이슈 데이터를 주고받는 구조입니다.",
      result: "AI가 일정·업무 배치·리스크 요소를 제안하는 애자일 PMS의 핵심 화면을 완성했습니다.",
      learned: "컴포넌트 분리와 구조 설계가 유지보수성에 큰 영향을 준다는 것과, QA로 완성도를 높여야 한다는 것을 배웠습니다.",
    },
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByFilter(filter) {
  if (!filter || filter === "ALL") return projects;
  return projects.filter((p) => p.tags.includes(filter));
}
