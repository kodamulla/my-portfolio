import React from 'react';
import { HiArrowNarrowRight, HiDownload } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'; 
import HeroImage from '../assets/me.png';

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] flex items-center justify-center overflow-hidden">
     
      <div className="max-w-[1100px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between h-full gap-10 z-10">
        
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center flex-1 order-2 md:order-1"
        >
          <p className="text-cyan-400 font-mono tracking-widest mb-2">Greetings, I am</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] hover:text-cyan-400 duration-500 cursor-default">
            Hansi Kodamulla
          </h1>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#8892b0] mt-2 leading-tight">
            Software Engineering Undergraduate.
          </h2>
          
          <p className="text-[#8892b0] py-6 max-w-[700px] text-lg leading-relaxed">
            I am currently reading for my <span className="text-white font-semibold">BSc (Hons) in Software Engineering</span> at 
            <span className="text-cyan-400"> University of Plymouth, UK</span>. 
            I specialize in building exceptionally digital experiences and scalable full-stack applications.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              <button className="text-white group border-2 border-cyan-400 px-6 py-3 my-2 flex items-center bg-cyan-400/10 hover:bg-cyan-400 hover:text-[#0a192f] duration-300 rounded-sm font-semibold">
                View My Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
            
            <button className="text-[#ccd6f6] border-2 border-[#ccd6f6] px-6 py-3 my-2 flex items-center hover:bg-[#ccd6f6] hover:text-[#0a192f] duration-300 rounded-sm font-semibold">
              Get Resume <HiDownload className="ml-3" />
            </button>
          </div>
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center items-center mt-20 md:mt-0"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
            
           
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping opacity-20"></div>

           
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 animate-spin-slow p-[5px]">
              <div className="w-full h-full bg-[#0a192f] rounded-full"></div>
            </div>

           
            <div className="relative w-[90%] h-[90%] overflow-hidden rounded-full border-4 border-[#112240] shadow-2xl">
              <img 
                src={HeroImage} 
                alt="Hansi" 
                className="w-full h-full object-cover  duration-500 transition-all scale-105 hover:scale-110"
              />
            </div>

           
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="absolute -bottom-2 -right-2 bg-[#112240] px-4 py-2 border border-cyan-400/50 rounded-md shadow-2xl hidden sm:block"
            >
                <p className="text-cyan-400 font-bold text-xs uppercase tracking-tighter">Plymouth University</p>
                <p className="text-gray-400 text-[10px]">SE Undergraduate</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      
      <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-cyan-900/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[10%] left-[10%] w-64 h-64 bg-blue-900/10 blur-[120px] rounded-full"></div>
    </div>
  );
};

export default Hero;