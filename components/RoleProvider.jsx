// components/RoleProvider.jsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export const VIEWS = [
  {
    id: 'planner',
    label: 'Planner',
    cta: '기획자로 보기',
  },
  {
    id: 'developer',
    label: 'Developer',
    cta: '개발자로 보기',
  },
];

const STORAGE_KEY = 'portfolio-view';
const ViewContext = createContext(null);

export function RoleProvider({ children }) {
  const [view, setViewState] = useState(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'planner' || saved === 'developer') {
      setViewState(saved);
    }
  }, []);

  useEffect(() => {
    document.body.dataset.view = view || 'neutral';
    if (view) window.localStorage.setItem(STORAGE_KEY, view);
  }, [view]);

  const setView = (next) => {
    setViewState(next);
  };

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  const ctx = useContext(ViewContext);
  if (!ctx) throw new Error('useView must be used within RoleProvider');
  return ctx;
}

// 기존 호출부를 깨지 않기 위한 별칭
export function useRole() {
  const { view, setView } = useView();
  return { role: view || 'all', setRole: setView, view, setView };
}
