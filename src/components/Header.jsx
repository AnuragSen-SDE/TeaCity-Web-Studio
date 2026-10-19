import { brand, nav } from '../content/siteConfig'
import { waLink } from '../utils/whatsapp'
import { WhatsAppIcon } from './icons'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="logo" href="#main" aria-label={`${brand.name} — home`}>
          <img
            src="/logo.webp"
            alt=""
            width={44}
            height={44}
            decoding="async"
          />
          <span className="logo__text">{brand.name}</span>
        </a>

        <nav className="site-nav" aria-label="Main">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn--wa site-header__wa"
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon size={20} />
          <span className="btn__label">WhatsApp</span>
        </a>
      </div>
    </header>
  )
}
