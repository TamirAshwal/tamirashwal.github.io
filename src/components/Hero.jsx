import { profile } from '../data/profile.js'
import ContactLinks from './ContactLinks.jsx'

// Wraps each phrase from profile.highlights in a marker-style span.
function withHighlights(text, phrases = []) {
  if (phrases.length === 0) return text
  const escaped = phrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const parts = text.split(new RegExp(`(${escaped.join('|')})`))
  return parts.map((part, i) =>
    phrases.includes(part) ? (
      <span key={i} className="highlight">
        {part}
      </span>
    ) : (
      part
    ),
  )
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__heading">
        <h1 id="hero-heading" className="hero__name">{profile.name}</h1>
        <p className="hero__title">{profile.title}</p>
      </div>
      <div className="hero__body">
        <p className="hero__intro">{withHighlights(profile.intro, profile.highlights)}</p>
        <div className="hero__actions">
          <ContactLinks />
          <a className="button button--primary" href={profile.links.cv} download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
