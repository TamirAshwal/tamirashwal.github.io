import { profile } from '../data/profile.js'

export default function ContactLinks() {
  const { github, linkedin, email } = profile.links

  return (
    <ul className="contact-links">
      <li>
        <a className="link" href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </li>
      <li>
        <a className="link" href={linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </li>
      <li>
        <a className="link" href={`mailto:${email}`}>
          Email
        </a>
      </li>
    </ul>
  )
}
