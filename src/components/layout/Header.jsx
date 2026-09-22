'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/#selected', id: 'selected', label: 'WORK' },
  { href: '/#archive', id: 'archive', label: 'ARCHIVE' },
  { href: '/#experience', id: 'experience', label: 'EXPERIENCE' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/') {
      setActive('');
      return undefined;
    }

    const sync = () => {
      const probe = window.innerHeight * 0.32;
      let current = '';
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= probe) current = item.id;
      }
      setActive(current);
    };

    sync();
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('hashchange', sync);
    return () => {
      window.removeEventListener('scroll', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={scrolled ? 'header is-scrolled' : 'header'}>
      <div className="header-inner">
        <Link href="/" className="site-title-link" onClick={() => setOpen(false)}>
          <span className="site-title">SERIN PARK</span>
        </Link>

        <nav className="nav" aria-label="주요 메뉴">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={active === item.id && pathname === '/' ? 'nav-link is-active' : 'nav-link'}
              onClick={(event) => {
                if (pathname !== '/') return;
                const el = document.getElementById(item.id);
                if (!el) return;
                event.preventDefault();
                setActive(item.id);
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.replaceState(null, '', item.href);
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>

      <nav className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label="모바일 메뉴">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/#contact" onClick={() => setOpen(false)}>
          CONTACT
        </Link>
      </nav>
    </header>
  );
}
