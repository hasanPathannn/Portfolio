import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa"; // Import menu icons

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full flex flex-row bg-gray-950 justify-between md:justify-around items-center py-4 px-10 border-b-2 border-gray-400 z-50">
      {/* Logo */}
      <div className="items-start justify-center">
        <a href="#">
          <img className="w-28 md:w-33 motion-scale-in-[0.5] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-delay-[0.38s]/scale motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier" src={logo} alt="Logo" />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row justify-evenly gap-10 text-2xl text-white">
        <a href="#about" className="hover:text-green-400 hover:scale-110">About</a>
        <a href="#projects" className="hover:text-green-400 hover:scale-110">Projects</a>
        <a href="#skills" className="hover:text-green-400 hover:scale-110">Skills</a>
        <a href="#contact" className="hover:text-green-400 hover:scale-110">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex">
        <button onClick={() => setMenu(!menu)} className="text-white text-3xl">
          {menu ? <FaTimes /> : <FaBars />} {/* Toggle Menu Icons */}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-16 right-0 w-3/4 h-screen bg-gray-900 text-white flex flex-col gap-6 text-xl items-center justify-center transition-transform duration-300 ${
          menu ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <a href="#about" className="hover:text-green-400" onClick={() => setMenu(false)}>About</a>
        <a href="#projects" className="hover:text-green-400" onClick={() => setMenu(false)}>Projects</a>
        <a href="#skills" className="hover:text-green-400" onClick={() => setMenu(false)}>Skills</a>
        <a href="#contact" className="hover:text-green-400" onClick={() => setMenu(false)}>Contact</a>
      </div>
    </div>
  );
};

export default Header;
