import { certificates } from "../../data/certificates";
import { education, activities, awards, trainings } from "../../data/history";

export default function CertificatesPage() {
  return (
    <main className="page">
      <section className="section">
        <div className="container">
          <header className="section-header" data-reveal>
            <p className="section-kicker">EXPERIENCE</p>
            <h2 className="section-title">Certificates & History</h2>
          </header>

          <div className="exp-grid">
            <Block title="Certificates">
              {certificates.map((cert) => (
                <div key={cert.id} className="history-row">
                  <span className="history-period">{cert.date}</span>
                  <div>
                    <p className="history-row-title">{cert.name}</p>
                    <p className="history-row-desc">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </Block>
            <Block title="Awards">
              {awards.map((item) => (
                <div key={item.title} className="history-row">
                  <span className="history-period">{item.period}</span>
                  <div>
                    <p className="history-row-title">{item.title}</p>
                    <p className="history-row-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </Block>
            <Block title="Education">
              {education.map((edu) => (
                <div key={edu.school} className="history-row">
                  <span className="history-period">{edu.period}</span>
                  <div>
                    <p className="history-row-title">{edu.school}</p>
                    <p className="history-row-desc">{edu.major} · {edu.detail}</p>
                  </div>
                </div>
              ))}
            </Block>
            <Block title="Training">
              {trainings.map((training) => (
                <div key={training.title} className="history-row">
                  <span className="history-period">{training.date}</span>
                  <div>
                    <p className="history-row-title">{training.title}</p>
                    <p className="history-row-desc">{training.org}</p>
                  </div>
                </div>
              ))}
            </Block>
            <Block title="Activities" wide>
              {activities.map((item) => (
                <div key={`${item.title}-${item.period}`} className="history-row">
                  <span className="history-period">{item.period}</span>
                  <div>
                    <div className="history-row-header">
                      <p className="history-row-title">{item.title}</p>
                      <span className="chip">{item.category}</span>
                    </div>
                    <p className="history-row-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </Block>
          </div>
        </div>
      </section>
    </main>
  );
}

function Block({ title, wide, children }) {
  return (
    <div className={`history-block ${wide ? "history-block--wide" : ""}`} data-reveal>
      <h3 className="history-block-title">{title}</h3>
      {children}
    </div>
  );
}
