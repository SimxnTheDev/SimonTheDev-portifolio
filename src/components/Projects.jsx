import React from 'react';
import ChurchSite from '../assets/churchSite-min.png'
import GamingSite from '../assets/gamingSite.jpg';
import SafariSite from '../assets/safariSite.jpg';
import SchoolSite from '../assets/schoolSite.jpg';
import AirlineRes from '../assets/airlineRes.jpg';
import BloggingAI from '../assets/Blogging2.png';
import HockeyApp from '../assets/HockeyAppProjectThumbnail-min.png'
import HospitalSite from '../assets/hospitalwebsite.png'
import { FaReact, FaCss3Alt, FaHtml5, FaJava, FaJs} from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiPython, SiFirebase, SiFlutter, SiSqlite } from "react-icons/si";
import { Element } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';

import ProjectItem from './ProjectItem';


const Projects = () => {


  return (
    <Element name='projects'>
    <div className='w-full  bg-[#e4e4e4] font-body' id='projects'>
        
        <div>
            <Fade triggerOnce={true}>
            <div className='max-w-[1040px] m-auto md:pl-20 p-4 pt-16 md:pb-16 pb-2'>
                <h1 className='font-semibold text-5xl'>
                    Projects
                </h1>
            </div>
            </Fade>
            
            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-items-center pb-16'>
                {/* first card */}
                <ProjectItem img={BloggingAI} title="Blogging AI" codeURL="https://github.com/SamuelNduw/Blogging" postLink="https://www.linkedin.com/posts/samuel-nduw-53153126a_during-the-past-two-weeks-i-tasked-myself-activity-7356402971745648640-w5ZM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHuGLUBAjPdFfRcNXWdJ2wYAVh7TTmYi3k">
                    <FaReact size={30} fill='#38BDF8' className='shadow-gray-800'/>
                    <SiTailwindcss size={30} fill='#38BDF8' />
                    <SiPython size={30} fill='#FFD43B'/>
                    <SiFirebase size={30} fill='#F6820D'/>
                    <SiSqlite size={30} fill='#FFFFFF'/>
                </ProjectItem>
                {/* second card */}
                <ProjectItem img={HockeyApp} title="Hockey App" codeURL="https://github.com/SamuelNduw/MAP-Project" postLink="https://www.linkedin.com/posts/samuel-nduw-53153126a_mobile-app-development-does-seem-interesting-activity-7359536881400713216-s4Vw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHuGLUBAjPdFfRcNXWdJ2wYAVh7TTmYi3k">
                    <SiFlutter size={30} fill='#027DFD' className='shadow-gray-800'/>
                    <SiPython size={30} fill='#FFD43B'/>
                    <SiMysql size={30} fill='#FFFFFF'/>
                </ProjectItem>
                {/* third card */}
                <ProjectItem img={ChurchSite} title="CLMI Sauyemwa" codeURL="" pageLink="https://christsloveministriessauyemwa.com/">
                    <FaReact size={30} fill='#38BDF8' className='shadow-gray-800'/>
                    <SiTailwindcss size={30} fill='#38BDF8' />
                </ProjectItem>
                {/* fourth card */}
                <ProjectItem img={SchoolSite} title="Friendly Private School" pageLink="https://friendlyprivateschool.org/">
                    <FaReact size={30} fill='#38BDF8' className='shadow-gray-800'/>
                    <SiTailwindcss size={30} fill='#38BDF8' />
                    <SiFirebase size={30} fill='#F6820D'/>
                </ProjectItem>
                {/* fifth card */}
                <ProjectItem img={AirlineRes} title="Airline Seat Reservation" codeURL="https://github.com/SamuelNduw/AirlineSeatReservationSystem" pageLink="https://youtu.be/yVX4BLEmU24">
                    <FaJava size={30} fill='red' className='shadow-gray-800'/>
                    <SiMysql size={30} fill='white' className='shadow-gray-800'/>
                </ProjectItem>
                {/* sixth card */}
                <ProjectItem  img={HospitalSite} title="Hospital Management" codeURL="https://github.com/SamuelNduw/WAD-Project/" pageLink="https://www.youtube.com/shorts/C_jWPDN-NwE">
                    <FaJs size={30} fill='#f0db4f' className='shadow-gray-800'/>
                    <FaCss3Alt size={30} fill='#264de4' />
                    <FaHtml5 size={30} fill='#f06529' />
                    <SiPython size={30} fill='#FFD43B'/>
                </ProjectItem>
                {/* seventh card */}
                <ProjectItem  img={GamingSite} title="Gaming Store" codeURL="https://github.com/SamuelNduw/my-first-project" pageLink="https://samuel-my-first-website.netlify.app">
                    <FaJs size={30} fill='#f0db4f' className='shadow-gray-800'/>
                    <FaCss3Alt size={30} fill='#264de4' />
                    <FaHtml5 size={30} fill='#f06529' />
                </ProjectItem>
                {/* eighth card */}
                <ProjectItem  img={SafariSite} title="Safari Agency" codeURL="https://github.com/SamuelNduw/Safari-Agency-1" pageLink="https://sammy-safari-agency.netlify.app/">
                    <FaJs size={30} fill='#f0db4f' className='shadow-gray-800'/>
                    <SiTailwindcss size={30} fill='#38BDF8' />
                    <FaHtml5 size={30} fill='#f06529' />                    
                </ProjectItem>

            </div>
            
        </div>
        
    </div>
    </Element>
    
  )
}

export default Projects