// components/Hero.jsx
'use client';

import RoleSwitcher from './RoleSwitcher';
import { useRole } from './RoleProvider';

const ROLE_LINE = {
  all: 'Planning · Development · QA · Product',
  developer: 'Frontend · Backend · API · DB · Architecture',
  planner: '문제 정의 · 사용자 시나리오 · IA · MVP 설계',
  pm: '팀 리딩 · 일정 관리 · 의사결정 · 협업',
  qa: '사용자 흐름 테스트 · 예외 케이스 검증 · 재검증',
};

export default function Hero() {
  const { role } = useRole();

  return (
    <section className={`hero hero--${role}`} data-reveal>
      <div className="container hero-inner">
        <RoleSwitcher className="hero-role-switcher" />
        <p className="hero-eyebrow">SERIN PARK</p>
        <h1 className="hero-title">
          복잡한 문제를 정리하고,
          <br />
          사용자의 흐름을 끝까지 확인합니다.
        </h1>
        <p className="hero-line">{ROLE_LINE[role]}</p>
        <p className="hero-desc">
          기능을 만드는 것에서 끝내지 않습니다. 사용자가 실제로 어떤 상황에서 이 기능을 사용하게 될지
          생각하고, 여러 경우의 수를 테스트하며 서비스의 완성도를 높이는 일을 중요하게 생각합니다.
        </p>
      </div>
    </section>
  );
}
