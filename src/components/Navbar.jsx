import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMenu,
  FiX,
} from 'react-icons/fi';
import { site, navLinks, NAV_OFFSET } from '../data/site';
import Container from './ui/Container';
import cx from '../lib/cx';

const socials = [
  {
    id: 'github',
    label: 'GitHub',
    href: site.socials.github,
    Icon: FiGithub,
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: site.socials.linkedin,
    Icon: FiLinkedin,
    external: true,
  },
  {
    id: 'download',
    label: 'Download Resume',
    href: site.resume.href,
    Icon: FiDownload,
    download: site.resume.downloadAs,
    external: false,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header
      className={cx(
        'fixed inset-x-0 top-0 z-50 h-20 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-line bg-bg/80 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          to="home"
          smooth
          duration={500}
          onClick={() => setOpen(false)}
          className="group inline-flex cursor-pointer items-center gap-2.5"
        >
          <span className="font-display text-base font-semibold tracking-tight text-fg">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth
              spy
              duration={500}
              offset={NAV_OFFSET}
              activeClass="text-fg bg-surface-hover"
              className="cursor-pointer rounded-lg px-3.5 py-2 text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-fg"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex">
            {socials.map(
              ({
                id,
                label,
                href,
                Icon,
                external,
                download,
              }) => (
                <a
                  key={id}
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(external
                    ? {
                        target: '_blank',
                        rel: 'noreferrer',
                      }
                    : {
                        download,
                      })}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-fg-muted transition-colors duration-200 hover:bg-surface-hover hover:text-fg"
                >
                  <Icon size={18} />
                </a>
              ),
            )}
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-fg-muted transition-colors duration-200 hover:bg-surface-hover hover:text-fg md:hidden"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </Container>

      {open && (
        <>
          <div
            className="fixed inset-x-0 top-20 bottom-0 bg-slate-950/40 md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-20 max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-line bg-bg shadow-card md:hidden"
          >
            <Container className="py-3">
              <nav aria-label="Mobile" className="flex flex-col">
                {navLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    smooth
                    duration={500}
                    offset={NAV_OFFSET}
                    onClick={() => setOpen(false)}
                    className="cursor-pointer rounded-lg px-3 py-3.5 text-base font-medium text-fg-muted transition-colors duration-200 hover:bg-surface-hover hover:text-fg"
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="mt-2 flex items-center gap-1 border-t border-line pt-3">
                {socials.map(
                  ({
                    id,
                    label,
                    href,
                    Icon,
                    external,
                    download,
                  }) => (
                    <a
                      key={id}
                      href={href}
                      aria-label={label}
                      title={label}
                      onClick={() => setOpen(false)}
                      {...(external
                        ? {
                            target: '_blank',
                            rel: 'noreferrer',
                          }
                        : {
                            download,
                          })}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-fg-muted transition-colors duration-200 hover:bg-surface-hover hover:text-fg"
                    >
                      <Icon size={20} />
                    </a>
                  ),
                )}
              </div>
            </Container>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;