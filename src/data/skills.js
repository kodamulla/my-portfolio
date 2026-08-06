import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaJava,
  FaPython,
  FaGithub,
  FaDatabase,
  FaGitAlt,
  FaCode,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiNodedotjs, SiExpress } from 'react-icons/si';

/**
 * The fourteen technologies, in a single marquee row.
 *
 * `color` is the brand tint applied to the icon only, picked to stay legible on
 * the dark surface.
 */
export const skills = [
  { title: 'HTML', Icon: FaHtml5, color: 'text-orange-500' },
  { title: 'CSS', Icon: FaCss3Alt, color: 'text-blue-400' },
  { title: 'JavaScript', Icon: FaJsSquare, color: 'text-yellow-400' },
  { title: 'React', Icon: FaReact, color: 'text-sky-400' },
  { title: 'Tailwind', Icon: SiTailwindcss, color: 'text-teal-400' },
  { title: 'Python', Icon: FaPython, color: 'text-blue-400' },
  { title: 'Java', Icon: FaJava, color: 'text-red-400' },
  { title: 'Node JS', Icon: SiNodedotjs, color: 'text-green-500' },
  { title: 'Express', Icon: SiExpress, color: 'text-fg-muted' },
  { title: 'MongoDB', Icon: SiMongodb, color: 'text-green-500' },
  { title: 'SQL', Icon: FaDatabase, color: 'text-slate-400' },
  { title: 'C#', Icon: FaCode, color: 'text-purple-400' },
  { title: 'Git', Icon: FaGitAlt, color: 'text-orange-500' },
  { title: 'GitHub', Icon: FaGithub, color: 'text-fg' },
];

export default skills;
