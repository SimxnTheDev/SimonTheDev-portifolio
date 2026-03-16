import React from 'react';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiCplusplus } from "react-icons/si";
import SkillsItem from './SkillsItem';
import { Element } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';

const Skills = () => {
  return (
    <Element name='skills'>
    <div className='w-full bg-slate-300 font-body' id='skills'>

        <div className='max-w-[1040px] m-auto  md:pl-20 p-4 pt-16'>
            <Fade direction='left' triggerOnce={true}>
            <h1 className='font-semibold text-5xl text-black '>
                Skills
            </h1>
            </Fade>
        </div>

        <section className='w-full  flex justify-center items-start py-10 '>
            
            <div className='sm:w-4/5 w-11/12   grid place-items-center md:grid-cols-3 grid-cols-2  gap-y-16'>
            <Fade cascade damping={0.2} triggerOnce={true}>
                <SkillsItem icon={<FaPython size={100} fill='#ffde57'/>} title='PYTHON'/>
                <SkillsItem icon={<FaReact size={100} fill='#38BDF8'/>} title='REACT NATIVE'/>
                <SkillsItem icon={<FaReact size={100} fill='#38BDF8'/>} title='REACT JS'/>
                <SkillsItem icon={<SiPostgresql size={100} fill='#336791'/>} title='POSTGRESQL'/>
                <SkillsItem icon={<SiMysql size={100} />} title='MYSQL'/>
                <SkillsItem icon={<SiCplusplus size={100} fill='#00599C'/>} title='C++'/>
            </Fade>
            </div>
            
        </section>

    </div>
    </Element>
  )
}

export default Skills