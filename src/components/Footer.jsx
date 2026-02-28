import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-slate-50 border-t border-gray-200 py-8 flex flex-col justify-center items-center text-slate-600">
      <div className="flex gap-6 mb-4">
        {/* 👇 මෙතන ඔයාගේ ලින්ක් දාන්න */}
        <a href="https://github.com/kodamulla" target="_blank" rel="noreferrer" className="hover:text-blue-600 hover:scale-110 duration-300">
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/hansi-kodamulla-b964202b9/"  target="_blank" rel="noreferrer" className="hover:text-blue-600 hover:scale-110 duration-300">
          <FaLinkedin size={28} />
        </a>
        <a href="mailto:hansikodamulla@gmail.com" className="hover:text-blue-600 hover:scale-110 duration-300">
          <FaEnvelope size={28} />
        </a>
      </div>
      <p className="text-sm font-semibold">© {new Date().getFullYear()} Hansi Kodamulla. All rights reserved.</p>
    </div>
  );
};

export default Footer;