import React from 'react'
import me from './../asserts/Group 1000015845.png'
import Image from 'next/image'
export const About = () => {
    return (
        <div>
        <div className='flex flex-col gap-10 justify-evenly'>
          <div className='text-3xl lg:text-5xl  '>
            <div>
              <p className='text-center py-8'> About <span className='font-extrabold ' >Me </span></p>
            </div>
          </div>
  
          <div className='flex flex-col w-full lg:flex-row  justify-evenly px-8  '>
  
            <div className='lg:w-1/2'>
              <Image
                src={me}
                alt="me"
                className="w-full max-w-[630px] lg:h-[450px]"
              />
            </div>
            <div className=' flex flex-col lg:w-1/2 gap-3 lg:gap-3 text-justify  text-base lg:text-lg max-w-[530px] '>
              <div className=' text-zinc-500 '>
              I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). 
              I am very enthusiastic about bringing the technical and visual aspects of digital products to life. 
              User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
              </div>
  
              <div className=' text-zinc-500 '>
              I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). 
              I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
              </div>
              <div className=' text-zinc-500 '>
                I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).
                I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).
              </div>

            </div>
          </div>
  
        
  
  
        </div>
      </div>
    )
}
