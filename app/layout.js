// app/layout.js
import './globals.css';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import { RoleProvider } from '../components/RoleProvider';

export const metadata = {
  title: 'SERIN PARK',
  description: '박세린 · Planning · Development · Product · QA',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <RoleProvider>
          <ScrollReveal />
          <header className="header">
            <div className="header-inner">
              <Link href="/" className="site-title-link">
                <h1 className="site-title">SERIN PARK</h1>
              </Link>
              <nav className="nav">
                <Link href="/profile" className="nav-link">
                  About
                </Link>
                <Link href="/projects" className="nav-link">
                  Archive
                </Link>
                <Link href="/certificates" className="nav-link">
                  자격증·이력
                </Link>
              </nav>
            </div>
          </header>

          {children}

          <footer className="footer">
            <div className="container footer-inner">
              <span>© {new Date().getFullYear()} SERIN PARK</span>
              <span className="footer-note">Planning · Development · Product · QA</span>
            </div>
          </footer>
        </RoleProvider>
      </body>
    </html>
  );
}