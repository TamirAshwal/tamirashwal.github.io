import { profile } from '../data/profile.js'
import ContactLinks from './ContactLinks.jsx'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__heading">
        <h1 id="hero-heading" className="hero__name">{profile.name}</h1>
        <p className="hero__title">{profile.title}</p>
      </div>
      <div className="hero__body">
        <p className="hero__intro">{profile.intro}</p>
        <div className="hero__actions">
          <ContactLinks />
          <a className="button" href={profile.links.cv} download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
