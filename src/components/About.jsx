import React from 'react';
import { motion } from 'framer-motion';
import AboutImg from '../assets/hero.png'; 

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-slate-50 text-slate-800 py-20 flex items-center'>
      <div className='max-w-[1100px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
        
        <div className='pb-12 w-full text-center sm:text-left'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-500 text-slate-800'>
            About Me
          </p>
        </div>
        
        <div className='flex flex-col md:flex-row items-center justify-between w-full gap-12'>
          
          {/* 👇 අලුත් Image Section එක (Blob Shape) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className='w-full md:w-2/5 flex justify-center relative'
          >
            {/* Background decorative blob */}
            <div className='absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob'></div>
            <div className='absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000'></div>
            
            {/* Image with custom shape (Blob) */}
            <div 
              className='relative w-64 h-64 md:w-80 md:h-80 overflow-hidden shadow-2xl border-4 border-white z-10'
              style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} // Blob Shape Effect
            >
              <img src={AboutImg} alt="Hansi Kodamulla" className='w-full h-full object-cover hover:scale-110 transition-transform duration-500' />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='w-full md:w-3/5 text-slate-600 text-lg leading-relaxed'
          >
            <p className='mb-6'>
              Hi, I’m <span className="text-blue-600 font-bold">Hansi</span>, a Full-Stack Developer with a passion for crafting
              seamless digital solutions that blend functionality with aesthetic
              appeal.
            </p>
            <p className='mb-8'>
              With hands-on experience across both front-end and back-end
              development, I’m dedicated to turning complex ideas into simple,
              impactful digital experiences.
            </p>

            {/* Modern Badges/Cards */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
               <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 flex-1 flex flex-col justify-center items-center transform hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-blue-600 font-bold text-xl">Full-Stack</h3>
                  <p className="text-sm text-slate-500 font-medium mt-1">Developer</p>
               </div>
               <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 flex-1 flex flex-col justify-center items-center transform hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-blue-600 font-bold text-xl">MERN Stack</h3>
                  <p className="text-sm text-slate-500 font-medium mt-1">Specialized</p>
               </div>
               <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 flex-1 flex flex-col justify-center items-center transform hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-blue-600 font-bold text-xl">UI / UX</h3>
                  <p className="text-sm text-slate-500 font-medium mt-1">Enthusiast</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;