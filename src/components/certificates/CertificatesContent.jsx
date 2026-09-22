import { certificates } from '@/data/certificates';
import { education, activities, awards, trainings } from '@/data/history';

export default function CertificatesContent() {
  return (
    <section className="section">
      <div className="container">
        <header className="section-header" data-reveal>
          <p className="section-kicker">EXPERIENCE</p>
          <h2 className="section-title">Certificates & History</h2>
        </header>

        <div className="exp-grid">
          <HistoryBlock title="Certificates">
            {certificates.map((cert) => (
              <HistoryRow key={cert.id} period={cert.date} title={cert.name} desc={cert.issuer} />
            ))}
          </HistoryBlock>
          <HistoryBlock title="Awards">
            {awards.map((item) => (
              <HistoryRow key={item.title} period={item.period} title={item.title} desc={item.description} />
            ))}
          </HistoryBlock>
          <HistoryBlock title="Education">
            {education.map((edu) => (
              <HistoryRow
                key={edu.school}
                period={edu.period}
                title={edu.school}
                desc={`${edu.major} · ${edu.detail}`}
              />
            ))}
          </HistoryBlock>
          <HistoryBlock title="Training">
            {trainings.map((training) => (
              <HistoryRow
                key={training.title}
                period={training.date}
                title={training.title}
                desc={training.org}
              />
            ))}
          </HistoryBlock>
          <HistoryBlock title="Activities" wide>
            {activities.map((item) => (
              <HistoryRow
                key={`${item.title}-${item.period}`}
                period={item.period}
                title={item.title}
                desc={item.description}
                chip={item.category}
              />
            ))}
          </HistoryBlock>
        </div>
      </div>
    </section>
  );
}

function HistoryBlock({ title, wide, children }) {
  return (
    <div className={`history-block ${wide ? 'history-block--wide' : ''}`} data-reveal>
      <h3 className="history-block-title">{title}</h3>
      {children}
    </div>
  );
}

function HistoryRow({ period, title, desc, chip }) {
  return (
    <div className="history-row">
      <span className="history-period">{period}</span>
      <div>
        {chip ? (
          <div className="history-row-header">
            <p className="history-row-title">{title}</p>
            <span className="chip">{chip}</span>
          </div>
        ) : (
          <p className="history-row-title">{title}</p>
        )}
        {desc ? <p className="history-row-desc">{desc}</p> : null}
      </div>
    </div>
  );
}
