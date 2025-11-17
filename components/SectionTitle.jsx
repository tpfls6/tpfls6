// components/SectionTitle.jsx

export default function SectionTitle({ title, subtitle, id }) {
  return (
    <section id={id} className="section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}