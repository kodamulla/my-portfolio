import { useEffect, useId, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import cx from '../../lib/cx';

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/**
 * Accessible dialog: labelled, focus-trapped, Escape- and backdrop-dismissable,
 * and it restores focus to whatever opened it. Background scrolling is locked
 * while open.
 */
const Modal = ({ open, onClose, title, children, maxWidth = 'max-w-2xl', className = '' }) => {
  const panelRef = useRef(null);
  const previouslyFocused = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Move focus into the dialog so the keyboard lands in the right place.
    const panel = panelRef.current;
    panel?.focus({ preventScroll: true });

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !panel) return;

      const items = [...panel.querySelectorAll(FOCUSABLE)].filter(
        (el) => el.offsetParent !== null || el === document.activeElement,
      );
      if (items.length === 0) {
        event.preventDefault();
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown, true);

    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus?.({ preventScroll: true });
    };
  }, [open, onClose]);

  if (!open) return null;

  // Transform only, never opacity: if the animation cannot run the panel is
  // still fully visible, just imperceptibly offset, rather than invisible.
  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { scale: 0.98, y: 8 },
        animate: { scale: 1, y: 0 },
        transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <div
      className="fixed inset-0 z-60 flex items-end justify-center bg-slate-950/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(event) => {
        // Only dismiss on a press that both starts and ends on the backdrop.
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onMouseDown={(event) => event.stopPropagation()}
        className={cx(
          // overflow-hidden, not auto: children own their scroll regions so a
          // two-column dialog can scroll one side without moving the other.
          'relative flex max-h-[92dvh] w-full flex-col overflow-hidden',
          maxWidth,
          'rounded-t-2xl border border-line bg-surface shadow-lift outline-none sm:rounded-2xl',
          className,
        )}
        {...motionProps}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/90 text-fg-muted backdrop-blur transition-colors duration-200 hover:bg-surface-hover hover:text-fg"
        >
          <FiX size={18} />
        </button>

        <h2 id={titleId} className="sr-only">
          {title}
        </h2>

        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
