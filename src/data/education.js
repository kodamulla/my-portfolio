/**
 * Education entries shown beside the About copy.
 *
 * `logo` points at public/education/. Until those files exist the card falls
 * back to a monogram tile, so nothing renders broken — see InstitutionLogo in
 * components/About.jsx.
 *
 * @typedef  {Object}        Institution
 * @property {string}        id
 * @property {string}        institution
 * @property {string}        qualification
 * @property {string | null} period       Study period, or null when not stated.
 * @property {string | null} detail       Supporting line, or null.
 * @property {string}        logo         Public path to the official logo.
 * @property {string}        monogram     Fallback shown while the logo is absent.
 */

/** @type {Institution[]} */
export const education = [
  {
    id: 'nsbm',
    institution: 'NSBM Green University',
    qualification: 'Undergraduate Studies',
    period: null,
    detail: 'Focused on software development architectures and specialised AI modules.',
    logo: '/education/nsbmlogo.png',
    monogram: 'NSBM',
  },
  {
    id: 'plymouth',
    institution: 'University of Plymouth',
    qualification: 'BSc (Hons) Software Engineering',
    period: '2023 – Present',
    detail: null,
    logo: '/education/plymouthlogo.png',
    monogram: 'UoP',
  },
];

/** Presented as a plain labelled fact, not a badge or award. */
export const academicPerformance = {
  label: 'Academic Performance',
  value: 'Second Upper Division',
};

export default education;
