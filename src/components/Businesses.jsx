import { businesses, copy } from '../content/siteConfig'
import { BusinessIcon } from './icons'

const { businesses: text } = copy

export default function Businesses() {
  return (
    <section className="section" aria-labelledby="businesses-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{text.eyebrow}</span>
          <h2 id="businesses-title">{text.title}</h2>
          <p>{text.sub}</p>
        </div>

        <ul className="chips" role="list">
          {businesses.map((b) => (
            <li key={b.name} className="chip">
              <span className="chip__icon">
                <BusinessIcon name={b.icon} />
              </span>
              {b.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
