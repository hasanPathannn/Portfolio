import React from 'react';
import robot_coding from '../assets/robot_coding.jpg';
import myPhoto from '../assets/myPhoto.jpeg';

const About = () => {
  return (
    <section id="about" className="text-white w-screen min-h-screen py-16 px-6 md:px-20 bg-gray-950">
      <h2 className="text-4xl font-bold mb-10 text-center text-green-400">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* Image Section */}
        <div className="w-48 md:w-80">
          <img
            src={myPhoto}
            alt="Coding Robot"
            className="w-full rounded-full border-2 border-slate-500 shadow-lg transition-transform transform  duration-500 hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left">
        <p className="text-lg text-gray-300 leading-relaxed">
      Hi, I'm <span className="text-green-400 font-semibold">Mohd Hasan Khan</span>, a passionate{" "}
      <span className="text-green-400 font-semibold">Software Developer </span> 
      with a strong foundation in Computer Science and hands-on experience in <span className="text-green-400 font-semibold"> full-stack web development (MERN)</span>. 
      Passionate about <span className="text-green-400 font-semibold"> building scalable and efficient solutions</span>, with a <span className="text-green-400 font-semibold"> problem-solving mindset</span> and a keen interest in staying updated with the latest technologies.

      Beyond coding, I excel at<span className="text-green-400 font-semibold"> communication, leadership, and time management</span> , making me a great team player ready to take on new challenges. 
      Currently, I am <span className="text-green-400 font-semibold"> seeking a full-time opportunity to apply my skills </span>and contribute to innovative projects.
    </p>
    
          <div className="mt-6 flex flex-col items-center justify-center">
           
            <div>
            <h3 className="text-2xl font-extrabold text-white mb-3">Education</h3>
            </div>
            <div>
            <ul className="text-gray-300">
              <li>
                🎓 <span className="font-semibold">B.E. in Computer Science Engineering</span> <br />
                Chandigarh University, Punjab (2020 - 2024)
              </li>
              <li className="mt-3">
                🏫 <span className="font-semibold">Higher Secondary (PCM)</span> <br />
                Morning Star School, Ratlam (2019 - 2020)
              </li>
              <li className="mt-3">
                📚 <span className="font-semibold">Matriculation</span> <br />
                Nirmala Convent School, Ratlam (2017 - 2018)
              </li>
            </ul>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;
