import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
 

  return (
    <>
  
    <div className='bg-gray-950'
    >
    <Header/>
    <Hero/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    
    </div>
    </>
  )
}

export default App
