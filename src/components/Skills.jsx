import { skills } from '../data/skills';
import Container from './ui/Container';
import Card from './ui/Card';

/**
 * Seconds for one full pass. The track advances by exactly one set, so the
 * perceived speed is (set width / duration) — around 28px per second, which
 * reads as drifting rather than scrolling.
 */
const DURATION_SECONDS = 70;

/**
 * A slim strip rather than a full-height section: it separates About from
 * Projects without demanding a whole screen of its own.
 */
const Skills = () => (
  <section
  id="skills"
  className="scroll-mt-20 border-y border-line bg-bg-subtle py-14 sm:py-16"
>
    <Container>
      <div className="flex items-center gap-4">
        <h2 className="font-mono text-xs font-medium tracking-[0.16em] text-fg-subtle uppercase">
          Technical stack
        </h2>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>
    </Container>

    <div className="marquee relative mt-6 overflow-hidden">
      <ul
        className="marquee-track marquee-track--left"
        style={{ animationDuration: `${DURATION_SECONDS}s` }}
        aria-label="Technical skills"
      >
        {/* The set is rendered twice so translating by -50% lands on an
            identical frame. Spacing lives on the items rather than as a flex
            `gap`: with `gap` the track is one gap short of twice a set, so the
            loop would jump. The duplicate set is hidden from assistive tech so
            the list is not announced twice. */}
        {[...skills, ...skills].map((skill, index) => {
          const isDuplicate = index >= skills.length;
          return (
            <li
              key={`${skill.title}-${index}`}
              aria-hidden={isDuplicate || undefined}
              className="pr-3 sm:pr-4"
            >
              <Card
  className="flex h-20 w-20 items-center justify-center rounded-2xl p-4 sm:h-24 sm:w-24"
  title={skill.title}
>
  <skill.Icon
    className={skill.color}
    size={48}
    aria-label={skill.title}
  />
</Card>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default Skills;
