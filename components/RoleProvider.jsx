// components/RoleProvider.jsx
'use client';

import { createContext, useContext, useState } from 'react';

export const ROLES = [
  { id: 'all', label: 'ALL' },
  { id: 'developer', label: 'DEVELOPER' },
  { id: 'planner', label: 'PLANNER' },
  { id: 'pm', label: 'PM' },
  { id: 'qa', label: 'QA' },
];

const RoleContext = createContext(null);

export function RoleProvider({ children }) {
  const [role, setRole] = useState('all');
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');
  return ctx;
}
