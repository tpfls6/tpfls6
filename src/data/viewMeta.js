// 기존 프로젝트 데이터에서 뽑아 낸 표시용 메타.
// 역할·연도·성과는 만들지 않고, 상세 본문은 data/projects.js를 그대로 쓴다.

export const VIEW_META = {
  stockmate: {
    displayTitle: "STOCKMATE",
    type: "Team Project",
    cardLine: "주식 초보자를 위한 AI 투자 학습 · 모의투자 플랫폼",
    plannerRole: "Service Planning · UX · QA",
    developerRole: "Frontend · Backend",
    plannerFlow: [
      ["LEARN", "투자 개념 학습"],
      ["QUIZ", "이해도 확인"],
      ["EXPLORE", "종목 탐색"],
      ["ANALYZE", "AI 분석"],
      ["INVEST", "모의투자"],
      ["REVIEW", "결과 확인"],
    ],
    developerFlow: [
      ["Client", "React · TypeScript"],
      ["API", "NestJS"],
      ["Data", "MySQL · Redis"],
      ["External", "KRX · 키움 · DART"],
    ],
    techUse: [
      ["React · TypeScript", "모의투자 대시보드, 종목 상세, 투자학습 화면"],
      ["NestJS", "API 일부와 Redis 캐싱 구조"],
      ["MySQL · Redis", "회원·거래 데이터와 시세 캐시"],
      ["KRX · 키움증권 · DART", "시세와 재무 데이터를 백엔드에서 연동"],
    ],
    story: {
      planner: {
        problem: ["배웠는데,", "어디서 투자해보지?"],
        approach: ["학습에서 모의투자로", "이어지는 흐름"],
        flow: ["사용자가 다음으로", "넘어가는 길"],
        product: ["실제로 동작하는", "화면"],
        work: ["기획에서", "내가 한 일"],
        qa: ["깨진 흐름을", "다시 검증했다"],
        result: ["초보자도 따라갈 수 있는", "투자 학습 흐름"],
      },
      developer: {
        goal: ["학습에서 매수까지", "한 서비스로"],
        architecture: ["화면 · API · 데이터 · 시세"],
        implementation: ["직접 구현한", "화면과 API"],
        data: ["데이터가", "흐르는 곳"],
        solving: ["깨진 지점을", "고쳤다"],
        result: ["기능이 아니라", "하나의 서비스"],
      },
    },
  },
  jewelry: {
    displayTitle: "JEWELRY FACTORY",
    type: "Personal Project",
    cardLine: "주얼리 공장의 입·출고와 작업 데이터를 관리하는 현장 시스템",
    plannerRole: "Process Planning · UX · QA",
    developerRole: "Desktop Development · Data",
    plannerFlow: [
      ["IN", "입고"],
      ["MEASURE", "중량 측정"],
      ["PHOTO", "사진 기록"],
      ["LEDGER", "대장 반영"],
    ],
    developerFlow: [
      ["Serial", "전자저울 통신"],
      ["Local DB", "오프라인 기록"],
      ["Supabase", "원격 동기화"],
      ["Desktop UI", "PySide6"],
    ],
    techUse: [
      ["PySide6", "입고·출고·사진·대장 화면"],
      ["Serial Communication", "전자저울 실시간 중량 측정"],
      ["Local DB", "오프라인 입출고 기록"],
      ["Supabase", "원격 백업과 동기화"],
    ],
    story: {
      planner: {
        problem: ["수기 대장으로는", "기록이 남지 않았다."],
        approach: ["입고에서 대장까지", "현장 흐름 그대로"],
        flow: ["현장에서 손이", "움직이는 순서"],
        product: ["책상 위에서", "바로 쓰는 화면"],
        work: ["현장 요구를", "화면으로"],
        qa: ["끊긴 저울,", "어긋난 동기화"],
        result: ["현장에서 바로 쓰는", "입출고 기록"],
      },
      developer: {
        goal: ["오프라인에서도", "멈추지 않는 대장"],
        architecture: ["시리얼 · 로컬 DB · 클라우드"],
        implementation: ["저울부터 화면까지", "한 데스크톱에"],
        data: ["로컬에 남기고", "원격에 맞춘다"],
        solving: ["통신이 끊겨도", "기록이 남게"],
        result: ["현장에서 바로 쓰는", "관리 프로그램"],
      },
    },
  },
  iris: {
    displayTitle: "IRIS",
    type: "Personal Project",
    cardLine: "로컬·클라우드 AI 모델과 UI 제어를 결합한 데스크톱 AI 에이전트 / IDE",
    plannerRole: "Product UX · Feature Planning",
    developerRole: "AI · IDE Integration",
    plannerFlow: [
      ["CHAT", "대화"],
      ["CODE", "코드 작업"],
      ["CONTROL", "화면 제어"],
    ],
    developerFlow: [
      ["Desktop", "PyQt / PySide"],
      ["Embed", "QtWebEngine"],
      ["Model", "Ollama"],
      ["Agent", "Hermes · ShowUI"],
    ],
    techUse: [
      ["PyQt / PySide", "데스크톱 앱 셸과 비동기 시그널/슬롯"],
      ["QtWebEngine", "앱 안에 웹 기반 UI 임베드"],
      ["Ollama", "로컬 모델 호출"],
      ["Hermes · ShowUI", "에이전트가 화면을 조작하는 UI 제어"],
    ],
    story: {
      planner: {
        problem: ["클라우드 없이도", "화면을 다루는 AI"],
        approach: ["대화에서 제어로", "이어지는 IDE"],
        flow: ["말하고,", "코드 쓰고,", "화면을 움직인다"],
        product: ["데스크톱 안의", "에이전트"],
        work: ["쓸 수 있는 범위부터", "그렸다"],
        qa: ["응답이 늦어도", "화면이 멈추지 않게"],
        result: ["로컬에서 제어하는", "AI 에이전트"],
      },
      developer: {
        goal: ["로컬 모델과 UI 제어를", "한 앱에"],
        architecture: ["PyQt · WebEngine · Ollama"],
        implementation: ["에이전트가", "화면을 조작한다"],
        data: ["로컬 호출과", "비동기 시그널"],
        solving: ["지연과 오류에도", "UI는 살아 있게"],
        result: ["로컬 기반", "데스크톱 에이전트"],
      },
    },
  },
  "25-hanium-navis": {
    displayTitle: "NAVIS",
    type: "Team Project",
    cardLine: "AI 기반 애자일 프로젝트 관리 솔루션",
    plannerRole: "UX · QA",
    developerRole: "Frontend",
    plannerFlow: [
      ["COLLECT", "요구사항 수집"],
      ["PLAN", "태스크 / 스프린트"],
      ["SEE", "일정 시각화"],
      ["TRACK", "진행 추적"],
      ["ADJUST", "자동 재조정"],
    ],
    developerFlow: [
      ["Screens", "대시보드 · 칸반 · 캘린더"],
      ["Hooks", "API · 상태 관리"],
      ["API", "REST"],
    ],
    techUse: [
      ["React · MUI", "요약 대시보드, 스프린트, 칸반, 캘린더"],
      ["Custom Hooks", "API 연동과 상태 관리 분리"],
      ["Axios · REST API", "프로젝트·스프린트·이슈 데이터 연동"],
    ],
  },
  "re-route": {
    displayTitle: "RE-ROUTE",
    type: "Personal Project",
    cardLine: "AI 기반 회복탄력성 지원 플랫폼",
    plannerRole: "Service Planning",
    developerRole: "Backend",
    plannerFlow: [
      ["COUNSEL", "AI 상담"],
      ["RECORD", "감정 기록"],
      ["QUEST", "퀘스트 추천"],
      ["VR", "VR 리허설"],
    ],
    developerFlow: [
      ["Auth", "Spring Security · JWT"],
      ["Domain", "상담 · 감정 · 퀘스트"],
      ["AI", "OpenAI API"],
      ["DB", "MySQL"],
    ],
    techUse: [
      ["Spring Boot", "사용자·상담·감정·퀘스트 도메인 API"],
      ["Spring Security · JWT", "인증/인가 구조"],
      ["OpenAI API", "AI 상담과 퀘스트 추천"],
      ["MySQL", "도메인 스키마"],
    ],
  },
  expo: {
    displayTitle: "EXPO",
    type: "Team Project",
    cardLine: "손 재활 · 발달 플랫폼",
    plannerRole: "UX",
    developerRole: "Frontend",
    plannerFlow: [
      ["PLAY", "Unity 게임"],
      ["ANALYZE", "웹 기록 분석"],
    ],
    developerFlow: [
      ["Web UI", "React"],
      ["Chart", "Chart.js"],
      ["Game", "Unity 연동"],
    ],
    techUse: [
      ["React · TypeScript", "기록 분석 페이지와 레이아웃"],
      ["Chart.js", "손 동작 분석 그래프"],
      ["Unity", "게임과 웹 UI 연동"],
    ],
  },
  "contest-app": {
    displayTitle: "풀떼기",
    type: "Team Project",
    cardLine: "환경 보호 리워드 앱",
    plannerRole: "Service Planning",
    developerRole: "Frontend · Backend",
    plannerFlow: [
      ["RECORD", "활동 기록"],
      ["POINT", "포인트 적립"],
      ["REWARD", "리워드"],
    ],
    developerFlow: [
      ["App", "React Native"],
      ["API", "Spring Boot"],
      ["DB", "MySQL"],
    ],
    techUse: [
      ["React Native · Expo", "온보딩, 활동 기록, 리워드, 마이페이지"],
      ["Spring Boot", "활동 등록 · 포인트 조회 API 연동"],
      ["MySQL · AWS EC2", "데이터 저장과 배포"],
    ],
  },
  "el-winter": {
    displayTitle: "FEED CODER",
    type: "Team Project",
    cardLine: "개발자 커뮤니티 플랫폼",
    plannerRole: "Community Flow",
    developerRole: "Frontend",
    plannerFlow: [
      ["ASK", "질문"],
      ["ANSWER", "답변"],
      ["REVIEW", "코드 리뷰"],
    ],
    developerFlow: [
      ["UI", "공통 레이아웃 · 리스트/상세"],
      ["API", "Express"],
      ["DB", "MySQL"],
    ],
    techUse: [
      ["React", "레이아웃, 사이드바, 리스트/상세"],
      ["Express · JWT", "커뮤니티 API와 인증"],
      ["MySQL · Docker · GCP", "데이터와 배포"],
    ],
  },
};

export function getViewMeta(project) {
  return (
    VIEW_META[project.id] || {
      displayTitle: (project.title || "").toUpperCase(),
      type: project.team?.includes("1인") ? "Personal Project" : "Team Project",
      cardLine: project.tagline,
      plannerRole: "Planning",
      developerRole: "Development",
      plannerFlow: [],
      developerFlow: [],
      techUse: [],
    }
  );
}

export function getViewRole(project, view) {
  const meta = getViewMeta(project);
  return view === "developer" ? meta.developerRole : meta.plannerRole;
}

export function getDisplayTitle(project) {
  return getViewMeta(project).displayTitle;
}

export function getProjectType(project) {
  return getViewMeta(project).type;
}

export function getCardLine(project) {
  return getViewMeta(project).cardLine || project.tagline;
}

export function getViewFlow(project, view) {
  const meta = getViewMeta(project);
  return view === "developer" ? meta.developerFlow : meta.plannerFlow;
}

export function getStoryLines(project, view, key) {
  const story = getViewMeta(project).story?.[view || "planner"];
  return story?.[key] || [];
}

export function getProjectFacts(project, view) {
  const facts = [];
  const teamN = project.team?.match(/(\d+)\s*인/);
  if (teamN) facts.push({ value: teamN[1].padStart(2, "0"), label: "Team" });
  const flow = getViewFlow(project, view);
  if (flow.length) {
    facts.push({
      value: String(flow.length).padStart(2, "0"),
      label: view === "developer" ? "Layers" : "Steps",
    });
  }
  if (view !== "developer" && project.qaCases?.length) {
    facts.push({
      value: String(project.qaCases.length).padStart(2, "0"),
      label: "QA Cases",
    });
  }
  return facts;
}
