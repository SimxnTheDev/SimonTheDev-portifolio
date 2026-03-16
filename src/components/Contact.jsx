import React from 'react';
import { Element } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
  return (
    <Element name='contact'>
    <div id="contact" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 font-body'>

        <Fade triggerOnce={true} direction='left'>
        <h1 className='text-5xl font-semibold '>
            Contact
        </h1>
        </Fade>

        
        <form action="https://getform.io/f/957086e1-1426-4ccf-bd21-37a84a0f4117" method='POST' encType='multipart/form-data' autoComplete='on'>
        <Fade cascade damping={0.2} triggerOnce={true}>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label htmlFor="" className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-md p-3 border-gray-400' type="text" name='name' autoComplete='on' required/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-md p-3 border-gray-400' type="text" name='phone'/>
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label htmlFor="" className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-md p-3 border-gray-400' type="text" name='email' required/>
            </div>
            <div className='flex flex-col py-2'>
                <label htmlFor="" className='uppercase text-sm py-2'>Subject</label>
                <input type="text" name='subject' className='border-2 rounded-md p-3 border-gray-400'/>
            </div>
            <div className='flex flex-col py-2'>
                <label htmlFor="" className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-md p-3 border-gray-400' name='message' rows="10" required></textarea>
            </div>
            <input type="hidden" name="_gotcha" className='hidden'></input>

            <button className='uppercase px-10 hover:px-12 hover:py-3 ease-in-out duration-300 py-2 bg-blue-600 shadow-md shadow-gray-500 text-white text-lg rounded-md'>
                Submit
            </button>
        </Fade>
        </form>
        
    </div>
    </Element>
  )
}

export default Contact