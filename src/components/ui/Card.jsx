import cx from '../../lib/cx';

/**
 * The surface every panel on the site is built from.
 *
 * @param {boolean} interactive Adds the hover lift used by clickable cards.
 */
const Card = ({ as: Tag = 'div', interactive = false, className = '', children, ...props }) => (
  <Tag
    className={cx(
      'rounded-card border border-line bg-surface shadow-soft',
      interactive &&
        'transition-[transform,box-shadow,border-color] duration-300 ' +
          'hover:-translate-y-1 hover:border-line-strong hover:shadow-lift ' +
          'focus-visible:-translate-y-1 focus-visible:shadow-lift',
      className,
    )}
    {...props}
  >
    {children}
  </Tag>
);

export default Card;
