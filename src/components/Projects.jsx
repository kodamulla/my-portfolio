import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes, FaCheckCircle } from 'react-icons/fa';

// 👇 ඔයාගේ assets ෆෝල්ඩරයේ තියෙන නම් වලට හරියටම ගැලපෙන්න Import කරලා තියෙන්නේ
import voting1 from '../assets/voting d-app 1.png';
import voting2 from '../assets/voting d-app 2.png';

import flavor1 from '../assets/flavor town 1.png';
import flavor2 from '../assets/flavor town 2.png';
import flavor3 from '../assets/flavor town3.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    const updateWidth = () => {
      if(carousel.current){
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    if (selectedProject) setCurrentImageIndex(0);
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: 'Online Voting D-App',
      // 👇 Voting app එකේ පින්තූර
      images: [voting1, voting2], 
      description: 'Decentralised online voting platform to hold secure elections.',
      techStack: ["Next.js", "Ethereum", "Solidity", "Hardhat"],
      keyFeatures: [
        "Voters are authenticated using their unique addresses and are given permission to vote.",
        "Fully responsive design that adapts to all screen sizes and devices.",
        "Sensitive data like images are stored using IPFS, ensuring no single point of failure."
      ],
      link: '#',
      repo: '#',
    },
    {
      id: 2,
      title: 'Flavor Town',
      // 👇 Flavor Town එකේ පින්තූර 3ම
      images: [flavor1, flavor2, flavor3], 
      description: 'A comprehensive full-stack application featuring a robust security architecture.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
      keyFeatures: [
        "Implemented a complete frontend and backend authentication and authorization system.",
        "Secure user sessions and role-based access control.",
        "Interactive and modern user interface design."
      ],
      link: '#',
      repo: '#',
    },
    {
      id: 3,
      title: 'i-Computers',
      // තාවකාලිකව දාලා තියෙන්නේ. පස්සේ අලුත් පින්තූර import කරලා මෙතනට දෙන්න
      images: [flavor1, voting1], 
      description: 'A fully functional E-commerce site for a computer hardware shop with hosting.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
      keyFeatures: [
        "Integrated secure payment gateways for safe transactions.",
        "User authentication and profile management.",
        "Dynamic shopping cart and product filtering."
      ],
      link: 'https://icomputers-link.com',
      repo: '#',
    },
    {
      id: 4,
      title: 'Car Service Management',
      images: [voting1, flavor2], // තාවකාලික පින්තූර
      description: 'A C# .NET solution to manage vehicle records, schedules, and service histories.',
      techStack: ['C#', '.NET Framework', 'SQL Server'],
      keyFeatures: [
        "Comprehensive inventory management and tracking.",
        "Automated service scheduling and reminders.",
        "Detailed reporting and history logs."
      ],
      link: '#',
      repo: '#',
    },
    {
      id: 5,
      title: 'Jewel-Aura',
      images: [flavor3, voting2], // තාවකාලික පින්තූර
      description: 'Web application for buying and selling gold jewelry.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      keyFeatures: [
        "Modern and elegant UI tailored for jewelry display.",
        "Interactive About Us and Terms & Conditions pages.",
        "Responsive design for mobile and desktop viewing."
      ],
      link: '#',
      repo: '#',
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <div name="projects" className="w-full md:min-h-screen text-slate-800 bg-white py-20 overflow-hidden relative">
      <div className="w-full px-8 md:px-24 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8 text-center sm:text-left">
          <p className="text-4xl font-bold inline border-b-4 text-slate-800 border-blue-500 uppercase">Projects</p>
          <p className="py-6 italic text-slate-500">Drag to explore and click anywhere on the card for details</p>
        </div>

        <motion.div ref={carousel} className="cursor-grab overflow-hidden w-full" whileTap={{ cursor: "grabbing" }}>
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            className="flex gap-6 py-4"
          >
            {projects.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => setSelectedProject(item)}
                className="min-w-[300px] md:min-w-[360px] rounded-xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-xl flex flex-col pointer-events-auto cursor-pointer transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden relative bg-gray-100">
                  <img 
                    src={item.images[0]} 
                    alt={item.title} 
                    className="w-full h-full object-cover pointer-events-none object-top"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-xl font-bold text-slate-800 tracking-wider mb-2">
                    {item.title}
                  </span>
                  <p className="text-sm text-slate-500 line-clamp-2">{item.description}</p>
                  <div className="mt-4 pt-3 border-t border-gray-100 text-blue-600 font-semibold text-sm">
                    View full details &rarr;
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex justify-center items-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white max-w-[750px] w-full rounded-2xl p-6 relative shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto"
          >
            <button 
              className="absolute top-4 right-4 text-slate-400 hover:text-red-500 text-xl z-10 transition-colors bg-white rounded-full p-2 shadow-sm"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>
            
            <div className="relative w-full h-56 sm:h-72 bg-gray-100 rounded-xl overflow-hidden mb-6 group border border-gray-200">
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt="Project Screenshot" 
                className="w-full h-full object-contain bg-white transition-all duration-500" 
              />
              
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <FaChevronRight />
              </button>
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mb-2">{selectedProject.title}</h2>
            <p className="text-slate-600 mb-4">{selectedProject.description}</p>
            
            <div className="mb-4">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Key Features</p>
              <ul className="space-y-2">
                {selectedProject.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-600">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, idx) => (
                  <span key={idx} className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
               <a href={selectedProject.link} target="_blank" rel="noreferrer" className="flex-1">
                 <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md">Live Demo</button>
               </a>
               <a href={selectedProject.repo} target="_blank" rel="noreferrer" className="flex-1">
                 <button className="w-full border-2 border-slate-200 text-slate-700 py-3 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-colors">Source Code</button>
               </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;