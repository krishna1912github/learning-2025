import React from 'react'
import me from './../asserts/image.png'
import Image from 'next/image'
import { CiShare1 } from "react-icons/ci";
export const Projects = () => {
  return (
    <div>
      <div className='bg-black flex flex-col gap-10 lg:gap-24 justify-evenly p-8 lg:p-17 mt-10'>
        <div className='text-3xl lg:text-5xl  '>
          <div>
            <p className='text-center text-white py-8'> My <span className='font-extrabold ' >Projects </span></p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row w-full justify-evenly items-center lg:px-10 '>

          <div className='lg:w-1/2'>
            <Image
              src={me}
              alt="me"
              className="w-full max-w-[530px] lg:h-[397px]"
            />
          </div>
          <div className=' flex flex-col lg:w-1/2 gap-3 lg:py-10 lg:gap-3 text-justify mt-5 text-base lg:text-lg max-w-[530px] lg:h-[397px]'>
            <div className='text-white text-lg font-extrabold '>
           01
            </div>

            <div className='text-white text-lg font-extrabold'>
              I'm a passionate, self-proclaime.
            </div>
            <div className='text-zinc-500 font-bold'>
              I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).
              I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience,
              pixel perfect design, and writing clear, readable, highly performant code matters to me.
            </div>
            <div className='text-zinc-500'>
              <CiShare1 size={30} className='text-white' />
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row-reverse w-full justify-evenly items-center lg:px-10 '>
          <div className='lg:w-1/2 flex justify-end'>
            <Image
              src={me}
              alt="me"
              className="w-full max-w-[530px] lg:h-[397px] "
            />
          </div>

          <div className=' flex flex-col lg:w-1/2 gap-3 lg:py-10 lg:gap-3 text-justify mt-5 text-base lg:text-lg max-w-[530px] lg:h-[397px]'>
            <div className='text-white text-lg font-extrabold'>
              02
            </div>

            <div className='text-white text-lg font-extrabold'>
              I'm a passionate, self-proclaime.
            </div>
            <div className='text-zinc-500 font-bold'>
              I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).
              I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience,
              pixel perfect design, and writing clear, readable, highly performant code matters to me.
            </div>
            <div className='text-zinc-500'>
              <CiShare1 size={30} className='text-white' />
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row w-full justify-evenly items-center lg:px-10 '>
          <div className='lg:w-1/2'>
            <Image
              src={me}
              alt="me"
              className="w-full max-w-[530px] lg:h-[397px]"
            />
          </div>

          <div className=' flex flex-col lg:w-1/2 gap-3 lg:py-10 lg:gap-3 text-justify mt-5 text-base lg:text-lg max-w-[530px] lg:h-[397px]'>
            <div className='text-white text-lg font-extrabold'>
              03
            </div>

            <div className='text-white text-lg font-extrabold'>
              I'm a passionate, self-proclaime.
            </div>
            <div className='text-zinc-500 font-bold'>
              I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).
              I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience,
              pixel perfect design, and writing clear, readable, highly performant code matters to me.
            </div>
            <div className='text-zinc-500'>
              <CiShare1 size={30} className='text-white' />
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
