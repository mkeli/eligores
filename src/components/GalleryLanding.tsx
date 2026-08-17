import { albums } from '../data/gallery'

function GalleryLanding() {
  return (
    <main className="flex-1 py-[clamp(64px,9vw,122px)]" aria-labelledby="gallery-title">
      <div className="max-w-[580px]"><p className="mb-4 text-[11px] font-bold uppercase tracking-[.15em] text-accent">The Eligores family</p><h1 id="gallery-title" className="font-[Georgia,serif] text-[clamp(42px,5vw,68px)] leading-[.98] tracking-[-.055em]">Our photo albums.</h1><p className="mt-6 max-w-[460px] text-base leading-[1.6] text-muted">A growing shelf of the places, celebrations, and everyday moments we want to remember.</p></div>

      <div className="mt-[clamp(40px,6vw,72px)] grid gap-5 min-[700px]:grid-cols-2">
        {albums.map((album) => 
          <a href={`#gallery/${album.slug}`} 
            //  className="group overflow-hidden border border-line bg-white/30"
             className="group block overflow-hidden border border-line bg-white/30 transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
             key={album.slug}
            >
          <div className={`relative flex aspect-[1.22] items-center justify-center overflow-hidden bg-gradient-to-br ${album.color}`}>
            <div className="absolute size-[58%] rounded-full border border-white/45" aria-hidden="true" />
            <div className="absolute size-[36%] rounded-full border border-white/55" aria-hidden="true" />
            <span className="relative text-[clamp(52px,7vw,84px)] drop-shadow-sm" aria-hidden="true">{album.icon}</span>
            <span className="absolute left-6 top-6 text-[10px] font-bold tracking-[.13em] text-ink/55">{album.label}</span>
            <span className="absolute bottom-6 right-6 rounded-full bg-white/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.09em] text-ink/60">
              {
                album.photos.length > 0
                ? `${album.photos.length} photos` : 'Photos coming soon'
              }
            </span>
          </div>
          <div className="p-7"><p className="text-[11px] font-bold uppercase tracking-[.12em] text-accent">{album.subtitle}</p><h2 className="mt-3 font-[Georgia,serif] text-[clamp(28px,3vw,39px)] leading-[.98] tracking-[-.045em] text-ink">{album.title}</h2><p className="mt-4 max-w-[400px] text-sm leading-[1.6] text-muted">{album.description}</p></div>
        </a>)}
      </div>

      {/* <section className="mt-[clamp(64px,9vw,110px)]" aria-labelledby="maria-katherine-album-title">
        <div className="mb-5 flex items-end justify-between gap-4 border-b border-line pb-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.13em] text-accent">Public photo album</p>
            <h2 id="maria-katherine-album-title" className="mt-2 font-[Georgia,serif] text-[clamp(31px,4vw,48px)] leading-[.98] tracking-[-.05em]">Maria Katherine&apos;s First Birthday &amp; Dedication</h2>
          </div>
          <p className="shrink-0 text-xs tracking-[.04em] text-muted">{mariaKatherinePhotos.length} photos</p>
        </div>
        <div className="grid grid-cols-2 gap-3 min-[620px]:grid-cols-3 min-[960px]:grid-cols-4">
          {mariaKatherinePhotos.map((src, index) => (
            <a className="group relative block aspect-square overflow-hidden bg-[#f2dce0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent" href={src} key={src} target="_blank" rel="noreferrer">
              <img className="size-full object-cover transition duration-500 group-hover:scale-[1.03]" src={src} alt={`Maria Katherine's First Birthday and Dedication, photo ${index + 1}`} loading={index < 4 ? 'eager' : 'lazy'} />
              <span className="absolute bottom-3 left-3 bg-white/80 px-2 py-1 text-[10px] font-bold tracking-[.08em] text-ink opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">{String(index + 1).padStart(2, '0')}</span>
            </a>
          ))}
        </div>
      </section> */}
    </main>
  )
}

export default GalleryLanding
