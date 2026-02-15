import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link } from 'react-scroll'; 
import ResumePDF from '../assets/Hansi_Resume.pdf';

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
    <nav className="fixed w-full h-20 bg-[#0a192f]/90 backdrop-blur-md text-gray-300 px-6 z-50 border-b border-gray-800 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-full">
        
        <div className="group cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            <h1 className="text-2xl font-bold uppercase tracking-widest text-cyan-400">
              HANSI.K
            </h1>
          </Link>
        </div>

       
        <ul className="hidden md:flex items-center">
          {links.map(({ id, link, to }) => (
            <li key={id} className="px-4 cursor-pointer font-medium text-gray-400 hover:text-cyan-400 duration-300 group">
              <Link to={to} smooth={true} duration={500} offset={-80}>
                {link}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
          
<a href={ResumePDF} download="Hansi_Kodamulla_Resume.pdf">
  <button className="ml-8 px-5 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-[#0a192f] duration-300 font-semibold text-sm">
    Resume
  </button>
</a>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;