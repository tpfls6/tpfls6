'use client';

import { VIEWS, useView } from '@/components/layout/RoleProvider';

const LABELS = {
  compact: { planner: 'PLANNER', developer: 'DEVELOPER' },
  detail: { planner: 'PLANNING VIEW', developer: 'DEVELOPMENT VIEW' },
};

export default function ViewSwitcher({ className = '', size = 'compact' }) {
  const { view, setView } = useView();
  const labels = LABELS[size] || LABELS.compact;

  return (
    <div
      className={`view-switcher view-switcher--${size} ${className}`}
      role="tablist"
      aria-label="관점 선택"
    >
      {VIEWS.map((item) => (
        <button
          key={item.id}
          type="button"
          role="tab"
          aria-selected={view === item.id}
          className={`view-pill view-pill--${item.id} ${view === item.id ? 'is-active' : ''}`}
          onClick={() => setView(item.id)}
        >
          {labels[item.id]}
        </button>
      ))}
    </div>
  );
}
