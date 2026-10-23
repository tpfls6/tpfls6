import { education, awards, publications, activities, trainings } from '@/data/history';
import { certificates } from '@/data/certificates';

const groups = [
  {
    title: '학력', tone: 'blue',
    rows: education.map((item) => ({ period: item.period, title: item.school, details: [`${item.major} · ${item.detail}`] })),
  },
  {
    title: '수상 및 논문', tone: 'lilac',
    rows: [
      ...awards.map((item) => ({ ...item, category: '수상', details: [item.description] })),
      ...publications.map((item) => ({ ...item, details: [item.publication] })),
    ],
  },
  {
    title: '경력 및 활동', tone: 'peach',
    rows: [
      ...activities.map((item) => ({ ...item, details: item.lines || [item.description] })),
      ...trainings.map((item) => ({ period: item.date, title: item.title, category: '교육', details: [item.org] })),
    ].sort((a, b) => b.period.localeCompare(a.period)),
  },
  {
    title: '자격증', tone: 'mint',
    rows: certificates.map((item) => ({ period: item.date, title: item.name, details: [item.issuer] })),
  },
];

export default function ExperienceTables() {
  return (
    <div className="portfolio-page experience-tables">
      {groups.map((group) => (
        <section key={group.title} className={`resume-table-section resume-table-section--${group.tone}`}>
          <div className="resume-table-heading"><h2>{group.title}</h2><span>{String(group.rows.length).padStart(2, '0')}</span></div>
          <div className="resume-table-frame">
            <table className="resume-table">
              <caption className="sr-only">{group.title} 상세 이력</caption>
              <thead><tr><th scope="col">기간 · 연도</th><th scope="col">내용</th></tr></thead>
              <tbody>{group.rows.map((item) => (
                <tr key={`${item.title}-${item.period}`}>
                  <td className="resume-period">{item.period.replace(/\s*-\s*/g, ' — ')}</td>
                  <td>
                    <div className="resume-entry-heading">
                      <h3>{item.title}</h3>
                      {item.category && <span className="resume-category">{item.category}</span>}
                    </div>
                    {item.details.filter(Boolean).map((line) => <p key={line}>{line}</p>)}
                  </td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}
