const familyMembers = [
  { name: 'Michael', image: '/images/family/Michael.png' },
  { name: 'Katrina', image: '/images/family/Katrina.png' },
  { name: 'Maria Katherine', image: '/images/family/Maria.png' },
  { name: 'Mateo Kristiansen', image: '/images/family/Mateo.png' },
]

function FamilyGrid() {
  return <section className="grid grid-cols-2 gap-3 max-[520px]:grid-cols-1 max-[520px]:gap-2.5" aria-label="The Eligores family">{familyMembers.map((member, index) => <article className="relative flex aspect-[1.02] flex-col justify-end overflow-hidden bg-[#2d2b26] p-[clamp(19px,2.3vw,34px)] max-[520px]:aspect-[1.32]" key={member.name}><img className="absolute inset-0 size-full object-cover" src={member.image} alt={`Stylized portrait of ${member.name}`} /><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" aria-hidden="true" /><span className="absolute top-[11%] left-[11%] text-[10px] font-bold tracking-[.12em] text-white/70" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><h2 className="relative max-w-[80%] font-[Georgia,serif] text-[clamp(24px,2.25vw,38px)] leading-none font-normal tracking-[-.045em] text-white">{member.name}</h2><span className="relative mt-[17px] h-px w-[42px] bg-white/70" aria-hidden="true" /></article>)}</section>
}

export default FamilyGrid
