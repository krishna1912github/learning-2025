import React from 'react'
import me from './../asserts/Group 1000015845.png'
import Image from 'next/image'
export const About = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row lg:gap-24 justify-evenly p-8 lg:p-16'>
                <div className='text-3xl lg:text-5xl  block lg:hidden'>
                    <div>
                        <p className='text-center py-8'> About <span className='font-extrabold ' >Me </span></p>
                    </div>
                </div>
                <div className=' '>
                    <Image src={me} alt="" width={1500} height={1500} />
                </div>
                <div className='flex flex-col gap-6 lg:gap-3 text-justify  text-base lg:text-lg'>
                    <div className='text-3xl lg:text-5xl  hidden sm:block'>
                        <div>
                            <p className='text-center py-8'> About <span className='font-extrabold ' >Me </span></p>
                        </div>
                    </div>
                    <div className='text-zinc-500 '>
                        I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).
                        I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience,
                        pixel perfect design, and writing clear, readable, highly performant code matters to me.
                    </div>
                    <div className='text-zinc-500'>
                        I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).
                        I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience,
                        pixel perfect design, and writing clear, readable, highly performant code matters to me.
                    </div>
                    <div className='text-zinc-500'>
                        I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).
                        I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience,
                        pixel perfect design, and writing clear, readable, highly performant code matters to me.
                    </div>
                </div>
            </div>
        </div>
    )
}
