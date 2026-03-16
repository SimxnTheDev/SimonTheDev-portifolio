import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 flex justify-center font-body'>
      <div className='text-center'>
        <h1>Designed by <strong>SimonTheDev (Simon Munyala)</strong></h1>
        <h2>Inspired by the work of <strong>Samuel Nduw</strong></h2>
        <h3 className='text-sm text-gray-500 mt-1'>All rights reserved. &copy; {new Date().getFullYear()}</h3>
      </div>
    </div>
  )
}

export default Footer