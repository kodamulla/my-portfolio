/** Joins class names, dropping falsy values so conditionals stay inline. */
export const cx = (...classes) => classes.filter(Boolean).join(' ');

export default cx;
