import { useState } from 'react'
import { profile } from '../data/profile.js'

export default function ContactLinks() {
  const { github, linkedin, email } = profile.links
  // The label switches to the address on click, so it stays visible after the mail app prompt.
  const [showEmail, setShowEmail] = useState(false)

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
        <a className="link" href={`mailto:${email}`} title={email} onClick={() => setShowEmail(true)}>
          {showEmail ? email : 'Email'}
        </a>
      </li>
    </ul>
  )
}
