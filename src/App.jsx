import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Element name='projects'>
        <div className='w-full bg-[#e4e4e4] font-body flex flex-col items-center justify-center py-32'>
          <h1 className='text-5xl font-semibold text-gray-700'>Projects</h1>
          <p className='text-gray-500 mt-4 text-lg'>Coming soon — currently in the works. 🚧</p>
        </div>
      </Element>
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App