import React from 'react';
import { HiArrowNarrowRight, HiDownload } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'; 
import HeroImage from '../assets/hero.png';
import ResumePDF from '../assets/Hansi_Resume.pdf';

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-white flex items-center justify-center overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between h-full gap-10 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center flex-1 order-2 md:order-1"
        >
          <p className="text-blue-600 font-mono tracking-widest mb-2 font-semibold">Greetings, I am</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 cursor-default">
            Hansi Kodamulla
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-500 mt-2 leading-tight">
            Software Engineering Undergraduate.
          </h2>
          <p className="text-slate-600 py-6 max-w-[700px] text-lg leading-relaxed">
            I am currently reading for my <span className="text-slate-800 font-bold">BSc (Hons) in Software Engineering</span> at 
            <span className="text-blue-600 font-semibold"> University of Plymouth, UK</span>. 
            I specialize in building exceptionally digital experiences and scalable full-stack applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              <button className="text-blue-600 group border-2 border-blue-600 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:text-white duration-300 rounded-md font-semibold shadow-sm">
                View My Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
            
            <a href={ResumePDF} download="Hansi_Kodamulla_Resume.pdf">
              <button className="text-slate-700 border-2 border-slate-700 px-6 py-3 my-2 flex items-center hover:bg-slate-700 hover:text-white duration-300 rounded-md font-semibold shadow-sm">
                Get Resume <HiDownload className="ml-3" />
              </button>
            </a>
          </div>
        </motion.div>

        {/* 👇 රවුම ඇතුළේ පින්තූරය තියෙන කොටස */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center items-center mt-20 md:mt-0 flex-1 w-full"
        >
          {/* overflow-hidden නිසා මේ රවුමෙන් එළියට යන යට කොටස කැපිලා යනවා */}
          <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl border-4 border-slate-50 bg-slate-50">
            <img 
              src={HeroImage} 
              alt="Hansi" 
              // object-top මගින් මුහුණ හරියටම මැදින් තියාගන්නවා
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
      
      {/* පිටුපස තියෙන Background blurs ටික */}
      <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-blue-100 blur-[100px] rounded-full z-0"></div>
      <div className="absolute bottom-[10%] left-[10%] w-64 h-64 bg-purple-100 blur-[100px] rounded-full z-0"></div>
    </div>
  );
};

export default Hero;