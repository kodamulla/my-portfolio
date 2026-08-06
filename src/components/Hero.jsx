import HeroImage from '../assets/hero.png';
import { site } from '../data/site';
import Container from './ui/Container';
import Reveal from './ui/Reveal';

const Hero = () => (
  <section
    id="home"
    className="relative flex min-h-dvh scroll-mt-20 items-center overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-32 lg:pb-24"
  >
    {/* One soft tint behind the portrait — enough to give the page depth
        without turning the hero into a gradient. */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] h-[420px] w-[420px] rounded-full bg-primary/8 blur-[120px]" />
    </div>

    <Container className="relative">
      <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <Reveal
            as="p"
            className="mb-5 flex items-center gap-2 font-mono text-sm font-medium tracking-[0.14em] text-primary uppercase"
          >
            <span aria-hidden="true" className="h-px w-6 bg-primary/50" />
            Greetings, I am
          </Reveal>

          <Reveal
            as="h1"
            delay={0.05}
            className="text-4xl leading-[1.08] font-bold text-fg sm:text-5xl lg:text-6xl"
          >
            {site.name}
          </Reveal>

          <Reveal
            as="p"
            delay={0.1}
            className="mt-4 font-display text-lg font-semibold text-fg-muted sm:text-xl lg:text-2xl"
          >
            {site.role}
          </Reveal>

          <Reveal
            as="p"
            delay={0.15}
            className="mt-7 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg"
          >
            I build full-stack web applications end to end — from considered, accessible interfaces
            through to secure APIs and the data models beneath them. Currently completing my{' '}
            <span className="font-semibold text-fg">BSc (Hons) in Software Engineering</span> at the{' '}
            <span className="font-semibold text-fg">University of Plymouth, UK</span>, I care as much
            about how a product feels to use as how cleanly it is engineered, and I am drawn to
            problems where thoughtful architecture makes a real difference.
          </Reveal>
        </div>

        <Reveal delay={0.1} className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-4 rounded-full border border-line" />
            {/* White panel so the portrait reads as a bright, deliberate object
                against the dark page rather than fading into it. */}
            <div className="relative rounded-full bg-white p-2.5 shadow-lift">
              <div className="h-52 w-52 overflow-hidden rounded-full bg-white sm:h-64 sm:w-64 lg:h-72 lg:w-72">
                <img
                  src={HeroImage}
                  alt={site.name}
                  width={397}
                  height={542}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);

export default Hero;
