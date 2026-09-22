import { abilities, profile, techStackGroups } from '@/data/site';

export default function ProfileContent() {
  return (
    <section className="section">
      <div className="container">
        <header className="section-header" data-reveal>
          <p className="section-kicker">ABOUT</p>
          <h2 className="section-title">I connect ideas with implementation.</h2>
          <p className="section-subtitle">
            문제를 정의하고, 실제로 동작하는 화면과 API를 만들고, 사용자 관점에서 결과를 검증합니다.
          </p>
        </header>

        <div className="profile-layout">
          <div className="profile-left" data-reveal>
            <dl className="profile-info">
              <ProfileRow label="이름" value={profile.name} />
              <ProfileRow label="이메일" value={profile.email} />
              <ProfileRow label="번호" value={profile.phone} />
              <ProfileRow label="지역" value={profile.address} />
              <ProfileRow label="학력" value={profile.school} />
            </dl>
          </div>

          <div className="profile-right">
            <section className="profile-skills" data-reveal>
              <h3 className="history-block-title">Tech</h3>
              <div className="techstack-groups">
                {techStackGroups.map((group) => (
                  <div key={group.title}>
                    <p className="history-row-title">{group.title}</p>
                    <p className="history-row-desc">{group.items.join(' · ')}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="profile-skills" data-reveal>
              <h3 className="history-block-title">Focus</h3>
              <div className="ability-strip">
                {abilities.map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileRow({ label, value }) {
  return (
    <div className="profile-info-row">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
