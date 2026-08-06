import cx from '../../lib/cx';
import Reveal from './Reveal';

/**
 * Consistent section header: a small mono eyebrow, the title, and an optional
 * supporting line. Replaces the four slightly different underlined headings the
 * previous sections each rolled by hand.
 */
const SectionHeading = ({ eyebrow, title, description, align = 'left', className = '' }) => {
  const centered = align === 'center';

  return (
    <Reveal className={cx('max-w-2xl', centered && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p
          className={cx(
            'mb-3 flex items-center gap-2 font-mono text-xs font-medium tracking-[0.18em] text-primary uppercase',
            centered && 'justify-center',
          )}
        >
          <span aria-hidden="true" className="h-px w-6 bg-primary/50" />
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold text-fg sm:text-4xl">{title}</h2>

      {description && (
        <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
