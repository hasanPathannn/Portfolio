import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiMongodb, SiFirebase, SiExpress, SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white py-16 px-6 md:px-20"
    >
      <div className="max-w-5xl w-full text-center md:motion-preset-seesaw">
        <h2 className="text-4xl font-bold mb-10 text-green-400">My Skills</h2>

        <div className="grid md:grid-cols-3 gap-12 text-left ">
          {/* Frontend Skills */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-[0px_0px_20px_10px_rgba(255,165,0,0.8)] md:-motion-translate-y-loop-25 motion-duration-[2s] motion-ease-spring-smooth">
            <h3 className="text-3xl font-semibold text-orange-500 flex items-center gap-2">
              Frontend
            </h3>
            <ul className="text-lg text-gray-300 mt-4 space-y-3">
              <li className="flex items-center gap-2"><FaHtml5 className="text-orange-500 w-6 h-6" /> HTML</li>
              <li className="flex items-center gap-2"><FaCss3Alt className="text-blue-500 w-6 h-6" /> CSS</li>
              <li className="flex items-center gap-2"><FaJs className="text-yellow-400 w-6 h-6" /> JavaScript</li>
              <li className="flex items-center gap-2"><FaReact className="text-blue-300 w-6 h-6 animate-spin" /> React.js</li>
              <li className="flex items-center gap-2"><SiRedux className="text-purple-400 w-6 h-6" /> Redux</li>
              <li className="flex items-center gap-2"><SiTailwindcss className="text-cyan-400 w-6 h-6" /> Tailwind CSS</li>
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-[0px_0px_20px_10px_rgba(255,255,0,0.8)] motion-preset-seesaw">
            <h3 className="text-3xl font-semibold text-yellow-400 flex items-center gap-2">
               Backend
            </h3>
            <ul className="text-lg text-gray-300 mt-4 space-y-3">
              <li className="flex items-center gap-2"><FaNodeJs className="text-green-500 w-6 h-6" /> Node.js</li>
              <li className="flex items-center gap-2"><SiExpress className="text-gray-400 w-6 h-6" /> Express.js</li>
              <li className="flex items-center gap-2"><SiMongodb className="text-green-500 w-6 h-6" /> MongoDB</li>
              <li className="flex items-center gap-2"><SiFirebase className="text-yellow-400 w-6 h-6" /> Firebase</li>
              <li className="flex items-center gap-2"><SiPostman className="text-orange-500 w-6 h-6" /> Postman</li>
            </ul>
          </div>

          {/* Core Skills */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-[0px_0px_20px_10px_rgba(255,100,100,0.8)] md:-motion-translate-y-loop-25 motion-duration-[2s] motion-ease-spring-smooth">
            <h3 className="text-3xl font-semibold text-red-400 flex items-center gap-2">
              Core Skills
            </h3>
            <ul className="text-lg text-gray-300 mt-4 space-y-3">
              <li className="flex items-center gap-2"><FaGitAlt className="text-orange-500 w-6 h-6" /> Git & GitHub</li>
              <li className="flex items-center gap-2">⚡ Data Structures & Algorithms</li>
              <li className="flex items-center gap-2">🛠 Object-Oriented Programming</li>
              <li className="flex items-center gap-2">🛠 C++</li>
              <li className="flex items-center gap-2">🖥️ Operating Systems</li>
              <li className="flex items-center gap-2">🛠 DBMS</li>
              <li className="flex items-center gap-2">🖥️ Networking</li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
