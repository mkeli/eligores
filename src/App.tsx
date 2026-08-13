import FamilyGrid from './components/FamilyGrid'
import navIcon from '../images/mke-navicon.png'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Eligores home"><img src={navIcon} alt="" /><span>eligores</span></a>
        <nav className="site-nav" aria-label="Primary navigation">
          {['Home', 'Family', 'Stories', 'Gallery', 'Michael', 'Contact'].map((item) => <a key={item} href={item === 'Home' ? '#home' : `#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
      </header>
      <main id="home"><section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow">The Eligores family</p><h1 id="hero-title">A place to keep the people and moments that matter close.</h1><p className="intro">Welcome to our corner of the internet—made with care, and growing with us.</p></div><FamilyGrid /></section></main>
      <footer className="site-footer"><span>eligores</span><span>Made for family, near and far.</span></footer>
    </div>
  )
}

export default App
