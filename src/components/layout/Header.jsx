import Link from 'next/link';

export default function Header() {
  return (
    <header className="header header--simple">
      <div className="header-inner">
        <Link href="/" className="site-title-link">
          <span className="site-title">SERIN PARK</span>
        </Link>
        <nav className="header-home" aria-label="주요 메뉴">
          <Link href="/" className="nav-link">홈</Link>
          <Link href="/projects" className="nav-link">프로젝트 갤러리</Link>
          <Link href="/experience" className="nav-link">이력 및 기술</Link>
        </nav>
      </div>
    </header>
  );
}
