import ResumePDF from '../assets/Hansi_Resume.pdf';

/**
 * Contact points and identity, in one place so the navbar, hero and footer can
 * never drift apart again. Values are unchanged from the previous components.
 */
export const site = {
  name: 'Hansi Kodamulla',
  initials: 'HK',
  role: 'Software Engineering Undergraduate & Full Stack Developer',
  email: 'hansikavithma25@gmail.com',
  resume: {
    href: ResumePDF,
    downloadAs: 'Hansi_Resume.pdf',
  },
  socials: {
    github: 'https://github.com/kodamulla',
    linkedin: 'https://www.linkedin.com/in/hansi-kodamulla-b964202b9/',
    download: ResumePDF,
  },
};

export const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

/** Height of the fixed navbar, used as the react-scroll offset. */
export const NAV_OFFSET = -80;

export default site;
