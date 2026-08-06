import cx from '../../lib/cx';

/** The single horizontal rhythm for the whole page. */
const Container = ({ className = '', children }) => (
  <div className={cx('mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8', className)}>{children}</div>
);

export default Container;
