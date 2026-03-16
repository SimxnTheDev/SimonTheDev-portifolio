import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { Link, Element } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';


function Navbar() {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    console.log("You have clicked the button")
  }
  return (
    <div className='font-body'>
        <AiOutlineMenu onClick={handleNav} className="fixed top-4 right-4 z-[99] md:hidden" />
        {
          nav ? (
              <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                
                  <Link to='main' spy={true} smooth={true} offset={0} duration={500} className='flex justify-center items-center w-[45%] rounded-lg font-medium shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-150' onClick={handleNav}>
                    <AiOutlineHome size={20} />
                    <span className="pl-4">HOME</span>
                  </Link>
                
                
                  <Link to='about' spy={true} smooth={true} offset={-20} duration={500} className='flex justify-center items-center w-[45%] rounded-lg font-medium shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-150' onClick={handleNav}>
                    <BsPerson size={20} />
                    <span className="pl-4">ABOUT</span>
                  </Link>
                
                
                  <Link to='projects' spy={true} smooth={true} offset={-20} duration={500} className='flex justify-center items-center w-[45%] rounded-lg font-medium shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-150' onClick={handleNav}>
                    <GrProjects size={20} />
                    <span className="pl-4">PROJECTS</span>
                  </Link>
                
                
                  <Link to='skills' spy={true} smooth={true} offset={-20} duration={600} className='flex justify-center items-center w-[45%] rounded-lg font-medium shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-150' onClick={handleNav}>
                    <AiOutlineProject size={20} />
                    <span className="pl-4">SKILLS</span>
                  </Link>
                
                
                  <Link to='contact' spy={true} smooth={true} offset={-20} duration={700} className='flex justify-center items-center w-[45%] rounded-lg font-medium shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-150' onClick={handleNav}>
                    <AiOutlineMail size={20} />
                    <span className="pl-4">CONTACT</span>
                  </Link>
                
              </div>
          ) 
          : (
            ' '
          )
        }

        <div className='md:block hidden fixed top-[20%] z-10'> 
            <div className='flex flex-col ml-2 group'>
            <Fade cascade damping={0.2}>
              <Link to='main' spy={true} smooth={true} offset={0} duration={500} className='flex rounded-lg shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 opacity-50 hover:opacity-100'>
                <AiOutlineHome  size={20}/>
                <span className='hidden group-hover:block px-2 font-medium'>
                  HOME
                </span>
              </Link>
              <Link to='about' spy={true} smooth={true} offset={-20} duration={500} className='flex rounded-lg shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 opacity-50 hover:opacity-100'>
                <BsPerson  size={20}/>
                <span className='hidden group-hover:block px-2 font-medium'>
                  ABOUT
                </span>
              </Link>
              <Link to='projects' spy={true} smooth={true} offset={-20} duration={500} className='flex rounded-lg shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 opacity-50 hover:opacity-100'>
                <GrProjects  size={20}/>
                <span className='hidden group-hover:block px-2 font-medium'>
                    PROJECTS
                </span>
              </Link>
              <Link to='skills' spy={true} smooth={true} offset={-20} duration={600} className='flex rounded-lg shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 opacity-50 hover:opacity-100'>
                <AiOutlineProject  size={20}/>
                <span className='hidden group-hover:block px-2 font-medium'>
                  SKILLS
                </span>
              </Link>
              <Link to='contact' spy={true} smooth={true} offset={-20} duration={700} className='flex rounded-lg shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 opacity-50 hover:opacity-100'>
                <AiOutlineMail  size={20}/>
                <span className='hidden group-hover:block px-2 font-medium'>
                    CONTACT
                </span>
              </Link>
              </Fade>
            </div>
        </div>

    </div>
  )
}

export default Navbar