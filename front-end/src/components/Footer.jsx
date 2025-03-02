import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import logo from '../assets/logo.jpg'

const Footer = () => {
  return (
    <footer className=" text-white py-6 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section - Name & Rights */}
        <div className="text-center md:text-left mb-4 md:mb-0">
            <a href="#">
          <img src={logo} className="w-22 md:w-35 pb-2"/>
          </a>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Center Section - Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/hasanPathannn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hasan-khan-b38aa1265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
         
          <a
            href="mailto:pathannnhasan@gmail.com"
            className="text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right Section - Quick Links */}
        <div className="text-center md:text-right mt-4 md:mt-0">
          <a href="#projects" className="text-gray-400 hover:text-green-400 transition duration-300">Projects</a> |
          <a href="#about" className="text-gray-400 hover:text-green-400 transition duration-300 px-2">About</a> |
          <a href="#contact" className="text-gray-400 hover:text-green-400 transition duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
