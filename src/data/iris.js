const img = (file) => `/projects/iris/${file}`;

export const IRIS_HERO = {
  title: "IRIS",
  headline: "오픈소스 기반 확장형 AI Agent 및 IDE 환경",
  desc: "AI Agent 사용 비용의 부담을 낮추고, MCP·Skill·오픈소스 도구를 연결해 사용자의 목적에 맞게 확장할 수 있도록 설계한 AI 활용 환경입니다. 개발자에게는 프로젝트 탐색, 파일 수정, 실행 등의 IDE 작업을 연결합니다.",
  facts: [
    { label: "기간", value: "2026.08 — 진행 중" },
    { label: "상태", value: "진행 중" },
    { label: "참여", value: "중간 합류" },
  ],
  detailRoleTags: [
    "기능 기획",
    "사용자 흐름 설계",
    "Developer UX",
    "IDE 연동",
    "QA",
    "개발",
  ],
  shots: [
    { src: img("splash.jpg"), title: "IRIS IDE — Open folder" },
    { src: img("workspace.jpg"), title: "IRIS 채팅 · 작업 화면" },
  ],
};

export const IRIS_PROBLEM = {
  title: [
    "AI 활용 능력의 중요성은 커졌지만,",
    "누구나 동일한 환경에서",
    "AI Agent를 경험하기는 어려웠습니다.",
  ],
  items: [
    ["상용 AI Agent의 비용 부담으로", "학생과 초보 사용자가 지속적으로 활용하기 어려움"],
    ["서비스마다 사용할 수 있는 도구가 정해져 있어", "사용 목적에 맞게 확장하기 어려움"],
    ["AI에게 질문한 뒤 실제 파일 수정이나 실행은", "다시 개발 환경에서 수행해야 하는 작업 단절이 존재"],
  ],
  direction: [
    "그래서 무료·오픈소스를 기반으로 AI Agent를 경험하고,",
    "필요한 도구를 연결해 자신의 작업 환경으로 확장할 수 있는 구조를 목표로 했습니다.",
  ],
};

export const IRIS_FLOW = {
  title: ["대화에서 끝나지 않고", "실제 작업까지 이어지는 경험을 구성했습니다."],
  lanes: [
    {
      label: "대화",
      steps: ["자연어 요청"],
    },
    {
      label: "Agent",
      steps: ["작업 판단", "Tool 실행"],
    },
    {
      label: "IDE",
      steps: ["Open Folder", "파일 탐색 · 작성 · 수정", "Theia 반영"],
    },
    {
      label: "실행",
      steps: ["터미널 실행", "결과 확인"],
    },
  ],
  caption:
    "사용자가 직접 여러 도구를 오갈 필요 없이, AI 요청이 실제 개발 작업으로 이어지도록 연결하는 데 집중했습니다.",
};

export const IRIS_CORE = [
  {
    title: "오픈소스를 연결할 수 있는 확장 구조",
    scope: "project",
    scopeLabel: "프로젝트 방향",
    problem: "상용 AI Agent는 비용과 제공 기능의 제약으로 사용자가 자신의 목적에 맞게 환경을 구성하기 어려움",
    decision: "하나의 고정된 기능을 제공하기보다 MCP, Skill, 오픈소스 도구를 연결할 수 있는 구조가 필요",
    solution: "Agent가 외부 도구와 기능을 연결할 수 있도록 MCP / Skill 기반의 확장 구조를 프로젝트 방향으로 구성",
  },
  {
    title: "AI와 IDE의 작업 공간 연결",
    scope: "mine",
    scopeLabel: "나의 기여",
    problem: "IDE에서 프로젝트 폴더를 변경해도 Agent가 기존 workspace를 계속 참조하는 문제가 발생",
    decision: "IDE가 보고 있는 workspace와 Agent가 작업 대상으로 사용하는 workspace가 항상 동일해야 함",
    solution:
      "Theia 폴더 변경을 감지하고, Bridge workspace와 Python Runtime이 같은 경로를 기준으로 파일·실행을 수행하도록 동기화",
  },
  {
    title: "복잡한 AI 기능을 사용할 수 있는 UI로 정리",
    scope: "mine",
    scopeLabel: "나의 기여",
    problem: "Agent 기능이 많아질수록 사용자가 현재 작업과 결과를 이해하기 어려워짐",
    decision: "기능을 추가하는 것뿐 아니라 대화, 파일, IDE, 실행 결과가 자연스럽게 이어지는 UX가 중요",
    solution:
      "채팅에서 코드·diff·도구 실행 결과를 블록으로 구분하고, IDE Companion과 Open Folder 흐름이 끊기지 않게 인터페이스를 개선",
  },
];

export const IRIS_FEATURES = [
  {
    title: "AI Agent",
    scope: "project",
    chain: "자연어 요청 → Hermes 도구 호출 → 결과 스트리밍",
    note: "IRIS는 자체 모델 런타임을 다시 만들지 않고, Runtime Gateway가 세션을 담당하고 Hermes가 도구를 실행합니다.",
    items: ["자연어 작업 요청", "작업 판단", "Hermes Tool 실행", "실행 결과 반환", "Runtime Gateway"],
  },
  {
    title: "IDE 연동",
    scope: "mine",
    chain: "Open Folder → 파일 작업 → Theia 반영 → 터미널 실행",
    note: "중간 합류 이후 Agent 요청이 실제 폴더·파일·실행으로 이어지도록 Companion과 workspace 연결을 구체화했습니다.",
    items: ["프로젝트 열기", "파일 탐색 / 작성 / 수정", "코드 실행", "IDE Companion", "Workspace 동기화"],
    image: { src: img("splash.jpg"), title: "IRIS IDE" },
  },
  {
    title: "확장",
    scope: "project",
    chain: "MCP · Skill · Runtime Gateway",
    note: "고정 기능 집합이 아니라, 필요한 도구를 연결해 작업 환경을 넓힐 수 있는 구조를 프로젝트에서 갖추고 있습니다.",
    items: ["MCP (iris-control)", "Hermes Skill", "오픈소스 도구 연결", "Runtime Gateway"],
    image: { src: img("workspace.jpg"), title: "IRIS 채팅 화면" },
  },
];

export const IRIS_VERIFY = [
  {
    title: "Open Folder / Workspace 동기화",
    found: "IDE에서 다른 폴더를 열어도 Agent의 workspace가 기존 경로를 유지하는 문제",
    fix: "Theia 폴더 변경을 감지하고 Bridge workspace와 Runtime 작업 경로를 같은 기준으로 맞춤",
    result: "변경된 프로젝트를 기준으로 파일 생성 · 탐색 · 실행이 동작하도록 workspace를 동기화",
    visual: "workspace",
    before: ["Theia 폴더 변경", "Bridge는 이전 경로", "Runtime도 이전 경로"],
    after: ["Theia 폴더 변경", "Bridge workspace 갱신", "Runtime이 새 경로 기준"],
  },
  {
    title: "긴 답변과 복잡한 콘텐츠 가독성",
    found: "긴 AI 응답이나 코드·도구 결과가 채팅 영역에서 한눈에 읽기 어려운 문제",
    fix: "코드 블록(언어 표시·복사), diff 강조, 도구 실행 결과 접기, 파일 경로 칩으로 작업 결과를 분리해 표시",
    visual: "blocks",
    blocks: ["코드 블록", "diff", "도구 결과 접기", "파일 칩"],
  },
  {
    title: "프로젝트 시작 화면",
    found: "IDE에 들어오면 바로 이전 폴더가 열려, 지금 시작할 프로젝트를 고르기 어려움",
    fix: "Companion 진입 시 저장된 폴더를 자동으로 열지 않고, Open folder · Create folder · Recent projects로 시작 화면을 구성",
    image: { src: img("splash.jpg"), title: "IRIS IDE 시작 화면" },
  },
];

export const IRIS_QA = [
  "프로젝트 변경 후 workspace 동기화 확인",
  "변경된 경로 기준 파일 작업 확인",
  "코드 실행 및 결과 반환 확인",
  "IDE Bridge / Runtime 연동 확인",
  "IDE Companion 창 · 웰컴 화면 확인",
  "채팅 파일 첨부 / Drag & Drop 확인",
  "채팅 코드·도구 블록 렌더 확인",
];

export const IRIS_CLOSE = {
  title: ["기존 프로젝트에 중간 합류해,", "Agent와 IDE가 실제 작업으로 이어지는", "경험을 구체화하고 개선했습니다."],
  project: [
    "오픈소스 기반 AI Agent 환경",
    "MCP / Skill 기반 확장 구조",
    "Hermes 도구 실행",
    "Runtime Gateway",
    "IDE 연동 (Theia)",
    "프로젝트 및 파일 작업",
    "터미널 실행 도구",
  ],
  mine: [
    "기능 기획 및 사용자 흐름 개선",
    "Developer UX 개선",
    "Theia / Bridge / Runtime 기반 IDE Workspace 동기화",
    "프로젝트 열기 및 IDE 연동 개선",
    "채팅 UI 및 콘텐츠 가독성 개선",
    "실제 동작 검증 및 QA",
    "구현 과정에서 발견된 오류 분석 및 수정",
  ],
};

export const IRIS_EXPAND = {
  title: "확장 가능성",
  note: "현재 모두 구현 완료된 기능이 아니라, 프로젝트 구조를 활용한 확장 방향입니다.",
  items: [
    { who: "개발자", text: "IDE · Project Context · 실행 도구" },
    { who: "디자이너", text: "디자인 도구 MCP · ComfyUI 등 오픈소스 이미지 도구" },
    { who: "기업", text: "로컬 데이터 기반 환경을 활용한 보안 중심 Agent 구성 가능" },
  ],
};
