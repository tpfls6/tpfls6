export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>박세린 · 서비스 기획자</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
