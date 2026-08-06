import cx from '../../lib/cx';
import Container from './Container';

/**
 * A full-viewport section. min-h-dvh (not h-dvh) so a section always fills the
 * screen but still grows past it when its content is taller — which is what
 * happens to Projects and Contact on narrow phones.
 *
 * Content is vertically centred within the section, and scroll-mt clears the
 * fixed navbar when the section is targeted.
 */
const Section = ({ id, className = '', containerClassName = '', children }) => (
  <section
    id={id}
    className={cx(
      'flex min-h-dvh scroll-mt-20 flex-col justify-center py-24 sm:py-28',
      className,
    )}
  >
    <Container className={containerClassName}>{children}</Container>
  </section>
);

export default Section;
