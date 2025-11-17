// app/certificates/page.js

import { certificates } from "../../data/certificates";

export default function CertificatesPage() {
  return (
    <main className="page">
      <section className="section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">자격증</h2>
            <p className="section-subtitle">
              취득한 자격증과 준비 중인 자격증을 한눈에 볼 수 있도록 정리했습니다.
            </p>
          </header>

          {/* 프로젝트 페이지와 동일한 카드 UI */}
          <div className="project-grid">
            {certificates.map((cert) => (
              <article key={cert.id} className="project-card">
                <div className="project-card-body">
                  
                  {/* 카드 제목 */}
                  <h3 className="project-title">{cert.name}</h3>

                  {/* 카드 내용 (desc 스타일 그대로) */}
                  <p className="project-desc">
                    <strong>발행 기관:</strong> {cert.issuer}
                  </p>

                  <p className="project-desc">
                    <strong>취득/예정일:</strong> {cert.date}
                  </p>

                  <p className="project-desc">
                    {cert.description}
                  </p>

                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}