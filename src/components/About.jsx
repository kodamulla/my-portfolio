import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full px-4">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-8"
        >
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-400">
              ABOUT
            </p>
          </div>
          <div></div>
        </motion.div>

        {/* Content Section */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="sm:text-right text-4xl font-bold"
          >
            <p>Hi, I'm <span className="text-cyan-400">Hansi</span>. I build digital experiences that live on the intersection of design and logic.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#112240] p-8 rounded-xl shadow-2xl border border-gray-700 hover:border-cyan-400/50 duration-500 group"
          >
            <p className="text-lg leading-relaxed mb-4">
              I’m a <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> & Software Engineering student at NSBM Green University. My passion lies in crafting seamless user interfaces and robust backends, ranging from interactive <span className="text-white">3D web experiences</span> to scalable full-stack applications.
            </p>
            
            <p className="text-lg leading-relaxed">
              Whether it's architecting secure authentication systems or experimenting with <span className="text-cyan-400">Three.js</span>, I thrive on turning complex ideas into functional code. I am constantly refining my stack, currently focusing on the <span className="text-white">MERN stack</span> while exploring the future of the web.
            </p>

            {/* Quick Skills Tags (Optional but looks cool) */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['React', 'Node.js', 'MongoDB', 'Three.js', 'Tailwind'].map((skill) => (
                <span key={skill} className="text-xs font-mono px-2 py-1 bg-[#0a192f] text-cyan-400 rounded border border-cyan-400/30">
                  #{skill}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;