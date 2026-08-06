import cx from '../../lib/cx';

const TONES = {
  neutral: 'border-line bg-bg-subtle text-fg-muted',
  primary: 'border-primary/20 bg-primary-soft text-primary',
};

/** Small pill used for tech stacks and category labels. */
const Tag = ({ tone = 'neutral', className = '', children }) => (
  <span
    className={cx(
      'inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium tracking-tight',
      TONES[tone],
      className,
    )}
  >
    {children}
  </span>
);

export default Tag;
