import { about } from '../content/siteConfig'

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          <div className="about__photo-wrap">
            <img
              className="about__photo"
              src={about.photo}
              alt={`${about.name}, founder of Teacity Web Studio`}
              width={260}
              height={260}
              loading="lazy"
            />
          </div>

          <div className="about__text">
            <span className="eyebrow">About me</span>
            <h2 id="about-title" className="about__name">
              {about.name}
            </h2>
            <p className="about__role">{about.role}</p>
            {about.chips && (
              <ul className="about__chips">
                {about.chips.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            )}
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
