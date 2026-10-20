import { profile } from '../data/profile.js'
import ContactLinks from './ContactLinks.jsx'

export default function Footer() {
  return (
    <footer id="contact" className="container site-footer">
      <div className="section">
        <h2 className="section__label">Contact</h2>
        <div className="section__body site-footer__body">
          <ContactLinks />
          <p className="site-footer__meta">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
