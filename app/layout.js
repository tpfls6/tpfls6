// app/layout.js
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: '박세린 포트폴리오',
  description: '프론트엔드 개발자 박세린의 포트폴리오',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header className="header">
          <div className="header-inner">
            <div>
              <Link href="/" className="site-title-link">
                <h1 className="site-title">박세린 포트폴리오</h1>
              </Link>
              <p className="site-subtitle">
                Frontend · React · Mobile · Project Management
              </p>
            </div>
            <nav className="nav">
              <Link href="/profile" className="nav-link">
                내 프로필
              </Link>
              <Link href="/projects" className="nav-link">
                프로젝트
              </Link>
              <Link href="/certificates" className="nav-link">
                자격증
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="footer">
          <div className="container footer-inner">
            <span>© {new Date().getFullYear()} 박세린</span>
            <span className="footer-note">Built with Next.js</span>
          </div>
        </footer>
      </body>
    </html>
  );
}