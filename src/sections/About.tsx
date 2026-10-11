import { asset } from '../lib/asset'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import { cv } from '../content/contacts'
import { certifications, education } from '../content/education'
import { experience } from '../content/experience'
import { profile } from '../content/profile'
import { hardSkills, softSkills } from '../content/skills'
import { formatYearMonth, yearsSince } from '../lib/date'
import styles from './About.module.css'

export function About() {
  const years = yearsSince(profile.careerStart)
  const current = experience.find((e) => e.end === 'present')
  const [first, ...rest] = profile.name.split(' ')

  return (
    <Section id="about" title="About me" hideTitle>
      <div className={styles.hero}>
        <div className={styles.intro}>
          <h1 className={styles.name}>
            <span>{first}</span> <span>{rest.join(' ')}</span>
          </h1>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.lead}>{profile.intro}</p>

          <dl className={styles.facts}>
            {current && (
              <div>
                <dt>Currently</dt>
                <dd>{current.company}</dd>
              </div>
            )}
            <div>
              <dt>Experience</dt>
              <dd>{years}+ years in data engineering</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>{profile.spokenLanguages.map((l) => l.name).join(', ')}</dd>
            </div>
          </dl>

          <div className={styles.actions}>
            <a className="btn btn-primary" href="#contact">
              Get in touch
            </a>
            <a className="btn" href={asset(cv.href)} download={cv.downloadName}>
              <Icon name="download" />
              Download CV
            </a>
          </div>
        </div>

        <figure className={styles.photo}>
          <picture>
            {profile.photo.srcWebp && <source srcSet={asset(profile.photo.srcWebp)} type="image/webp" />}
            <img
              src={asset(profile.photo.src)}
              alt={profile.photo.alt}
              width={800}
              height={1000}
              fetchPriority="high"
            />
          </picture>
        </figure>
      </div>

      <div className={styles.grid}>
        <article className={styles.story}>
          <h3 className={styles.subhead}>My story</h3>
          <div className={styles.prose}>
            {profile.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {profile.interests.length > 0 && (
            <>
              <h3 className={styles.subhead}>Outside work</h3>
              <ul className={styles.interests}>
                {profile.interests.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </>
          )}
        </article>

        <aside className={styles.side}>
          <h3 className={styles.subhead}>Certifications</h3>
          <ul className={styles.certs}>
            {certifications.map((c) => (
              <li key={c.name + (c.date ?? '')} data-status={c.status ?? 'past'}>
                <span className={styles.certDate}>
                  {c.status === 'in-preparation' ? 'In progress' : c.date ? formatYearMonth(c.date) : ''}
                </span>
                <span className={styles.certName}>
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noopener noreferrer">
                      {c.name}
                    </a>
                  ) : (
                    c.name
                  )}
                </span>
                <span className={styles.certMeta}>
                  {c.issuer}
                  {c.validUntil && `, valid until ${c.validUntil}`}
                </span>
              </li>
            ))}
          </ul>

          <h3 className={styles.subhead}>Education</h3>
          <ul className={styles.certs}>
            {education.map((e) => (
              <li key={e.title}>
                <span className={styles.certDate}>
                  {e.start}–{e.end}
                </span>
                <span className={styles.certName}>{e.title}</span>
                <span className={styles.certMeta}>{e.institution}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className={styles.block}>
        <h3 className={styles.subhead}>Hard skills</h3>
        <dl className={styles.skills}>
          {hardSkills.map((g) => (
            <div key={g.name} className={styles.skillRow}>
              <dt>{g.name}</dt>
              <dd>
                <ul className="tag-list">
                  {g.items.map((s) => (
                    <li key={s} className="tag">
                      {s}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={styles.block}>
        <h3 className={styles.subhead}>Soft skills</h3>
        <ul className={styles.soft}>
          {softSkills.map((s) => (
            <li key={s.name}>
              <strong>{s.name}</strong>
              <p>{s.evidence}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
