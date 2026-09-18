// app/certificates/page.js

import { certificates } from "../../data/certificates";
import { education, activities, trainings } from "../../data/history";

export default function CertificatesPage() {
  return (
    <main className="page">
      <section className="section">
        <div className="container">
          <header className="section-header" data-reveal>
            <h2 className="section-title-sticky">CERTIFICATES &amp; HISTORY</h2>
            <p className="section-subtitle">
              지금까지 취득한 자격증과 학력, 대내외활동, 교육 이수 내역을 정리했습니다.
            </p>
          </header>

          {/* 자격증 */}
          <div className="history-block" data-reveal>
            <h3 className="history-block-title">자격증</h3>
            <div className="cert-grid">
              {certificates.map((cert) => (
                <article key={cert.id} className="project-card">
                  <div className="project-card-body">
                    <h3 className="project-title">{cert.name}</h3>
                    <p className="project-desc">
                      <strong>발행 기관:</strong> {cert.issuer}
                    </p>
                    <p className="project-desc">
                      <strong>취득/예정일:</strong> {cert.date}
                    </p>
                    <p className="project-desc">{cert.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* 학력 */}
          <div className="history-block" data-reveal>
            <h3 className="history-block-title">학력</h3>
            <div className="history-panel">
              {education.map((edu) => (
                <div key={edu.school} className="history-row">
                  <span className="history-period">{edu.period}</span>
                  <div className="history-content">
                    <p className="history-row-title">{edu.school}</p>
                    <p className="history-row-desc">
                      {edu.major} · {edu.detail} · {edu.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 대내외활동 */}
          <div className="history-block" data-reveal>
            <h3 className="history-block-title">대내외활동</h3>
            <div className="history-panel">
              {activities.map((item) => (
                <div key={`${item.title}-${item.period}`} className="history-row">
                  <span className="history-period">{item.period}</span>
                  <div className="history-content">
                    <div className="history-row-header">
                      <p className="history-row-title">{item.title}</p>
                      <span className="chip">{item.category}</span>
                    </div>
                    <p className="history-row-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 교육사항 / 해외연수 */}
          <div className="history-block" data-reveal>
            <h3 className="history-block-title">교육 이수 · 연수</h3>
            <div className="history-panel">
              {trainings.map((training) => (
                <div key={training.title} className="history-row">
                  <span className="history-period">{training.date}</span>
                  <div className="history-content">
                    <p className="history-row-title">{training.title}</p>
                    <p className="history-row-desc">{training.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
