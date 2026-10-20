import { profile } from '../data/profile.js'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-header__name" href="#top">
          {profile.name}
        </a>
        <nav className="site-nav" aria-label="Primary">
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
