// components/RoleSwitcher.jsx
'use client';

import { ROLES, useRole } from './RoleProvider';

export default function RoleSwitcher({ className = '' }) {
  const { role, setRole } = useRole();

  return (
    <div className={`role-switcher ${className}`} role="tablist" aria-label="관점 선택">
      {ROLES.map((r) => (
        <button
          key={r.id}
          type="button"
          role="tab"
          aria-selected={role === r.id}
          className={`role-pill role-pill--${r.id} ${role === r.id ? 'is-active' : ''}`}
          onClick={() => setRole(r.id)}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}
