import { Link } from 'react-scroll';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { site, navLinks, NAV_OFFSET } from '../data/site';
import Container from './ui/Container';

const socials = [
  { id: 'github', label: 'GitHub', href: site.socials.github, Icon: FiGithub },
  { id: 'linkedin', label: 'LinkedIn', href: site.socials.linkedin, Icon: FiLinkedin },
  { id: 'email', label: 'Email', href: `mailto:${site.email}`, Icon: FiMail },
];

const Footer = () => (
  <footer className="border-t border-line bg-bg-subtle">
    <Container className="py-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Link
            to="home"
            smooth
            duration={500}
            className="inline-flex cursor-pointer items-center gap-2.5"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-primary-fg">
              {site.initials}
            </span>
            <span className="font-display text-base font-semibold tracking-tight text-fg">
              {site.name}
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-fg-muted">{site.role}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={500}
              offset={NAV_OFFSET}
              className="cursor-pointer text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          {socials.map(({ id, label, href, Icon }) => (
            <a
              key={id}
              href={href}
              {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' })}
              aria-label={label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-fg-muted transition-colors duration-200 hover:bg-surface-hover hover:text-fg"
            >
              <Icon size={19} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
        <p className="text-sm text-fg-subtle">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>

        <Link
          to="home"
          smooth
          duration={500}
          className="inline-flex cursor-pointer items-center gap-1.5 text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
        >
          Back to top
          <FiArrowUp size={15} />
        </Link>
      </div>
    </Container>
  </footer>
);

export default Footer;
