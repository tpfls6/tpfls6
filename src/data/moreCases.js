const shot = (slug, file, title) => ({ src: `/projects/${slug}/${file}`, title });

export const MORE_CASES = {
  reroute: {
    tone: 'reroute',
    github: 'https://github.com/tpfls6/Re-Route',
    hero: {
      title: 'RE-ROUTE',
      headline: 'AI 상담과 퀘스트로 이어지는 자기회복 지원 플랫폼',
      desc: '감정과 고민을 AI 상담으로 정리하고, 그 결과를 작은 퀘스트로 바꿔 실천까지 이어주는 서비스입니다.',
      facts: [
        { label: '기간', value: '2026.05 — 2026.06' },
        { label: '프로젝트 형태', value: '1인 프로젝트' },
        { label: '역할', value: '기획 · 백엔드' },
      ],
      detailRoleTags: ['서비스 기획', '사용자 흐름 설계', '백엔드 개발', 'QA'],
      shots: [
        shot('reroute', 'ai-counseling.png', 'AI 상담'),
        shot('reroute', 'quest.png', '퀘스트'),
        shot('reroute', 'golden-card.png', '황금 카드'),
      ],
    },
    problem: {
      title: ['감정은 정리되지만,', '실천으로 이어지지 않았습니다.'],
      items: [
        '감정과 고민이 정리되지 않으면 다음에 할 행동을 정하기 어려움',
        '상담이 끝나도 바로 실행할 수 있는 단위가 없음',
        '회복을 혼자 관리하면 무엇을 먼저 해야 할지 알기 어려움',
      ],
      direction:
        '그래서 AI 상담으로 감정을 정리하고, 그 결과를 작은 퀘스트로 이어 실천까지 연결하는 흐름을 기획했습니다.',
    },
    plan: {
      title: '상담 다음에 할 일을 정하다',
      items: [
        {
          title: '상담을 실천으로 연결',
          problem: '감정 정리가 행동으로 이어지지 않음',
          decision: '상담 결과를 바로 할 수 있는 과제로 바꿔야 함',
          solution: 'AI 상담 → 감정 기록 → 퀘스트 추천',
        },
        {
          title: 'MVP로 범위 좁히기',
          problem: 'VR 리허설까지 한 번에 넣으면 핵심 루프가 흐려짐',
          decision: '먼저 검증할 회복 루프를 정해야 함',
          solution: '상담·기록·퀘스트를 MVP로 두고, VR 리허설은 확장 시나리오로 정리',
        },
      ],
    },
    screens: {
      title: '정리에서 실천으로',
      items: [
        {
          title: 'AI 상담',
          chain: '대화 → 감정 구조 → 행동 과제',
          note: '상담이 감정 정리에서 끝나지 않고, 다음에 할 일로 남게 구성했습니다.',
          image: shot('reroute', 'ai-counseling.png', 'AI 상담'),
        },
        {
          title: '퀘스트',
          chain: '상담 결과 → 실천 과제 → 완료',
          note: '상담에서 나온 과제를 난이도와 함께 이어서 관리하게 했습니다.',
          image: shot('reroute', 'quest.png', '퀘스트'),
        },
      ],
    },
    result: {
      title: '기획과 인증까지 닫다',
      items: [
        '1인으로 서비스 범위와 사용자 흐름을 정하고, 인증을 포함한 백엔드를 구현',
        '탈퇴 후 재가입 시 이전 정보가 남던 문제와, 토큰 만료 시점의 요청 꼬임을 QA로 수정',
      ],
      note: '짧은 기간에는 기능 수보다, 상담이 실천으로 닫히는 루프와 인증 예외를 같이 봐야 했습니다.',
    },
  },
  navis: {
    tone: 'navis',
    github: 'https://github.com/tpfls6/Navis-Frontend',
    hero: {
      title: 'NAVIS',
      headline: 'AI 기반 애자일 프로젝트 관리 솔루션',
      desc: '요구사항부터 스프린트, 칸반, 일정까지 한 흐름으로 보고, 팀의 진행을 같이 맞출 수 있는 협업 도구입니다.',
      facts: [
        { label: '기간', value: '2025.03 — 2025.11' },
        { label: '팀 구성', value: '프론트 3 · 백엔드 2' },
        { label: '포지션', value: 'UX · 프론트엔드' },
      ],
      detailRoleTags: ['사용자 흐름 설계', 'UX/UI', '프론트엔드 개발', 'QA'],
      shots: [
        shot('hanium-navis', 'summary.png', '요약'),
        shot('hanium-navis', 'sprint.png', '스프린트'),
        shot('hanium-navis', 'board.png', '칸반 보드'),
      ],
    },
    problem: {
      title: ['일정과 업무가 나뉘면,', '팀의 진행이 보이지 않았습니다.'],
      items: [
        '일정, 업무, 이슈가 나뉘어 있으면 지금 어디인지 한눈에 보기 어려움',
        '요구사항을 스프린트와 일정으로 옮기는 과정이 매번 반복됨',
        '칸반, 캘린더, 진행도가 따로 있으면 같은 상태를 공유하기 어려움',
      ],
      direction: '그래서 요구사항 수집부터 일정 확인까지 한 흐름으로 잇는 화면을 설계했습니다.',
    },
    plan: {
      title: '입력부터 추적까지 잇다',
      items: [
        {
          title: '진행을 한 흐름으로',
          problem: '요구사항과 일정이 따로 놀면 팀이 같은 상태를 보기 어려움',
          decision: '넣는 단계와 보는 단계가 이어져야 함',
          solution: '요구사항 → 스프린트 → 일정 → 진행 추적',
        },
        {
          title: '만드는 순서를 나누기',
          problem: '목표, 팀, 요구사항을 한 번에 넣으면 프로젝트 생성이 무거움',
          decision: '입력 순서를 단계로 나눠야 함',
          solution: '목표 · 팀 · 요구사항 화면을 단계별로 설계',
        },
      ],
    },
    screens: {
      title: '한 흐름이 보이는 화면',
      items: [
        {
          title: '요약',
          chain: '이슈 → 스프린트 → 일정',
          note: '흩어진 진행을 한 화면에서 먼저 보게 했습니다.',
          image: shot('hanium-navis', 'summary.png', '요약'),
        },
        {
          title: '스프린트',
          chain: '백로그 → 스프린트',
          note: '팀별 업무를 스프린트 단위로 나눠 배치하게 했습니다.',
          image: shot('hanium-navis', 'sprint.png', '스프린트'),
        },
        {
          title: '칸반',
          chain: '대기 → 진행 → 검토',
          note: '상태 이동이 저장과 맞게 보이도록 화면을 구성했습니다.',
          image: shot('hanium-navis', 'board.png', '칸반 보드'),
        },
      ],
    },
    result: {
      title: '진행이 어긋나지 않게',
      items: [
        '요약, 스프린트, 칸반, 캘린더로 진행을 보는 화면을 설계하고 구현',
        '같은 이름 스프린트 중복과, 칸반 이동 실패 시 화면만 바뀌던 경우를 QA로 수정',
      ],
      note: '화면을 먼저 옮기기보다, 저장된 상태가 맞는 뒤에 진행이 보이게 하는 쪽이 팀 도구에 맞았습니다.',
    },
  },
  pulteogi: {
    tone: 'pulteogi',
    github: 'https://github.com/2024-team-grass',
    hero: {
      title: '풀떼기',
      headline: '분리수거 실천을 리워드로 잇는 환경 보호 앱',
      desc: '활동을 기록하면 포인트가 쌓이고, 그 포인트로 리워드를 받을 수 있게 만든 앱입니다.',
      facts: [
        { label: '기간', value: '2024.07 — 2024.09' },
        { label: '프로젝트 형태', value: '팀 프로젝트' },
        { label: '포지션', value: '프론트엔드' },
      ],
      detailRoleTags: ['사용자 흐름 설계', 'UX/UI', '프론트엔드 개발', 'API 연동', 'QA'],
      shots: [
        { ...shot('contest-app', 'post.png', '활동 피드'), tall: true },
        { ...shot('contest-app', 'cart.png', '장바구니'), tall: true },
        { ...shot('contest-app', 'order.png', '주문'), tall: true },
      ],
    },
    problem: {
      title: ['실천은 있어도,', '이어갈 이유가 없었습니다.'],
      items: [
        '분리수거를 해도 기록이 없으면 다음 실천으로 이어지기 어려움',
        '환경 행동을 계속할 보상 구조가 없음',
        '기록과 리워드가 분리되면 왜 해야 하는지 느끼기 어려움',
      ],
      direction: '그래서 활동 기록 → 포인트 → 리워드로 이어지는 동기 흐름을 기획했습니다.',
    },
    plan: {
      title: '한 번의 인증이 다음 행동이 되게',
      items: [
        {
          title: '실천이 보상으로 보이게',
          problem: '한 번의 분리수거가 다음 행동으로 이어지지 않음',
          decision: '인증이 바로 보상으로 보여야 함',
          solution: '활동 기록 → 포인트 적립 → 리워드 사용',
        },
        {
          title: '순서가 분명한 화면',
          problem: '기록, 상점, 내 정보가 섞이면 무엇을 먼저 할지 헷갈림',
          decision: '홈에서 기록하고 상점에서 쓰는 순서가 보여야 함',
          solution: '활동 피드, 리워드, 마이페이지로 화면을 나눔',
        },
      ],
    },
    screens: {
      title: '기록에서 리워드까지',
      items: [
        {
          title: '활동 피드',
          chain: '인증 → 포인트',
          note: '분리수거 한 번이 피드에 남고 포인트로 보이게 했습니다.',
          image: shot('contest-app', 'post.png', '활동 피드'),
        },
        {
          title: '장바구니',
          chain: '리워드 → 수량 → 금액',
          note: '모은 포인트로 고르는 단계에서 수량과 금액이 맞게 보이게 했습니다.',
          image: shot('contest-app', 'cart.png', '장바구니'),
        },
      ],
    },
    result: {
      title: '실천이 구매까지 이어지게',
      items: [
        '활동 기록부터 리워드 구매까지 이어지는 앱 화면을 구현하고 API를 연동',
        '수량이 음수로 내려가거나, 무료배송 기준에서 배송비가 갱신되지 않던 경우를 수정',
        '교내 경진대회 장려상',
      ],
      note: '리워드가 동기가 되려면, 기록 다음의 금액 계산이 틀리지 않아야 했습니다.',
    },
  },
  expo: {
    tone: 'expo',
    github: 'https://github.com/orgs/2024-dmu-expo-el/repositories',
    hero: {
      title: 'EXPO',
      headline: '손 동작 인식 기반 재활 · 발달 플랫폼',
      desc: 'Unity 게임으로 손을 움직이고, 그 기록을 웹에서 점수와 그래프로 확인하는 서비스입니다.',
      facts: [
        { label: '기간', value: '2024.06 — 2024.10' },
        { label: '프로젝트 형태', value: '팀 프로젝트' },
        { label: '포지션', value: 'UX · 프론트엔드' },
      ],
      detailRoleTags: ['사용자 흐름 설계', 'UX/UI', '프론트엔드 개발'],
      shots: [
        shot('expo', 'cover.png', '기록 대시보드'),
        shot('expo', 'games.png', '미니게임'),
      ],
    },
    problem: {
      title: ['손을 움직여도,', '나아진 정도가 남지 않았습니다.'],
      items: [
        '재활 운동은 반복인데, 재미가 없으면 손을 계속 움직이기 어려움',
        '게임만 하면 동작이 얼마나 나아졌는지 알기 어려움',
        '게임과 기록이 따로면 하나의 재활 경험으로 이어지지 않음',
      ],
      direction: '그래서 게임으로 손을 움직이고, 웹에서 그 변화를 확인하도록 흐름을 설계했습니다.',
    },
    plan: {
      title: '놀이 다음에 기록을 두다',
      items: [
        {
          title: '플레이가 데이터로 남게',
          problem: '게임을 끝내도 재활 진척이 남지 않음',
          decision: '놀이 다음이 측정 기록이어야 함',
          solution: 'Unity 게임 → 웹 기록 분석',
        },
        {
          title: '점수를 비교할 수 있게',
          problem: '손가락, 관절, 안정성 점수가 흩어지면 상태를 읽기 어려움',
          decision: '오늘과 이전을 한 화면에서 비교해야 함',
          solution: '측정 점수, 추이, 재활 진척도를 대시보드로 구성',
        },
      ],
    },
    screens: {
      title: '게임 다음의 기록',
      items: [
        {
          title: '미니게임',
          chain: '손 동작 → 플레이',
          note: '재활 동작을 반복 운동이 아니라 게임으로 시작하게 했습니다.',
          image: shot('expo', 'games.png', '미니게임'),
        },
        {
          title: '기록 대시보드',
          chain: '점수 → 추이 → 진척',
          note: '플레이 결과를 측정 점수와 그래프로 돌아와 비교하게 했습니다.',
          image: shot('expo', 'cover.png', '기록 대시보드'),
        },
      ],
    },
    result: {
      title: '놀이와 기록을 한 경험으로',
      items: [
        '게임 플레이와 웹 기록 분석이 이어지도록 흐름과 대시보드를 설계하고 구현',
        '교내 EXPO 대상',
      ],
      note: '게임과 웹이 따로 있으면 재활이 아니라 두 개의 앱이 됩니다. 플레이 다음에 기록이 오게 묶었습니다.',
    },
  },
};

export function getMoreCase(slug) {
  return MORE_CASES[slug] || null;
}
