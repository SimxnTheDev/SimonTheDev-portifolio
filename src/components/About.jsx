import React from 'react';
import { Element } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <Element name='about'>
      <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 font-body'>

        <Fade direction='left' triggerOnce={true}>
          <h1 className='text-5xl font-semibold'>About</h1>
        </Fade>

        <div className='w-4/5 py-12'>
          <Fade triggerOnce={true}>
            <p>
              Hi, I'm Simon — a software developer and aspiring mechatronics engineer
              passionate about building systems that bridge the gap between software
              and the physical world.
            </p>
            <br />
            <p>
              My work spans application development, automation tooling, robotics, and
              embedded systems. I enjoy projects that combine programming, electronics,
              and engineering concepts to create something tangible and useful.
            </p>
            <br />
            <p>
              My long-term goal is to work as an AI engineer and researcher, developing
              intelligent systems where software, hardware, and automation come together
              to solve real-world problems.
            </p>
          </Fade>
        </div>

      </div>
    </Element>
  );
};

export default About;