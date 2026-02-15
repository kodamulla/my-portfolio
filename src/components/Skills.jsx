import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaPython, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiNodedotjs, SiExpress } from 'react-icons/si';

const Skills = () => {
  const techs = [
    { id: 1, src: <FaHtml5 className="text-orange-500" />, title: 'HTML', style: 'border-orange-500/50' },
    { id: 2, src: <FaCss3Alt className="text-blue-500" />, title: 'CSS', style: 'border-blue-500/50' },
    { id: 3, src: <FaJsSquare className="text-yellow-500" />, title: 'JavaScript', style: 'border-yellow-500/50' },
    { id: 4, src: <FaReact className="text-blue-400" />, title: 'React', style: 'border-blue-400/50' },
    { id: 5, src: <SiTailwindcss className="text-sky-400" />, title: 'Tailwind', style: 'border-sky-400/50' },
    { id: 6, src: <SiNodedotjs className="text-green-500" />, title: 'Node JS', style: 'border-green-500/50' },
    { id: 7, src: <FaJava className="text-red-500" />, title: 'Java', style: 'border-red-500/50' },
    { id: 8, src: <FaGithub className="text-white" />, title: 'GitHub', style: 'border-gray-400/50' },
  ];

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div name="skills" className="bg-[#0a192f] w-full min-h-screen py-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-4xl font-bold border-b-4 border-cyan-400 p-2 inline">SKILLS</p>
          <p className="py-6 text-gray-400 tracking-wide font-mono">
            These are the technologies I've been working with
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} 
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(17, 34, 64, 0.6)",
                boxShadow: "0px 10px 30px -10px rgba(0,0,0,0.7)"
              }}
              className={`border-b-4 ${style} bg-[#112240] py-6 rounded-lg cursor-pointer duration-300 transition-all group`}
            >
              <div className="text-6xl flex justify-center group-hover:scale-110 duration-300">
                {src}
              </div>
              <p className="mt-4 font-bold text-gray-300 group-hover:text-white uppercase tracking-widest text-sm">
                {title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;