import './globals.css';
import { IBM_Plex_Mono, Inter } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { RoleProvider } from '@/components/layout/RoleProvider';
import ScrollReveal from '@/components/layout/ScrollReveal';

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
          <Footer />
        </RoleProvider>
      </body>
    </html>
  );
}
