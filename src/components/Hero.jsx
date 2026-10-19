import { copy } from '../content/siteConfig'
import { waLink } from '../utils/whatsapp'
import { WhatsAppIcon, CheckIcon, CheckCircleIcon } from './icons'

const { hero } = copy

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div>
          <span className="hero__badge">{hero.badge}</span>
          <h1 id="hero-title">{hero.title}</h1>
          <p className="hero__sub">{hero.sub}</p>
          <div className="hero__ctas">
            <a
              className="btn btn--wa btn--block"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={22} />
              {hero.ctaPrimary}
            </a>
            <a className="btn btn--ghost btn--block" href="#packages">
              {hero.ctaSecondary}
            </a>
          </div>
          <ul className="hero__trust">
            {hero.trust.map((t) => (
              <li key={t}>
                <CheckIcon /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="phone">
            <div className="phone__screen">
              <div className="phone__site-head">
                <span className="phone__logo" />
                <span className="phone__biz">{hero.mockSiteName}</span>
              </div>
              <div className="phone__line phone__line--title" />
              <div className="phone__line" />
              <div className="phone__line phone__line--short" />
              <div className="phone__tags">
                {hero.mockServices.map((s) => (
                  <span key={s} className="phone__tag">
                    {s}
                  </span>
                ))}
              </div>
              <div className="phone__wa">
                <WhatsAppIcon size={16} />
                {hero.mockCta}
              </div>
            </div>
          </div>
          <div className="hero__toast">
            <span className="hero__toast-icon">
              <CheckCircleIcon size={16} />
            </span>
            {hero.toast}
          </div>
        </div>
      </div>
    </section>
  )
}
