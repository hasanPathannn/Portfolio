import React from 'react'
import myPhoto2 from '../assets/myPhoto2.jpeg'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className='w-screen h-screen mt-15 p-2 md:flex md:mt-0 flex-row text-white justify-center gap-4 items-center '>
        
        <div className='flex flex-row justify-center mb-2 '>
            <img src={myPhoto2} className='w-80 md:w-100 rounded-full border-2 border-slate-500 transition-all duration-500 hover:scale-105 motion-translate-y-in-100 motion-duration-[2s] motion-ease-spring-smooth'/>
        </div>

        <div className='flex flex-col  items-center justify-center gap-2 motion-translate-x-in-100 motion-duration-[2s] motion-ease-spring-smooth'>
            <div className='flex flex-col text-xl items-center justify-center gap-2 motion-translate-y-in-100 motion-duration-[2s] motion-ease-spring-smooth'>
            <p className='text-gray-300'>Welcome, I'm</p>
            <h1 className='text-4xl font-bold '>Mohd Hasan Khan</h1>
            <p className='text-green-300'>
            <Typewriter
                words={["Software Developer", "Full Stack Developer"]}
                loop={0} // Infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
                />
            </p>
            </div>
        

            <div className='flex flex-row gap-2  motion-translate-y-in-100 motion-rotate-in-45'>
                <a href="https://drive.google.com/file/d/1PHK6L5qdWl5MJQC8p092lRi05WbvtJ_w/view" className='py-4 border-s-black bg-gray-300 rounded-full m-2 px-6 text-gray-900 font-semibold cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-3 '>Download CV</a>
                <a href="#contact" className='py-4 border-s-black bg-slate-500 rounded-full m-2 px-6 text-gray-950 font-semibold cursor-pointer transition-transform duration-300 hover:scale-110 hover:-rotate-3'>Let's Connect</a>
            </div>

            <div className='flex flex-row  gap-3 '>
                <a href='https://github.com/hasanPathannn'><img src={github} className='w-13 p-1 bg-white rounded-full transition-all duration-300 hover:shadow-[0_0_20px_#3b82f6]'/></a>
                <a href='https://www.linkedin.com/in/hasan-khan-b38aa1265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src={linkedin} className='w-13 bg-white rounded-full p-1 transition-all duration-300 hover:shadow-[0_0_20px_#3b82f6]'/></a>
            </div>
        </div>
    
    </div>
  )
}

export default Hero