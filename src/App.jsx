import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function App() {
  return (
    <div className="bg-[#0a192f] min-h-screen text-gray-300 selection:bg-cyan-400 selection:text-[#0a192f] ">
      <Navbar />
      
      
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-40">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a 
              className="flex justify-between items-center w-full text-gray-300 px-4" 
              href="https://www.linkedin.com/in/hansi-kodamulla-b964202b9/" 
              target="_blank" rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a 
              className="flex justify-between items-center w-full text-gray-300 px-4" 
              href="https://github.com/kodamulla" 
              target="_blank" rel="noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a className="flex justify-between items-center w-full text-gray-300 px-4" href="mailto:hansi@email.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a className="flex justify-between items-center w-full text-gray-300 px-4" href="/">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

     
      <Hero />
      
      <About />
      <Skills />
      <Projects />
      <Contact />

      
    </div>
  );
}

export default App;