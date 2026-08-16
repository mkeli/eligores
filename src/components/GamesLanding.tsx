const games = [
  { icon: '🔤', title: 'Alphabet Adventure', skill: 'Letters & sounds', color: 'bg-[#dcecdf]', detail: 'Find letters, hear their sounds, and collect cheerful stars.' },
  { icon: '🍎', title: 'Count & Choose', skill: 'Numbers 1–10', color: 'bg-[#f7dfd2]', detail: 'Count the yummy things, then choose the right number.' },
  { icon: '🦊', title: 'Memory Match', skill: 'Focus & memory', color: 'bg-[#e5def2]', detail: 'Turn over cards and find the animal friends that match.' },
]

function GamesLanding() {
  return (
    <main className="flex-1 py-[clamp(64px,9vw,122px)]" aria-labelledby="games-title">
      <div className="flex items-end justify-between gap-6 max-[620px]:items-start max-[620px]:flex-col">
        <div className="max-w-[540px]"><p className="mb-4 text-[11px] font-bold uppercase tracking-[.15em] text-accent">A little corner for learning</p><h1 id="games-title" className="font-[Georgia,serif] text-[clamp(42px,5vw,68px)] leading-[.98] tracking-[-.055em]">Play &amp; learn together.</h1><p className="mt-6 max-w-[460px] text-base leading-[1.6] text-muted">Small, gentle games made for curious kids—full of bright ideas, friendly faces, and chances to try again.</p></div>
        <p className="rounded-full border border-line px-4 py-2 text-xs font-semibold tracking-[.04em] text-muted">Ages 4–6 · No ads</p>
      </div>

      <div className="mt-[clamp(38px,5vw,64px)] grid gap-4 min-[700px]:grid-cols-3">
        {games.map((game, index) => <article className={`${game.color} flex min-h-[330px] flex-col rounded-[2px] p-7 max-[699px]:min-h-[270px]`} key={game.title}>
          <div className="flex items-start justify-between"><span className="flex size-14 items-center justify-center rounded-full bg-white/60 text-[29px]" aria-hidden="true">{game.icon}</span><span className="text-[10px] font-bold tracking-[.12em] text-ink/55">0{index + 1}</span></div>
          <div className="mt-auto"><p className="text-[11px] font-bold uppercase tracking-[.12em] text-ink/60">{game.skill}</p><h2 className="mt-3 font-[Georgia,serif] text-[31px] leading-none tracking-[-.045em]">{game.title}</h2><p className="mt-4 max-w-[280px] text-sm leading-[1.55] text-ink/70">{game.detail}</p><button className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.1em] text-ink transition-transform hover:translate-x-1 focus-visible:translate-x-1" type="button" onClick={() => window.alert(`${game.title} is coming soon!`)}>Coming soon <span aria-hidden="true">→</span></button></div>
        </article>)}
      </div>

      <div className="mt-8 flex items-center justify-between gap-5 border-t border-line pt-6 text-sm leading-[1.5] text-muted max-[620px]:items-start max-[620px]:flex-col"><p>New games will grow here as our family grows.</p><span className="font-semibold text-ink">Made with love for little learners.</span></div>
    </main>
  )
}

export default GamesLanding
