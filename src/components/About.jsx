import { useState } from 'react';
import { education, academicPerformance } from '../data/education';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Reveal from './ui/Reveal';

const highlights = [
  { title: 'Full-Stack', caption: 'Development' },
  { title: 'MERN Stack', caption: 'Specialized' },
  { title: 'Backend', caption: 'APIs & Security' },
];

/**
 * Official institution logo on a white tile so dark marks stay legible against
 * the dark page. Falls back to a monogram if the file has not been added yet,
 * so the card never renders a broken image.
 *
 * The logo is decorative: the institution name sits directly beside it, so an
 * alt text would only duplicate what a screen reader already announces.
 */
const InstitutionLogo = ({ logo, monogram }) => {
  const [failed, setFailed] = useState(false);

  return (
    <span
      aria-hidden="true"
      className="inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-white"
    >
      {failed ? (
        <span className="font-display text-[11px] font-bold tracking-tight text-slate-900">
          {monogram}
        </span>
      ) : (
        <img
          src={logo}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-contain p-1.5"
        />
      )}
    </span>
  );
};

const About = () => (
  <Section id="about" className="bg-bg-subtle">
    <SectionHeading
      eyebrow="About"
      title="About me"
    />

    <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
      <div>
        <Reveal delay={0.06}>
          <p className="mt-4 max-w-[680px] text-base leading-relaxed text-fg-muted sm:text-lg">
            I’m a Software Engineering undergraduate and Full Stack Developer focused on building
            secure, responsive, and maintainable web applications. My main focus is{' '}
            <span className="font-semibold text-fg">MERN Stack development</span>, working across
            responsive React interfaces, Node.js and Express APIs, MongoDB data models,
            authentication, validation, and role-based access control.
            <br />
            <br />
            I enjoy understanding how each layer of an application connects and turning ideas into
            practical solutions that are easy to use and maintain. I also use modern development
            tools and AI assistants to support research, debugging, documentation, and code review
            while always validating the final implementation.
            <br />
            <br />
            My goal is to build software that solves real problems with a strong focus on clarity,
            reliability, security, and long-term maintainability.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-3 sm:grid-cols-3">
          {highlights.map(({ title, caption }, index) => (
            <li key={title} className="flex">
              <Reveal delay={0.16 + index * 0.06} className="flex w-full">
                <Card className="flex w-full flex-col justify-center px-4 py-4">
                  <p className="font-display text-base font-semibold text-fg">
                    {title}
                  </p>
                  <p className="mt-1 font-mono text-[11px] tracking-tight text-fg-subtle">
                    {caption}
                  </p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <Reveal delay={0.1}>
        <Card className="p-6 sm:p-7">
          <h3 className="font-mono text-xs font-medium tracking-[0.16em] text-fg-subtle uppercase">
            Education
          </h3>

          <ul className="mt-5 space-y-5">
            {education.map((entry) => (
              <li
                key={entry.id}
                className="flex gap-4 border-b border-line pb-5 last:border-b-0 last:pb-0"
              >
                <InstitutionLogo logo={entry.logo} monogram={entry.monogram} />

                <div className="min-w-0">
                  <p className="font-display text-base font-semibold text-fg">
                    {entry.institution}
                  </p>

                  <p className="mt-0.5 text-sm text-primary">
                    {entry.qualification}
                  </p>

                  {entry.period && (
                    <p className="mt-1 font-mono text-[11px] tracking-tight text-fg-subtle">
                      {entry.period}
                    </p>
                  )}

                  {entry.detail && (
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                      {entry.detail}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-baseline justify-between gap-4 rounded-lg border border-line bg-bg-subtle px-4 py-3.5">
            <span className="font-mono text-[11px] tracking-[0.14em] text-fg-subtle uppercase">
              {academicPerformance.label}
            </span>

            <span className="font-display text-sm font-semibold text-fg">
              {academicPerformance.value}
            </span>
          </div>
        </Card>
      </Reveal>
    </div>
  </Section>
);

export default About;