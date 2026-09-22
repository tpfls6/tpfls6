import { education, activities, awards, trainings } from '../data/history';
import { certificates } from '../data/certificates';
import { experienceCopy } from '../data/site';

const dash = (value) => String(value).replace(/\s*-\s*/g, ' — ');

function periodKey(period) {
  const dates = String(period).match(/\d{4}(?:[.]\d{2}(?:[.]\d{2})?)?/g) || [];
  return Math.max(
    0,
    ...dates.map((value) => {
      const [year, month = '00', day = '00'] = value.split('.');
      return Number(`${year}${month}${day}`);
    })
  );
}

function byLatest(a, b) {
  return periodKey(b.period) - periodKey(a.period);
}

function yearOnly(period) {
  return String(period).match(/\d{4}/)?.[0] || period;
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="exp">
      <div className="exp-inner">
        <header className="exp-head" data-reveal>
          <h2 className="exp-kicker">{experienceCopy.title}</h2>
          <p className="exp-lead">{experienceCopy.lead}</p>
        </header>

        <div className="exp-layout">
          <ExpBlock title="학력" tone="blue">
            <ul className="exp-items">
              {[...education].sort(byLatest).map((edu, index) => (
                <ExpItem
                  key={edu.school}
                  period={dash(edu.period)}
                  title={edu.school}
                  desc={`${edu.major} · ${edu.detail}`}
                  quiet={index > 0}
                />
              ))}
            </ul>
          </ExpBlock>

          <ExpBlock title="경력 및 활동" tone="peach">
            <ul className="exp-items">
              {[
                ...activities.map((item) => ({
                  period: item.period,
                  title: item.title,
                  desc: item.description || null,
                  lines: item.lines,
                  featured: item.featured,
                })),
                ...trainings.map((training) => ({
                  period: training.date,
                  title: training.title,
                  desc: training.org,
                })),
              ]
                .sort(byLatest)
                .map((item) => (
                  <ExpItem
                    key={`${item.title}-${item.period}`}
                    period={dash(item.period)}
                    title={item.title}
                    desc={item.desc}
                    lines={item.lines}
                    featured={item.featured}
                    compact={!item.featured}
                  />
                ))}
            </ul>
          </ExpBlock>

          <ExpBlock title="수상" tone="lilac">
            <ul className="exp-items">
              {[...awards].sort(byLatest).map((item) => (
                <ExpItem
                  key={item.title}
                  period={yearOnly(item.period)}
                  title={item.title}
                  desc={item.description}
                  compact
                />
              ))}
            </ul>
          </ExpBlock>

          <ExpBlock title="자격증" tone="mint">
            <ul className="exp-certs">
              {certificates.map((cert) => (
                <li key={cert.id} className="exp-cert">
                  <strong>{cert.name}</strong>
                  <span>
                    {cert.issuer} · {cert.date}
                  </span>
                </li>
              ))}
            </ul>
          </ExpBlock>
        </div>
      </div>
    </section>
  );
}

function ExpBlock({ title, tone, children }) {
  return (
    <section className={`exp-block exp-block--${tone}`} data-reveal>
      <h3 className="exp-cat">{title}</h3>
      {children}
    </section>
  );
}

function ExpItem({ period, title, desc, lines, quiet, featured, compact }) {
  const cls = [
    'exp-item',
    featured ? 'exp-item--featured' : '',
    quiet ? 'exp-item--quiet' : '',
    compact ? 'exp-item--compact' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const body = (
    <>
      {lines?.length
        ? lines.map((line) => (
            <p key={line} className="exp-item-desc">
              {line}
            </p>
          ))
        : desc
          ? <p className="exp-item-desc">{desc}</p>
          : null}
    </>
  );

  return (
    <li className={cls}>
      {featured ? (
        <>
          <h4 className="exp-item-title">{title}</h4>
          <p className="exp-item-year">{period}</p>
          {body}
        </>
      ) : (
        <>
          <p className="exp-item-year">{period}</p>
          <h4 className="exp-item-title">{title}</h4>
          {body}
        </>
      )}
    </li>
  );
}
