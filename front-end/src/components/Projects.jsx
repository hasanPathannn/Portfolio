import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Project_medbooker from '../assets/Project_medbooker.jpeg'
import Project_pathanestate from '../assets/Project_pathanestate.jpeg'
import Project_foodie from '../assets/Project_foodie.jpeg'




const Projects = () => {

    

  return (
    <section id="projects" className="min-h-screen w-screen py-16 px-6 mb-5 md:px-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-green-400">My Projects</h2>

        {/* Flexbox Layout */}
        <div className="flex flex-wrap justify-center pt-2 gap-14 md:motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">

          {/* Project 1 */}
          
          <div className="bg-gray-800 p-6 rounded-lg  transition-all duration-300 scale-105 shadow-[0px_0px_20px_10px_rgba(255,255,255,0.9)] w-full sm:w-[48%] lg:w-[30%]">
            <img
              src={Project_medbooker}
              alt="MedBooker"
              className="w-full h-48 object-cover rounded-lg mb-4 transition-all duration-500 hover:scale-120 "
            />
            <h3 className="text-2xl font-semibold text-gray-300">MedBooker</h3>
            
            <div className="mt-4 flex justify-center gap-4">
              <a
                href="https://github.com/hasanPathannn/MedBooker-FrontEnd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-110"
              >
                <FaGithub className="w-5 h-5" /> GitHub
              </a>
              <a
                href="https://medbooker-10x3.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-110"
              >
                <FaExternalLinkAlt className="w-5 h-5" /> Live Demo
              </a>
            </div>
          </div>
          

          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-lg  transition-all duration-300 scale-105 shadow-[0px_0px_20px_10px_rgba(255,255,255,0.9)] w-full sm:w-[48%] lg:w-[30%]">
            <img
              src={Project_pathanestate}
              alt="QuirkyRoomie"
              className="w-full h-48 object-cover rounded-lg mb-4 transition-all duration-500 hover:scale-120 "
            />
            <h3 className="text-2xl font-semibold text-gray-300">PathanEstate</h3>
            
            <div className="mt-4 flex justify-center gap-4">
              <a
                href="https://github.com/hasanPathannn/PathanEstate"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-110"
              >
                <FaGithub className="w-5 h-5" /> GitHub
              </a>
              <a
                href="https://pathanestate.onrender.com/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-110"
              >
                <FaExternalLinkAlt className="w-5 h-5" /> Live Demo
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 p-6 rounded-lg  transition-all duration-300 scale-105 shadow-[0px_0px_20px_10px_rgba(255,255,255,0.9)] w-full sm:w-[48%] lg:w-[30%]">
            <img
              src={Project_foodie}
              alt="QuirkyRoomie"
              className="w-full h-48 object-cover rounded-lg mb-4 transition-all duration-500 hover:scale-120 "
            />
            <h3 className="text-2xl font-semibold text-gray-300">Foodie</h3>
            
            <div className="mt-4 flex justify-center gap-4">
              <a
                href="https://github.com/hasanPathannn/Foodie-FrontEnd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-110"
              >
                <FaGithub className="w-5 h-5" /> GitHub
              </a>
              <a
                href="https://foodie-frontend-u1r2.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-110"
              >
                <FaExternalLinkAlt className="w-5 h-5" /> Live Demo
              </a>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Projects;
