import { useLayoutEffect, useRef } from 'react';
import cx from '../../lib/cx';

/**
 * If the observer has not reported even once within this window, treat the
 * environment as unable to run the effect and show the content unconditionally.
 * A healthy browser delivers the initial callback within a frame or two, so
 * this never fires in practice.
 */
const OBSERVER_FALLBACK_MS = 600;

/**
 * Fades content up the first time it scrolls into view.
 *
 * CSS-driven rather than JS-driven: the resting state is the default and the
 * hidden state is only applied once JS is running. Combined with the fallback
 * timer below, content cannot be left invisible if scripting,
 * IntersectionObserver or compositing is unavailable — the animation is a pure
 * enhancement over already-readable markup.
 *
 * No React state is involved, so this cannot trigger extra renders.
 */
const Reveal = ({ children, className = '', delay = 0, as: Tag = 'div' }) => {
  const ref = useRef(null);

  // Layout effect so the hidden state is set before the browser paints,
  // avoiding a flash of the resting state on above-the-fold content.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return; // leave it visible, unanimated
    }

    const show = (animated) => {
      el.style.transitionDelay = animated && delay ? `${delay}s` : '';
      el.dataset.reveal = 'shown';
    };

    el.dataset.reveal = 'hidden';

    let reported = false;
    const observer = new IntersectionObserver(
      ([entry], instance) => {
        reported = true;
        if (!entry.isIntersecting) return;
        show(true);
        instance.disconnect();
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    );

    observer.observe(el);

    const fallback = window.setTimeout(() => {
      if (!reported) show(false);
    }, OBSERVER_FALLBACK_MS);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [delay]);

  return (
    <Tag ref={ref} className={cx('reveal', className)}>
      {children}
    </Tag>
  );
};

export default Reveal;
