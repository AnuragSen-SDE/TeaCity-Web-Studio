import { brand, footer, PHONE_NUMBER, nav } from '../content/siteConfig'
import { waLink } from '../utils/whatsapp'
import { MapPinIcon, PhoneIcon } from './icons'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <span className="logo">
              <img
                src="/logo.webp"
                alt=""
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
              />
              <span className="logo__text">{brand.name}</span>
            </span>
            <p>
              {brand.tagline}. Built with care in Dibrugarh — the Tea City of
              Assam.
            </p>
            <p className="site-footer__areas">
              <MapPinIcon width={16} height={16} /> {footer.serviceAreas}
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="site-footer__heading">Explore</h3>
            <ul className="site-footer__links">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="site-footer__heading">Contact</h3>
            <ul className="site-footer__links">
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}>
                  <PhoneIcon width={16} height={16} /> {PHONE_NUMBER}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          © {year} {footer.copyrightName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
