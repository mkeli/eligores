const familyMembers = [
  { name: 'Michael', tone: 'clay' },
  { name: 'Katrina', tone: 'rose' },
  { name: 'Maria Katherine', tone: 'honey' },
  { name: 'Mateo Kristiansen', tone: 'sage' },
]

function FamilyGrid() {
  return <section className="family-grid" aria-label="The Eligores family">{familyMembers.map((member, index) => <article className={`family-card family-card--${member.tone}`} key={member.name}><div className="image-placeholder" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div><h2>{member.name}</h2><span className="card-rule" aria-hidden="true" /></article>)}</section>
}

export default FamilyGrid
