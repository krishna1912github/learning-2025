import React from 'react'
import me from './../asserts/image.png'
import Image from 'next/image'
import { CiShare1 } from "react-icons/ci";
export const Projects = () => {
  return (
    <div>
      <div className='bg-black flex flex-col gap-10  justify-evenly py-10   mt-10'>
        <div className='text-3xl lg:text-5xl '>
          <div>
            <p className='text-center text-white py-8'> My <span className='font-extrabold ' >Projects </span></p>
          </div>
        </div>

        <div className=' flex flex-col lg:gap-36 lg:flex-row px-8 lg:px-[134px]  '>
          <div className=''>
            <Image
              src={me}
              alt="me"
              className="lg: w-[930px] lg:h-[497px]"
            />
          </div>
          <div className=' flex flex-col mt-10  gap-3 lg:gap-3 lg:py-20 text-justify text-base lg:text-xl max-w-[720px] '>
            <div className='text-3xl lg:text-5xl'>
              <div>
                <p className='text-white '>  <span className='font-extrabold ' >01 </span></p>
              </div>
            </div>
            <div className=' text-zinc-500  '>
              I'm a passionate, self-proclaimed designer (React.js & Node.js).
            </div>
            <div className=' text-zinc-500 '>
              I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).
              I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
            </div>
            <div className='text-zinc-500'>
              <CiShare1 size={30} className='text-white' />
            </div>

          </div>
        </div>

        <div className=' flex flex-col  lg:gap-36 lg:flex-row-reverse px-8 lg:px-[134px]  '>
          <div className=''>
            <Image
              src={me}
              alt="me"
              className="lg: w-[730px] lg:h-[497px]"
            />
          </div>
          <div className=' flex flex-col mt-10  gap-3 lg:gap-3 lg:py-20 text-justify text-base lg:text-xl max-w-[760px] '>
            <div className='text-3xl lg:text-5xl'>
              <div>
                <p className='text-white '>  <span className='font-extrabold ' >01 </span></p>
              </div>
            </div>
            <div className=' text-zinc-500  '>
              I'm a passionate, self-proclaimed designer (React.js & Node.js).
            </div>
            <div className=' text-zinc-500 '>
              I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).
              I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
            </div>
            <div className='text-zinc-500'>
              <CiShare1 size={30} className='text-white' />
            </div>

          </div>
        </div>
        
        <div className=' flex flex-col lg:gap-36 lg:flex-row px-8 lg:px-[134px]  '>
          <div className=''>
            <Image
              src={me}
              alt="me"
              className="lg: w-[930px] lg:h-[497px]"
            />
          </div>
          <div className=' flex flex-col mt-10  gap-3 lg:gap-3 lg:py-20 text-justify text-base lg:text-xl max-w-[720px] '>
            <div className='text-3xl lg:text-5xl'>
              <div>
                <p className='text-white '>  <span className='font-extrabold ' >01 </span></p>
              </div>
            </div>
            <div className=' text-zinc-500  '>
              I'm a passionate, self-proclaimed designer (React.js & Node.js).
            </div>
            <div className=' text-zinc-500 '>
              I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).
              I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
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
