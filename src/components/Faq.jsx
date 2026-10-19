import { faqs, copy } from '../content/siteConfig'

const { faq } = copy

export default function Faq() {
  return (
    <section className="section section--tint" aria-labelledby="faq-title" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2 id="faq-title">{faq.title}</h2>
        </div>

        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p className="faq-item__a">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
