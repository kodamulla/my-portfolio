import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaPython, FaGithub, FaDatabase, FaGitAlt, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiNodedotjs, SiExpress } from 'react-icons/si';

const Skills = () => {
  const row1Techs = [
    { id: 1, src: <FaHtml5 className="text-orange-500" />, title: 'HTML' },
    { id: 2, src: <FaCss3Alt className="text-blue-500" />, title: 'CSS' },
    { id: 3, src: <FaJsSquare className="text-yellow-500" />, title: 'JavaScript' },
    { id: 4, src: <FaReact className="text-blue-400" />, title: 'React' },
    { id: 5, src: <SiTailwindcss className="text-sky-400" />, title: 'Tailwind' },
    { id: 6, src: <FaPython className="text-blue-500" />, title: 'Python' },
    { id: 7, src: <FaJava className="text-red-500" />, title: 'Java' },
  ];

  const row2Techs = [
    { id: 8, src: <SiNodedotjs className="text-green-500" />, title: 'Node JS' },
    { id: 9, src: <SiExpress className="text-gray-500" />, title: 'Express' },
    { id: 10, src: <SiMongodb className="text-green-600" />, title: 'MongoDB' },
    { id: 11, src: <FaDatabase className="text-slate-500" />, title: 'SQL' },
    { id: 12, src: <FaCode className="text-purple-600" />, title: 'C#' },
    { id: 13, src: <FaGitAlt className="text-orange-600" />, title: 'Git' },
    { id: 14, src: <FaGithub className="text-slate-800" />, title: 'GitHub' },
  ];

  return (
    <div name="skills" className="bg-slate-50 w-full min-h-screen py-20 overflow-hidden flex items-center">
      {/* දෙපැත්තෙන් ඉඩ වැඩි කළා md:px-28 */}
      <div className="w-full px-8 md:px-28 mx-auto flex flex-col justify-center h-full text-slate-800">
        <div className="mb-10 text-center sm:text-left">
          <p className="text-4xl font-bold border-b-4 border-blue-500 p-2 inline text-slate-800">SKILLS</p>
          <p className="py-6 text-slate-500 tracking-[0.2em] font-mono text-sm uppercase">
            // My Technical Stack
          </p>
        </div>

        <div className="flex flex-col gap-10 w-full mt-4 overflow-hidden">
          <div className="relative flex w-full overflow-hidden">
            <motion.div 
              className="flex gap-12 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              style={{ width: "max-content" }}
            >
              {[...row1Techs, ...row1Techs].map((tech, index) => (
                // අයිකන් සහ කොටුව පොඩි කළා w-24 h-24
                <div key={index} className="w-24 h-24 flex flex-col justify-center items-center hover:scale-110 duration-300 transition-transform cursor-pointer">
                  <div className="text-6xl mb-3 drop-shadow-md">{tech.src}</div>
                  <p className="font-bold text-slate-600 uppercase tracking-wider text-xs">{tech.title}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative flex w-full overflow-hidden">
            <motion.div 
              className="flex gap-12 whitespace-nowrap"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              style={{ width: "max-content" }}
            >
              {[...row2Techs, ...row2Techs].map((tech, index) => (
                <div key={index} className="w-24 h-24 flex flex-col justify-center items-center hover:scale-110 duration-300 transition-transform cursor-pointer">
                  <div className="text-6xl mb-3 drop-shadow-md">{tech.src}</div>
                  <p className="font-bold text-slate-600 uppercase tracking-wider text-xs">{tech.title}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;