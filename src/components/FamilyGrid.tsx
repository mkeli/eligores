const familyMembers = [
  { name: 'Michael', tone: 'clay' },
  { name: 'Katrina', tone: 'rose' },
  { name: 'Maria Katherine', tone: 'honey' },
  { name: 'Mateo Kristiansen', tone: 'sage' },
]

function FamilyGrid() {
  const tones = { clay: 'bg-[#d9c6bc]', rose: 'bg-[#d8c5c2]', honey: 'bg-[#d7cdb3]', sage: 'bg-[#c2cbc0]' }

  return <section className="grid grid-cols-2 gap-3 max-[520px]:grid-cols-1 max-[520px]:gap-2.5" aria-label="The Eligores family">{familyMembers.map((member, index) => <article className={`relative flex aspect-[1.02] flex-col justify-end overflow-hidden p-[clamp(19px,2.3vw,34px)] max-[520px]:aspect-[1.32] ${tones[member.tone as keyof typeof tones]}`} key={member.name}><div className="absolute inset-0 before:absolute before:inset-[8%] before:border before:border-[#2d2b26]/[.14] after:absolute after:inset-y-0 after:left-1/2 after:border-x after:border-[#2d2b26]/[.14]" aria-hidden="true"><span className="absolute top-[11%] left-[11%] text-[10px] font-bold tracking-[.12em] text-[#2d2b26]/[.34]">{String(index + 1).padStart(2, '0')}</span></div><h2 className="relative max-w-[80%] font-[Georgia,serif] text-[clamp(24px,2.25vw,38px)] leading-none font-normal tracking-[-.045em] text-[#2d2b26]">{member.name}</h2><span className="relative mt-[17px] h-px w-[42px] bg-[#2d2b26]/[.55]" aria-hidden="true" /></article>)}</section>
}

export default FamilyGrid
