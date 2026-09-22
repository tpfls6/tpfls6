// StockMate 상세에 쓰던 기존 포트폴리오 서술. 새 내용을 만들지 않고 재배치만 한다.

export const STOCKMATE_OVERVIEW = [
  {
    title: "무슨 프로젝트?",
    headline: "주식 초보자를 위한 AI 기반 투자 학습·모의투자 플랫폼",
    desc: "투자 개념 학습부터 AI 분석, 모의투자까지 하나의 흐름으로 경험할 수 있도록 설계한 서비스입니다.",
  },
  {
    title: "왜 만들었나?",
    headline: "학습과 실제 투자 경험 사이의 간극을 줄이기 위해 시작했습니다.",
    desc: "투자 초보자가 개념을 공부한 뒤 이를 실제 투자 상황에 어떻게 적용해야 하는지 연습할 수 있는 환경을 만들고자 했습니다.",
  },
  {
    title: "핵심 구현",
    headline: "학습 → 분석 → 투자로 이어지는 사용자 흐름을 구현했습니다.",
    desc: "React·TypeScript 기반 Frontend와 NestJS·MySQL·Redis 기반 Backend를 연결하고 AI 분석과 모의투자 기능을 통합했습니다.",
  },
  {
    title: "현재 결과",
    headline: "기능 중심의 프로토타입에서 하나의 서비스 흐름을 가진 플랫폼으로 발전시키고 있습니다.",
    desc: "베타테스트와 QA를 반복하며 회원, 학습, AI, 모의투자 등 주요 기능을 실제 사용자 흐름 기준으로 개선하고 있습니다.",
  },
];

export const STOCKMATE_FEATURES = [
  ["회원 / Authentication", "사용자 계정과 인증 흐름을 관리합니다.", ["일반 회원가입", "로그인 / 로그아웃", "이메일 인증", "Google 로그인", "회원 정보 관리", "회원 탈퇴"]],
  ["투자 학습 / Learning", "투자 초보자가 단계적으로 개념을 학습할 수 있도록 구성했습니다.", ["초급 / 중급 / 고급 단계별 학습", "개인별 맞춤 학습", "투자 개념 학습", "카테고리별 학습", "개인별 학습 진행도 관리", "퀴즈", "학습 결과 확인"]],
  ["종목 / Stock", "투자 판단에 필요한 종목 정보를 탐색할 수 있습니다.", ["종목 검색", "종목 상세 정보", "주가 데이터 조회", "실시간 종목 정보", "관심 종목 관리"]],
  ["AI", "사용자가 투자 개념과 종목 정보를 쉽게 이해할 수 있도록 AI 기능을 제공합니다.", ["AI 채팅", "투자 학습 지원", "AI 질문 생성", "종목 분석", "대화 기록 관리"]],
  ["모의투자 / Simulation", "실제 자산을 사용하지 않고 투자 흐름을 연습할 수 있습니다.", ["가상 투자 계좌", "매수 / 매도", "보유 종목", "거래 내역", "투자 수익률", "자산 현황"]],
  ["랭킹 · 커뮤니티", "투자 결과를 확인하고 다른 사용자와 경험을 공유할 수 있습니다.", ["투자 성과 기반 랭킹", "시즌 기반 랭킹", "사용자 커뮤니티", "투자 관련 정보 공유"]],
];

export const STOCKMATE_ROLES = [
  ["Frontend", "주요 화면 구현과 Backend API 연동을 담당했습니다.", ["React / TypeScript 기반 주요 화면 구현", "공통 UI Component 구현", "REST API 연동", "API Response 기반 화면 상태 처리", "사용자 입력 및 상태 관리", "Error / Loading / Empty State 처리", "UI/UX 개선", "Frontend 오류 분석 및 수정"]],
  ["Planning / PM", "서비스 기능 정의부터 사용자 흐름과 팀 일정까지 전체 프로젝트 흐름을 관리했습니다.", ["서비스 주요 기능 정의", "사용자 흐름 설계", "기능 우선순위 관리", "Figma 화면 설계", "팀원 역할 분담", "일정 및 진행 상황 관리", "회의 진행 및 회의록 작성", "개발 범위 조정", "팀원 간 의견 조율"]],
  ["Backend", "일부 Backend 기능 구현과 Frontend 연동 과정의 데이터 흐름을 확인했습니다.", ["User CRUD 및 회원 상태 처리", "모의투자 / 주식 데이터 기능 구현", "커뮤니티 / 랭킹 / 뉴스 기능 구현", "알림 기능 및 Notification 연동", "REST API 및 DB 데이터 흐름 검증", "인증 / API 오류 분석 및 수정", "Swagger 기반 API 테스트", "Frontend와 Backend 데이터 Type 검증"]],
  ["QA", "단순 정상 동작 확인이 아니라 실제 사용 상황을 가정한 통합 QA를 진행했습니다.", ["회원가입 / 로그인 / 로그아웃", "Google 로그인", "회원 탈퇴 / 재가입", "권한 없는 API 요청", "사용자 상태별 화면 검증", "API Response와 UI 데이터 비교", "학습 / 퀴즈 / 관심 종목 검증", "AI API 오류 검증", "모의투자 데이터 검증", "정상 / 예외 / 반복 사용 Case 설계"]],
];

export const STOCKMATE_TROUBLESHOOTING = [
  {
    title: "회원 탈퇴 후 재가입 데이터 문제",
    problem: "회원 탈퇴 후 동일한 이메일로 재가입하거나 Google 로그인을 시도할 때 이전 계정의 닉네임과 전화번호가 남을 가능성이 있었습니다.",
    cause: "기존 탈퇴 로직에서는 사용자 상태만 DELETED로 변경하고 이메일, 닉네임 등 식별 정보가 그대로 남아 있었습니다.",
    solution: ["탈퇴 시 이메일과 닉네임을 deleted-* 형태로 변경", "기존 개인정보 식별값 해제", "Legacy DELETED 사용자 처리", "일반 재가입 시 새로운 사용자 정보 적용", "Google 로그인 시 탈퇴 사용자 처리 검토", "일반 로그인에서 status / ban_until 검증", "닉네임 중복 확인 로직 수정"],
    result: "일반 가입 → 로그인 → 탈퇴 → 재가입 → Google 로그인까지 전체 흐름을 다시 QA하여 계정 상태에 따라 올바르게 동작하도록 개선했습니다.",
  },
  {
    title: "Frontend와 Backend 통합 과정의 API 오류",
    problem: "서비스 통합 과정에서 401, 404, 500 Error와 Frontend / Backend Type 불일치 문제가 반복적으로 발생했습니다.",
    cause: "요청 URL, 인증 헤더, Request Body, Controller, Service Logic, Response Type 중 어느 한 지점만 봐서는 원인 분리가 어려웠습니다.",
    solution: ["Frontend 요청 URL", "HTTP Method", "Authorization Header", "Request Body", "Backend Controller", "Service Logic", "실제 API Response", "Frontend Type", "Rendering 결과", "수정 후 전체 사용자 흐름 재검증"],
    result: "요청부터 렌더링까지 단계적으로 확인하는 디버깅 방식을 정립했습니다.",
  },
  {
    title: "많은 기능을 하나의 사용자 흐름으로 연결",
    problem: "회원, 학습, 종목, AI, 모의투자, 랭킹, 커뮤니티 등 여러 기능이 개별적으로 동작하면 하나의 서비스처럼 느껴지기 어려웠습니다.",
    cause: "기능 단위 구현은 충분했지만 사용자가 다음 행동으로 이동하는 경로와 화면 간 연결성이 약했습니다.",
    solution: ["사용자 시나리오 정리", "화면 흐름 재검토", "기능 간 이동 경로 정리", "기능 우선순위 설정", "데이터 전달 구조 확인", "QA 결과 기반 UI 개선", "학습 → 종목 → AI → 모의투자 흐름 연결"],
    result: "개별 기능 중심의 구조에서 하나의 서비스 안에서 자연스럽게 다음 행동으로 이동할 수 있는 구조로 개선했습니다.",
  },
];

export const STOCKMATE_RETROSPECTIVE =
  "StockMate를 개발하면서 여러 기능을 하나의 서비스 안에 자연스럽게 연결하기 위해서는 단순히 기능을 구현하는 것뿐만 아니라 전체 사용자 흐름과 각 기능 간의 조화를 함께 고민해야 한다는 점을 배웠습니다.\n\n특히 사용자가 조금이라도 더 편리하게 서비스를 이용할 수 있도록 화면 구성과 기능 이동 흐름을 사용자 관점에서 계속 검토하면서 UX의 중요성을 크게 느꼈습니다.\n\n또한 팀장으로서 역할 분담, 일정 관리, 회의록과 보고서 작성, QA 결과 정리 등을 담당하면서 개발 역량뿐만 아니라 팀원 간의 정보를 정리하고 프로젝트 전체 진행 상황을 파악하는 능력도 서비스 완성도에 큰 영향을 준다는 것을 경험했습니다.\n\n프로젝트를 처음 설계할 때는 이전 프로젝트에서 경험했던 시행착오를 반복하지 않기 위해 가능한 여러 상황과 예외 케이스를 미리 생각하며 기능을 정리하려고 했습니다.\n\n예상보다 많은 경우의 수를 고려해야 해 어려움도 있었지만, 그 과정을 통해 실제 사용자 관점에서 발생할 수 있는 문제를 조금 더 꼼꼼하게 바라볼 수 있게 되었습니다.";

export const STOCKMATE_ROLE_TAGS = {
  Planning: ["Service Flow", "Feature Planning", "Figma", "Schedule"],
  Frontend: ["Dashboard", "Learning", "Stock", "Simulation", "Community"],
  Backend: ["User", "Simulation", "Community", "Ranking", "News", "Notification"],
  QA: ["Authentication", "API", "Edge Case", "Integration Test"],
  AI: ["Analysis", "Question", "Integration"],
};

export const STOCKMATE_USER_FLOW = [
  "01 LEARN|투자 개념 학습",
  "02 QUIZ|이해도 확인",
  "03 EXPLORE|종목 탐색",
  "04 ANALYZE|AI 분석",
  "05 INVEST|모의투자",
  "06 REVIEW|수익률 및 결과 확인",
];

export const STOCKMATE_TECH_ROWS = [
  ["Frontend", "React, TypeScript, Axios"],
  ["Backend", "NestJS, REST API, Swagger"],
  ["Database", "MySQL, Redis"],
  ["Infrastructure", "AWS EC2, Vercel, Docker"],
  ["Collaboration", "Git, GitHub, Notion, Figma, Swagger, Postman, Discord, KakaoTalk"],
];
