import './globals.css';
import { IBM_Plex_Mono, Inter } from 'next/font/google';
import ScrollReveal from '../components/ScrollReveal';
import { RoleProvider } from '../components/RoleProvider';
import Header from '../components/Header';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-en',
});

const mono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata = {
  title: 'SERIN PARK',
  description: '박세린 · 기획하고, 직접 구현하며, 끝까지 검증합니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <RoleProvider>
          <ScrollReveal />
          <Header />
          {children}
          <footer className="footer">
            <div className="container footer-inner">
              <span>박세린 · 서비스 기획자</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </footer>
        </RoleProvider>
      </body>
    </html>
  );
}
