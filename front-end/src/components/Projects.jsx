import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Project_medbooker from "../assets/Project_medbooker.jpeg";
import Project_pathanestate from "../assets/Project_pathanestate.jpeg";
import Project_foodie from "../assets/Project_foodie.jpeg";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "-100px" } // Detect earlier to prevent navbar issue
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className={`min-h-screen w-screen py-16 px-6 mb-5 md:px-20 bg-gray-950 text-white scroll-mt-20 transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-green-400">My Projects</h2>

        {/* Flexbox Layout */}
        <div className="flex flex-wrap justify-center pt-2 gap-14">
          {/* Project Cards */}
          {[
            {
              img: Project_medbooker,
              title: "MedBooker",
              github: "https://github.com/hasanPathannn/MedBooker-FrontEnd",
              live: "https://medbooker-10x3.onrender.com/",
            },
            {
              img: Project_pathanestate,
              title: "PathanEstate",
              github: "https://github.com/hasanPathannn/PathanEstate",
              live: "https://pathanestate.onrender.com/#/",
            },
            {
              img: Project_foodie,
              title: "Foodie",
              github: "https://github.com/hasanPathannn/Foodie-FrontEnd",
              live: "https://foodie-frontend-u1r2.onrender.com/",
            },
          ].map((project, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-6 rounded-lg transition-all duration-700 ease-in-out ${
                isVisible
                  ? `opacity-100 scale-100 delay-${index * 200}`
                  : "opacity-0 scale-90"
              } shadow-[0px_0px_20px_10px_rgba(255,255,255,0.5)] w-full sm:w-[48%] lg:w-[30%]`}
            >
                <a href={project.live}>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-500 hover:scale-120"
              />
              </a>
              <h3 className="text-2xl font-semibold text-gray-300">
                {project.title}
              </h3>

              <div className="mt-4 flex justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-110"
                >
                  <FaGithub className="w-5 h-5" /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-110"
                >
                  <FaExternalLinkAlt className="w-5 h-5" /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
