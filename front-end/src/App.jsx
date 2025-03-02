import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import { motion } from "framer-motion";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <div className='bg-gray-950'>
    <Header/>
    <Hero/>
    <Hero/>
    <Hero/>
    </div>
    </>
  )
}

export default App
