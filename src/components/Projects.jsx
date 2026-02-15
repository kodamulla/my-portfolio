import React from 'react';

import icomImg from '../assets/icom.jpg';
import carImg from '../assets/car.jpg';
import jewelImg from '../assets/jewel.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'i-Computers (MERN Stack)',
      
      src: icomImg, 
      description: 'A fully functional E-commerce site for a computer hardware shop with hosting.',
      tech: 'MongoDB, Express, React, Node.js',
      link: 'https://icomputers-link.com',
      repo: '#',
    },
    {
      id: 2,
      title: 'Car Service Management System',
      src: carImg, 
      description: 'A C# .NET solution to manage vehicle records, schedules, and service histories. Contributed to Inventory management.',
      tech: 'C#, .NET Framework, SQL Server',
      link: '#',
      repo: '#',
    },
    {
      id: 3,
      title: 'Jewel-Aura (Jewelry E-shop)',
      src: jewelImg, 
      description: 'Web application for buying and selling gold jewelry. Contributed to About Us and Terms & Conditions pages.',
      tech: 'HTML, CSS, JavaScript',
      link: '#',
      repo: '#',
    },
  ];

  return (
    <div name="projects" className="w-full md:min-h-screen text-gray-300 bg-[#0a192f] py-20">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center sm:text-left">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-400 uppercase">Projects</p>
          <p className="py-6 italic text-gray-400">Check out some of my recent work</p>
        </div>

        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {projects.map((item) => (
            <div
              key={item.id}
              className="group rounded-xl overflow-hidden bg-[#112240] border border-gray-800 hover:scale-105 duration-500 shadow-xl shadow-[#040c16] flex flex-col"
            >
              
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>

              
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xl font-bold text-cyan-400 tracking-wider">
                  {item.title}
                </span>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed flex-grow">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[10px] bg-[#233554] px-3 py-1 rounded-full text-cyan-300 font-mono border border-cyan-900/50 uppercase">
                    {item.tech}
                  </span>
                </div>
                <div className="mt-6 flex justify-between gap-4">
                  <a href={item.link} className="w-full" target="_blank" rel="noreferrer">
                    <button className="w-full text-center rounded-lg py-2 bg-white text-gray-900 font-bold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                      Live
                    </button>
                  </a>
                  <a href={item.repo} className="w-full" target="_blank" rel="noreferrer">
                    <button className="w-full text-center rounded-lg py-2 border border-white text-white font-bold hover:bg-white hover:text-gray-900 transition-all duration-300">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;