import cx from '../../lib/cx';

const BASE =
  'relative inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap ' +
  'transition-[background-color,border-color,color,box-shadow,transform] duration-200 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ' +
  'disabled:pointer-events-none disabled:opacity-55 active:translate-y-px';

const VARIANTS = {
  primary: 'bg-primary text-primary-fg shadow-soft hover:bg-primary-hover hover:shadow-card',
  secondary: 'bg-surface text-fg border border-line shadow-soft hover:bg-surface-hover hover:border-line-strong',
  outline: 'border border-primary/45 text-primary hover:bg-primary-soft hover:border-primary',
  ghost: 'text-fg-muted hover:bg-surface-hover hover:text-fg',
};

const SIZES = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
  icon: 'h-11 w-11',
};

const Spinner = () => (
  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
    <path
      d="M22 12a10 10 0 0 1-10 10"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      className="opacity-90"
    />
  </svg>
);

/**
 * One button for the whole site.
 *
 * @param {'primary'|'secondary'|'outline'|'ghost'} variant
 * @param {'sm'|'md'|'lg'|'icon'} size
 * @param {boolean} loading  Swaps in a spinner and blocks interaction. The label
 *                           stays mounted but hidden so the width never jumps.
 */
const Button = ({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  children,
  ...props
}) => {
  const isNativeButton = Tag === 'button';

  return (
    <Tag
      className={cx(BASE, VARIANTS[variant], SIZES[size], className)}
      disabled={isNativeButton ? disabled || loading : undefined}
      aria-busy={loading || undefined}
      aria-disabled={!isNativeButton && (disabled || loading) ? true : undefined}
      {...(isNativeButton ? { type: props.type ?? 'button' } : null)}
      {...props}
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </span>
      )}
      <span className={cx('inline-flex items-center gap-2', loading && 'invisible')}>{children}</span>
    </Tag>
  );
};

export default Button;
