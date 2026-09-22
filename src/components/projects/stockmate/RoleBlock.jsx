export default function RoleBlock({ tags, detail }) {
  return (
    <div className="sm-hero-role">
      <p className="sm-hero-role-label">기여</p>
      <ul className="work-pills">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {detail ? <p className="sm-hero-role-detail">{detail}</p> : null}
    </div>
  );
}
