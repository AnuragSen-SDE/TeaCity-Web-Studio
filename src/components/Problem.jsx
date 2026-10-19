import { copy } from '../content/siteConfig'
import { XIcon, CheckIcon } from './icons'

const { problem } = copy

export default function Problem() {
  return (
    <section className="section section--tint" aria-labelledby="problem-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{problem.eyebrow}</span>
          <h2 id="problem-title">{problem.title}</h2>
          <p>{problem.sub}</p>
        </div>

        <div className="compare">
          <div className="compare__col compare__col--bad">
            <h3 className="compare__head">
              <span className="compare__icon compare__icon--bad">
                <XIcon />
              </span>
              {problem.badTitle}
            </h3>
            <ul>
              {problem.bad.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="compare__col compare__col--good">
            <h3 className="compare__head">
              <span className="compare__icon compare__icon--good">
                <CheckIcon />
              </span>
              {problem.goodTitle}
            </h3>
            <ul>
              {problem.good.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="problem__punch">{problem.punch}</p>
      </div>
    </section>
  )
}
