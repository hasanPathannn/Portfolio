import React from 'react'
import logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-full  flex flex-row  justify-between items-start py-2 px-10 bg-gray-950 border-b-2 border-gray-400  z-100'>
        <div className='items-start justify-center motion-scale-in-[0.5] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-delay-[0.38s]/scale motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier'>
            <img className='w-22 md:w-33' src={logo}/>
        </div>

        <div className="hidden md:flex flex-row justify-evenly gap-4 text-2xl text-white">
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</div>

    </div>
  )
}

export default Header