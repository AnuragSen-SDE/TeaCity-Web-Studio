import { copy } from '../content/siteConfig'
import { waLink } from '../utils/whatsapp'
import { WhatsAppIcon } from './icons'

const { cta } = copy

export default function FinalCta() {
  return (
    <section
      className="section section--green final-cta"
      aria-labelledby="cta-title"
    >
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{cta.eyebrow}</span>
          <h2 id="cta-title">{cta.title}</h2>
        </div>
        <p>{cta.sub}</p>
        <a
          className="btn btn--light"
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={22} />
          {cta.button}
        </a>
      </div>
    </section>
  )
}
