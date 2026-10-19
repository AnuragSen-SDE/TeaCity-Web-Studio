import {
  packages,
  maintenance,
  addons,
  terms,
  copy,
  packageMessage,
} from '../content/siteConfig'
import { waLink } from '../utils/whatsapp'
import {
  WhatsAppIcon,
  CheckIcon,
  ClockIcon,
  RefreshIcon,
} from './icons'

const { packages: text } = copy

export default function Packages() {
  return (
    <section
      className="section section--tint"
      id="packages"
      aria-labelledby="packages-title"
    >
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{text.eyebrow}</span>
          <h2 id="packages-title">{text.title}</h2>
          <p>{text.sub}</p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={pkg.popular ? 'package package--popular' : 'package'}
            >
              {pkg.popular && (
                <span className="package__badge">{text.popularBadge}</span>
              )}
              <h3 className="package__name">{pkg.name}</h3>
              <p className="package__for">{pkg.for}</p>
              <p className="package__price">
                {pkg.price}
                <span className="package__price-note">{pkg.priceNote}</span>
              </p>
              <div className="package__meta">
                <span>
                  <ClockIcon /> {pkg.delivery}
                </span>
                <span>
                  <RefreshIcon /> {pkg.revisions}
                </span>
              </div>
              <ul className="package__features">
                {pkg.features.map((f) => (
                  <li key={f}>
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                className={`btn ${pkg.popular ? 'btn--wa' : 'btn--ghost'} btn--block`}
                href={waLink(packageMessage(pkg.name))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={20} />
                Get the {pkg.name} package
              </a>
            </article>
          ))}
        </div>

        <div className="extras">
          <div className="card">
            <h3>{text.maintenanceTitle}</h3>
            <p className="extras__price">{maintenance.price}</p>
            <ul>
              {maintenance.includes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>{text.addonsTitle}</h3>
            <table className="addons-table">
              <tbody>
                {addons.map((a) => (
                  <tr key={a.name}>
                    <td>{a.name}</td>
                    <td>{a.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="terms">
          <strong>{text.termsTitle}</strong>
          <ul>
            {terms.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
