type ComingSoonProps = {
  title: string
}

function ComingSoon({ title }: ComingSoonProps) {
  return (
    <main className="flex flex-1 items-center py-[clamp(80px,14vw,190px)]" aria-labelledby="coming-soon-title">
      <section className="max-w-[650px]">
        <p className="mb-5 text-[11px] font-bold uppercase tracking-[.15em] text-accent">The Eligores family</p>
        <p className="text-sm font-semibold uppercase tracking-[.12em] text-muted">{title}</p>
        <h1 id="coming-soon-title" className="mt-4 font-[Georgia,serif] text-[clamp(50px,7vw,94px)] leading-[.9] tracking-[-.06em] text-ink">Coming soon.</h1>
        <p className="mt-7 max-w-[440px] text-base leading-[1.6] text-muted">We are gathering the little moments that belong here. Please come back soon.</p>
        <a className="mt-9 inline-flex border-b border-ink pb-1 text-xs font-bold uppercase tracking-[.1em] text-ink no-underline hover:text-accent hover:border-accent" href="#home">Back home</a>
      </section>
    </main>
  )
}

export default ComingSoon
