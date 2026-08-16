const albums = [
  {
    title: 'Maria Katherine’s First Birthday & Dedication',
    subtitle: 'A beautiful beginning',
    description: 'One very special day, shared with family, love, and joyful celebration.',
    label: 'Album 02',
    icon: '🎂',
    color: 'from-[#f2dce0] via-[#f8ece2] to-[#e3d9f2]',
  },
  {
    title: 'Boracay Trip',
    subtitle: 'Sun, sea & family time',
    description: 'A collection of bright days, sandy feet, and memories by the shore.',
    label: 'Album 02',
    icon: '☀️',
    color: 'from-[#d8edf2] via-[#f8e8ba] to-[#eabf93]',
  },
]

function GalleryLanding() {
  return (
    <main className="flex-1 py-[clamp(64px,9vw,122px)]" aria-labelledby="gallery-title">
      <div className="max-w-[580px]"><p className="mb-4 text-[11px] font-bold uppercase tracking-[.15em] text-accent">The Eligores family</p><h1 id="gallery-title" className="font-[Georgia,serif] text-[clamp(42px,5vw,68px)] leading-[.98] tracking-[-.055em]">Our photo albums.</h1><p className="mt-6 max-w-[460px] text-base leading-[1.6] text-muted">A growing shelf of the places, celebrations, and everyday moments we want to remember.</p></div>

      <div className="mt-[clamp(40px,6vw,72px)] grid gap-5 min-[700px]:grid-cols-2">
        {albums.map((album) => <article className="group overflow-hidden border border-line bg-white/30" key={album.title}>
          <div className={`relative flex aspect-[1.22] items-center justify-center overflow-hidden bg-gradient-to-br ${album.color}`}>
            <div className="absolute size-[58%] rounded-full border border-white/45" aria-hidden="true" /><div className="absolute size-[36%] rounded-full border border-white/55" aria-hidden="true" /><span className="relative text-[clamp(52px,7vw,84px)] drop-shadow-sm" aria-hidden="true">{album.icon}</span><span className="absolute left-6 top-6 text-[10px] font-bold tracking-[.13em] text-ink/55">{album.label}</span><span className="absolute bottom-6 right-6 rounded-full bg-white/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.09em] text-ink/60">Photos coming soon</span>
          </div>
          <div className="p-7"><p className="text-[11px] font-bold uppercase tracking-[.12em] text-accent">{album.subtitle}</p><h2 className="mt-3 font-[Georgia,serif] text-[clamp(28px,3vw,39px)] leading-[.98] tracking-[-.045em] text-ink">{album.title}</h2><p className="mt-4 max-w-[400px] text-sm leading-[1.6] text-muted">{album.description}</p></div>
        </article>)}
      </div>
    </main>
  )
}

export default GalleryLanding
