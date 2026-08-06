import { useState } from 'react';
import { education, academicPerformance } from '../data/education';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Reveal from './ui/Reveal';

const highlights = [
  { title: 'Full-Stack', caption: 'Developer' },
  { title: 'MERN Stack', caption: 'Specialized' },
  { title: 'UI / UX', caption: 'Enthusiast' },
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

    <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
      <div>
       

        <Reveal delay={0.06}>
          <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
           I’m a Software Engineering undergraduate and Full Stack Developer who enjoys turning ideas into complete, usable applications.

My main focus is MERN Stack development, where I work across the full application flow from responsive React interfaces to secure Node.js and Express APIs, MongoDB data models, authentication, validation, and role-based access control. I enjoy understanding how every layer connects and building systems that are both easy to use and maintain.

I also use AI assistants as part of my development workflow to support research, debugging, code review, documentation, and faster problem-solving. I treat AI as a productivity tool rather than a replacement for engineering judgment, and I always review and validate the final implementation.

What I value most is creating software that solves a real problem. Whether I am improving a user interface, designing an API, securing protected routes, managing application data, or troubleshooting deployment issues, I approach each task with attention to clarity, reliability, and long-term maintainability.
          </p>
        </Reveal>

        

        <ul className="mt-9 grid gap-3 sm:grid-cols-3">
          {highlights.map(({ title, caption }, index) => (
            <li key={title} className="flex">
              <Reveal delay={0.16 + index * 0.06} className="flex w-full">
                <Card className="flex w-full flex-col justify-center px-4 py-4">
                  <p className="font-display text-base font-semibold text-fg">{title}</p>
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
                  <p className="mt-0.5 text-sm text-primary">{entry.qualification}</p>
                  {entry.period && (
                    <p className="mt-1 font-mono text-[11px] tracking-tight text-fg-subtle">
                      {entry.period}
                    </p>
                  )}
                  {entry.detail && (
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">{entry.detail}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* A labelled fact, deliberately not styled as a badge or award. */}
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
