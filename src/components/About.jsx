import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[1000px] w-full grid grid-cols-2 gap-8"
        >
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-400">
              ABOUT
            </p>
          </div>
          <div></div>
        </motion.div>

        {/* Content Section */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          
           
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="sm:text-right text-4xl font-bold"
          >
            <p>Hi.I'm Hansi, nice to meet you. Please take a look around.</p>
          </motion.div>

          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#112240] p-6 rounded-lg shadow-xl border border-gray-700 hover:border-cyan-400 duration-500"
          >
            <p className="text-lg leading-relaxed">
              I am a passionate <span className="text-cyan-400 font-semibold">3rd-year Software Engineering student</span> at NSBM Green University who loves 
              solving complex problems through code. My journey in tech started 
              with curiosity about how things work on the web, and now I focus 
              on building responsive, user-friendly applications. 
            </p>
            <br />
            <p className="text-lg leading-relaxed">
              I specialize in Frontend technologies like <span className="text-cyan-400 font-semibold">React and Tailwind</span>, 
              but I also enjoy working on Backend logic with <span className="text-cyan-400 font-semibold">Java and Python</span>. 
              I am always eager to learn new technologies and collaborate on 
              innovative projects that make an impact.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;