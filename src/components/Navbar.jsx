import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link } from 'react-scroll'; 
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'Home', to: 'home' },
    { id: 2, link: 'About', to: 'about' },
    { id: 3, link: 'Skills', to: 'skills' },
    { id: 4, link: 'Projects', to: 'projects' },
    { id: 5, link: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full h-20 bg-white/90 backdrop-blur-md text-slate-800 px-6 z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full mx-auto flex justify-between items-center h-full px-4 md:px-12">
        
        <div className="group cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            <h1 className="text-2xl font-bold uppercase tracking-widest text-blue-600">
              HANSI.K
            </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center">
          {links.map(({ id, link, to }) => (
            <li key={id} className="px-4 cursor-pointer font-bold text-slate-600 hover:text-blue-600 duration-300 group relative">
              <Link to={to} smooth={true} duration={500} offset={-80}>
                {link}
              </Link>
              <span className="absolute bottom-[-4px] left-4 w-0 h-[3px] rounded-full bg-blue-600 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></span>
            </li>
          ))}
          
          <div className="flex items-center ml-6 border-l-2 border-slate-200 pl-6 gap-4">
            <a href="https://github.com/kodamulla" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-blue-600 duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/oyage-linkedin-link-eka" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-blue-600 duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;