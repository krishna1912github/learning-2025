import React from 'react'
import { RiAccountCircleFill } from "react-icons/ri";
import me from './../asserts/Frame 18.png'
import Image from 'next/image'
const TestMonials = () => {
    return (

        <>
            <div className='p-8 text-3xl lg:text-5xl'>
                <div>
                    <p className='text-center'> My <span className='font-extrabold '>Testimonial </span></p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 py-10  lg:px-[100px]'>

                <div className='flex-col lg:flex-row px-7'>
                    <div className='group rounded-3xl flex flex-col  items-center  gap-5  w-full h-auto border-2 border-gray-100 shadow-lg shadow-slate-300  p-6 lg:p-12 hover:bg-black  '>
                        <div>
                            <Image
                                src={me}
                                alt="me"
                               className="" />
                        </div>
                        <div className='text-xl lg:text-2xl font-medium text-zinc-500 text-center group-hover:text-white'> I recently had to jump on 10+ different calls across eight different countries to find the right owner. </div>
                        <div className='border-t-2 border-black w-[120px] group-hover:border-white'> </div>
                        <div className='text-xl lg:text-2xl font-bold text-zinc-700 text-center group-hover:text-white'> Krishna  </div>
                        <div className='text-xl lg:text-2xl font-medium text-zinc-500 text-center  group-hover:text-white '> Full Stack Enginner </div>
                    </div>
                </div>
                <div className='flex-col lg:flex-row px-7'>
                    <div className='group rounded-3xl flex flex-col  items-center  gap-5  w-full h-auto border-2 border-gray-100 shadow-lg shadow-slate-300  p-6 lg:p-12 hover:bg-black  '>
                        <div>
                            <Image
                                src={me}
                                alt="me"
                               className="" />
                        </div>
                        <div className='text-xl lg:text-2xl font-medium text-zinc-500 text-center group-hover:text-white'> I recently had to jump on 10+ different calls across eight different countries to find the right owner. </div>
                        <div className='border-t-2 border-black w-[120px] group-hover:border-white'> </div>
                        <div className='text-xl lg:text-2xl font-bold text-zinc-700 text-center group-hover:text-white'> Krishna  </div>
                        <div className='text-xl lg:text-2xl font-medium text-zinc-500 text-center  group-hover:text-white '> Full Stack Enginner </div>
                    </div>
                </div>
                <div className='flex-col lg:flex-row px-7'>
                    <div className='group rounded-3xl flex flex-col  items-center  gap-5  w-full h-auto border-2 border-gray-100 shadow-lg shadow-slate-300  p-6 lg:p-12 hover:bg-black  '>
                        <div>
                            <Image
                                src={me}
                                alt="me"
                               className="" />
                        </div>
                        <div className='text-xl lg:text-2xl font-medium text-zinc-500 text-center group-hover:text-white'> I recently had to jump on 10+ different calls across eight different countries to find the right owner. </div>
                        <div className='border-t-2 border-black w-[120px] group-hover:border-white'> </div>
                        <div className='text-xl lg:text-2xl font-bold text-zinc-700 text-center group-hover:text-white'> Krishna  </div>
                        <div className='text-xl lg:text-2xl font-medium text-zinc-500 text-center  group-hover:text-white '> Full Stack Enginner </div>
                    </div>
                </div>

           
            </div>
        </>
    )
}

export default TestMonials