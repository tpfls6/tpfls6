const img = (file) => `/projects/stockmate/${file}`;

export const STOCKMATE_HERO = {
  title: "StockMate",
  headline: "AI 개인 맞춤형 투자 학습 및 모의투자 플랫폼",
  desc: "사용자의 투자 성향과 학습 수준에 맞춘 학습 콘텐츠를 제공하고, 모의투자를 통해 배운 내용을 직접 적용해볼 수 있는 서비스입니다.",
  period: "2026.03 — 2026.11",
  team: "3명",
  facts: [
    { label: "기간", value: "2026.03 — 2026.11" },
    { label: "팀 구성", value: "3명" },
    { label: "포지션", value: "팀장" },
  ],
  roleTags: ["서비스 기획", "사용자 흐름", "팀 리딩", "QA", "개발 참여"],
  detailRoleTags: [
    "서비스 기획",
    "사용자 흐름 설계",
    "팀 리딩",
    "QA",
    "프론트엔드 전담",
    "백엔드 일부 개발",
  ],
  shots: [
    { src: img("cover.png"), title: "대시보드" },
    { src: img("learning-overview.png"), title: "투자 학습" },
    { src: img("stock-detail.png"), title: "종목 상세" },
  ],
};

export const STOCKMATE_PROBLEM = {
  title: [
    "초보자가 투자 학습을 이어가기엔",
    "여전히 어려움이 많았습니다.",
  ],
  items: [
    "무엇부터 배워야 할지 알기 어려운 방대한 투자 정보",
    "이해도와 약점에 맞춰 학습하기 어려운 획일적인 학습 방식",
    "배운 내용을 실제로 적용해볼 기회가 부족한 학습과 실전의 단절",
  ],
  direction:
    "그래서 개인 맞춤 학습, 주식 특화 AI 분석, 모의투자 실습이 이어지는 경험을 설계했습니다.",
};

export const STOCKMATE_FLOW = {
  steps: ["학습", "퀴즈", "종목 탐색", "AI 분석", "모의투자", "결과 확인"],
  caption:
    "학습한 내용을 바로 종목 탐색과 모의투자로 연결할 수 있도록 전체 경험을 설계했습니다.",
};

export const STOCKMATE_CORE = [
  {
    title: "학습과 투자 경험 연결",
    problem: "학습 이후 실제 종목에 적용하기 어려움",
    decision: "학습 직후 실제 데이터를 확인하고 투자해보는 경험이 필요",
    solution: "학습 → 종목 탐색 → AI 분석 → 모의투자로 연결",
  },
  {
    title: "초보자를 위한 종목 정보 구조",
    problem: "기존 투자 서비스는 정보량이 많아 초보자가 판단하기 어려움",
    decision: "모든 정보를 보여주기보다 필요한 정보를 먼저 보여줄 필요",
    solution: "핵심 정보와 AI 분석 중심으로 종목 상세 화면 구성",
  },
  {
    title: "반복 학습 보상 정책",
    problem: "이미 맞힌 문제를 반복해서 풀어도 동일한 보상을 받을 수 있음",
    decision: "복습은 가능하게 하되 보상은 무한 반복되지 않아야 함",
    solution: "오답 재도전 후 정답 시에만 보상 지급",
  },
];

export const STOCKMATE_FEATURES = [
  {
    title: "학습",
    chain: "개념 → 퀴즈 → 오답 복습",
    note: "배운 개념을 퀴즈로 확인하고, 틀린 부분만 다시 학습할 수 있게 했습니다.",
    image: { src: img("learning-overview.png"), title: "투자 학습" },
  },
  {
    title: "종목 탐색",
    chain: "검색 → 상세 정보 → AI 분석",
    note: "초보자가 먼저 봐야 할 정보와 AI 해석을 중심으로 종목 화면을 구성했습니다.",
    image: { src: img("stock-detail.png"), title: "종목 상세" },
  },
  {
    title: "모의투자",
    chain: "매수/매도 → 보유 자산 → 수익률",
    note: "학습한 내용을 가상 자산으로 실행하고, 결과까지 한 흐름에서 확인하게 했습니다.",
    image: { src: img("invest-dashboard.png"), title: "모의투자" },
  },
];

export const STOCKMATE_VERIFY = [
  {
    title: "탈퇴 후 재가입",
    found: "탈퇴 후 같은 이메일로 재가입 시 충돌 발생",
    cause: "기존 이메일과 닉네임 데이터가 유지됨",
    fix: "탈퇴 시 식별값을 변경해 재사용 가능하도록 수정",
    before: "이메일·닉네임이 남아 재가입이 막힘",
    after: "식별값 변경 후 같은 정보로 재가입 가능",
  },
  {
    title: "신규 사용자 온보딩",
    found: "처음 이용하는 사용자가 주요 기능 위치와 서비스 흐름을 이해하기 어려움",
    fix: "주요 기능을 따라가는 단계형 튜토리얼과 도움말 추가",
    image: { src: img("learning-personalized.png"), title: "온보딩이 이어지는 학습 화면" },
  },
];

export const STOCKMATE_CLOSE = {
  results: [
    "학습부터 모의투자까지 전체 사용자 흐름 구축",
    "투자 성향 기반 온보딩 구성",
    "AI 분석과 종목 탐색 경험 연결",
    "QA와 베타테스트를 통한 서비스 정책 개선",
  ],
  collab: ["Figma", "Notion", "GitHub", "Swagger", "Postman"],
  retro:
    "기능을 많이 만드는 것보다 사용자가 서비스를 어떤 순서로 경험하는지가 더 중요하다는 것을 배웠습니다. 이후 기능을 추가할 때도 개별 화면보다 전체 사용자 흐름과 예외 상황을 먼저 확인했습니다.",
};

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
