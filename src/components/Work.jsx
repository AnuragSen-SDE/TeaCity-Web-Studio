import { workSamples, copy } from '../content/siteConfig'
import { waLink } from '../utils/whatsapp'
import { WhatsAppIcon } from './icons'

const { work } = copy

function demoMessage(title) {
  return `Hi Anurag! I would like a website like the ${title} demo. Please share the details.`
}

export default function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{work.eyebrow}</span>
          <h2 id="work-title">{work.title}</h2>
          <p>{work.sub}</p>
        </div>

        <div className="work-grid">
          {workSamples.map((w) => (
            <article key={w.title} className="work-card">
              {w.live ? (
                <div className="work-card__frame" aria-hidden="true">
                  <div className="work-card__bar">
                    <span />
                    <span />
                    <span />
                    <em>{w.url.replace(/^https?:\/\//, '').slice(0, 32)}</em>
                  </div>
                  <div className="work-card__shot">
                    <span className="work-card__shot-title" />
                    <span className="work-card__shot-line" />
                    <span className="work-card__shot-line w80" />
                    <span className="work-card__shot-btn" />
                  </div>
                  <span className="work-card__status work-card__status--live">
                    {w.type}
                  </span>
                </div>
              ) : (
                <div
                  className="work-card__frame work-card__frame--pending"
                  aria-hidden="true"
                >
                  <div className="work-card__bar">
                    <span />
                    <span />
                    <span />
                    <em>coming soon</em>
                  </div>
                  <div className="work-card__pending-label">{w.type}</div>
                </div>
              )}
              <div className="work-card__body">
                <h3>{w.title}</h3>
                <p>{w.description}</p>
                {w.live ? (
                  <a
                    className="btn btn--ghost"
                    href={w.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {work.liveCta} →
                  </a>
                ) : (
                  <a
                    className="btn btn--wa"
                    href={waLink(demoMessage(w.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon size={20} />
                    {work.demoCta}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
