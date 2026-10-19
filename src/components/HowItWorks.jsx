import { steps, copy } from '../content/siteConfig'

const { how } = copy

export default function HowItWorks() {
  return (
    <section className="section section--tint" aria-labelledby="how-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{how.eyebrow}</span>
          <h2 id="how-title">{how.title}</h2>
          <p>{how.sub}</p>
        </div>

        <ol className="steps">
          {steps.map((s) => (
            <li key={s.title} className="step">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
