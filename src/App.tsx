import { useEffect, useState } from 'react'
import ComingSoon from './components/ComingSoon'
import FamilyGrid from './components/FamilyGrid'
import GalleryLanding from './components/GalleryLanding'
import GamesLanding from './components/GamesLanding'
import GalleryAlbumLanding from './components/GalleryAlbumLanding'

const pageNames = {
  family: 'Family',
  stories: 'Stories',
}

// type Page = 'home' | 'family' | 'stories' | 'gallery' | 'games'
type Page = 'home' | 'family' | 'stories' | 'gallery' | 'gallery-album' | 'games'

function getPageFromHash(): Page {
  const page = window.location.hash.slice(1)
  
  if (page.startsWith('gallery/')) {
    return 'gallery-album'
  }

  return page === 'family' || page === 'stories' || page === 'gallery' || page === 'games' ? page : 'home'
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [page, setPage] = useState<Page>(getPageFromHash)
  
  const galleryAlbumSlug =
  page === 'gallery-album'
    ? window.location.hash.replace('#gallery/', '')
    : null

  const navigationItems = ['Home', 'Family', 'Stories', 'Gallery', 'Games']

  useEffect(() => {
    const updatePage = () => setPage(getPageFromHash())
    window.addEventListener('hashchange', updatePage)
    return () => window.removeEventListener('hashchange', updatePage)
  }, [])

  return (
    <div className="mx-auto flex min-h-svh w-[calc(100%-3rem)] max-w-[1320px] flex-col max-[520px]:w-[calc(100%-2rem)]">
      <header className="relative flex min-h-[104px] items-center justify-between border-b border-line max-[820px]:min-h-[84px] max-[520px]:min-h-[75px]">
        <a className="inline-flex items-center gap-2.5 font-[Georgia,serif] text-2xl tracking-[-.06em] text-ink no-underline" href="#home" aria-label="Eligores home"><img className="size-[31px] object-contain" src="/images/mke-navicon.png" alt="" /><span>eligores</span></a>
        <button className="inline-flex size-11 items-center justify-center text-ink min-[821px]:hidden" type="button" aria-expanded={isMenuOpen} aria-controls="primary-navigation" onClick={() => setIsMenuOpen((open) => !open)}><span className="sr-only">{isMenuOpen ? 'Close navigation' : 'Open navigation'}</span><svg aria-hidden="true" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d={isMenuOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'} /></svg></button>
        <nav id="primary-navigation" className={`${isMenuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full z-10 flex-col border-b border-line bg-paper py-4 min-[821px]:static min-[821px]:flex min-[821px]:flex-row min-[821px]:items-center min-[821px]:gap-[clamp(16px,2.2vw,34px)] min-[821px]:border-0 min-[821px]:py-0`} aria-label="Primary navigation">
          {navigationItems.map((item) => <a className="px-1 py-3 text-xs font-semibold uppercase tracking-[.08em] text-muted no-underline hover:text-ink focus-visible:text-ink min-[821px]:p-0" key={item} onClick={() => setIsMenuOpen(false)} href={item === 'Home' ? '#home' : `#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
      </header>
      {/* {page === 'games' ? <GamesLanding /> : page === 'gallery' ? <GalleryLanding /> : page === 'home' ? <main id="home"><section className="grid flex-1 items-center gap-[clamp(48px,8vw,132px)] py-[clamp(64px,10vw,142px)] max-[820px]:gap-[52px] max-[820px]:pt-[76px] min-[821px]:grid-cols-[minmax(250px,.82fr)_minmax(520px,1.45fr)]" aria-labelledby="hero-title"><div className="max-w-[440px] max-[820px]:max-w-[540px]"><p className="mb-[22px] text-[11px] font-bold uppercase tracking-[.15em] text-accent">The Eligores family</p><h1 id="hero-title" className="font-[Georgia,serif] text-[clamp(43px,4.15vw,69px)] leading-[.98] font-normal tracking-[-.055em] text-ink">A place to keep the people and moments that matter close.</h1><p className="mt-[31px] max-w-[360px] text-base leading-[1.55] text-muted">Welcome to our corner of the internet—made with care, and growing with us.</p></div><FamilyGrid /></section></main> : <ComingSoon title={pageNames[page]} />} */}
      {page === 'games' ? (
          <GamesLanding />
        ) : page === 'gallery-album' ? (
          <GalleryAlbumLanding slug={galleryAlbumSlug!} />
        ) : page === 'gallery' ? (
          <GalleryLanding />
        ) : page === 'home' ? (
          <main id="home">
            <main id="home">
              {/* </main> : <ComingSoon title={pageNames[page]} />} */}
            <section 
              className="grid flex-1 items-center gap-[clamp(48px,8vw,132px)] py-[clamp(64px,10vw,142px)] max-[820px]:gap-[52px] max-[820px]:pt-[76px] min-[821px]:grid-cols-[minmax(250px,.82fr)_minmax(520px,1.45fr)]"
              aria-labelledby="hero-title">
                <div className="max-w-[440px] max-[820px]:max-w-[540px]">
                  <p className="mb-[22px] text-[11px] font-bold uppercase tracking-[.15em] text-accent">The Eligores family</p>
                  <h1 id="hero-title" className="font-[Georgia,serif] text-[clamp(43px,4.15vw,69px)] leading-[.98] font-normal tracking-[-.055em] text-ink">A place to keep the people and moments that matter close.</h1>
                  <p className="mt-[31px] max-w-[360px] text-base leading-[1.55] text-muted">Welcome to our corner of the internet—made with care, and growing with us.</p>
                </div>
                <FamilyGrid />
              </section>
            </main>
          </main>
        ) : (
          <ComingSoon title={pageNames[page]} />
        )}
      <footer className="flex justify-between border-t border-line py-6 pb-[30px] text-xs tracking-[.04em] text-muted max-[520px]:flex-col max-[520px]:gap-[7px]"><span>eligores</span><span>Made for family, near and far.</span></footer>
    </div>
  )
}

export default App
