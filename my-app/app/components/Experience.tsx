import React from 'react'
import { SiPrisma } from "react-icons/si";
import logo from "./../asserts/cloudactive-labs-logo.svg"
import Image from 'next/image'
const Experience = () => {
    return (
        <div className="mt-10 lg:mt-20 px-8  flex flex-col lg:gap-14 bg-black" >
            <div className='text-3xl lg:text-5xl'>
                <div>
                    <p className='text-center text-white py-12'> My <span className='font-extrabold ' >Experience </span></p>
                </div>
            </div>
            <div>
                <div className=" flex flex-col gap-7" >
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-4 border-2 w-full h-[426px] border-white rounded-lg p-6 ">
                            <div className="flex flex-col gap-4">
                                    <div className="flex gap-3" >
                                        <div className="bg-green-100 ">
                                            <div >
                                                <SiPrisma size={68} />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className='flex flex-col lg:gap-5'>
                                                <p className='text-2xl font-medium text-white'> Full Stack Engineer </p>
                                                <p className='text-2xl font-medium text-white'> At Cloudactive labs. </p>
                                            </div>
                                        </div>
                                    </div>
                                <div className="text-xl font-normal text-white">May2022 - Present</div>
                                <div className="text-lg font-light text-white">As a Senior Software Engineer at Google, I played a pivotal role
                                     in developing innovative solutions for Google's core search algorithms. 
                                     Collaborating with a dynamic team of engineers, I contributed to the 
                                     enhancement of search accuracy and efficiency, optimizing user experiences 
                                     for millions of users worldwide.
                                     </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-4 border-2 w-full h-[426px] border-white rounded-lg p-6 ">
                            <div className="flex flex-col gap-4">
                                    <div className="flex gap-3" >
                                        <div className="">
                                            <div>
                                                <Image src={logo} alt="Experience Image" width={64} height={64} />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className='flex flex-col lg:gap-5'>
                                                <p className='text-2xl font-medium text-white'> Full Stack Engineer </p>
                                                <p className='text-2xl font-medium text-white'> At Cloudactive labs. </p>
                                            </div>
                                        </div>
                                    </div>
                                <div className="text-xl font-normal text-white">May2022 - Present</div>
                                <div className="text-lg font-light text-white">As a Senior Software Engineer at Google, I played a pivotal role
                                     in developing innovative solutions for Google's core search algorithms. 
                                     Collaborating with a dynamic team of engineers, I contributed to the 
                                     enhancement of search accuracy and efficiency, optimizing user experiences 
                                     for millions of users worldwide.
                                     </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-4 border-2 w-full h-[426px] border-white rounded-lg p-6 ">
                            <div className="flex flex-col gap-4">
                                    <div className="flex gap-3" >
                                        <div className="bg-green-100 ">
                                            <div >
                                                <SiPrisma size={68} />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className='flex flex-col lg:gap-5'>
                                                <p className='text-2xl font-medium text-white'> Full Stack Engineer </p>
                                                <p className='text-2xl font-medium text-white'> At Cloudactive labs. </p>
                                            </div>
                                        </div>
                                    </div>
                                <div className="text-xl font-normal text-white">May2022 - Present</div>
                                <div className="text-lg font-light text-white">As a Senior Software Engineer at Google, I played a pivotal role
                                     in developing innovative solutions for Google's core search algorithms. 
                                     Collaborating with a dynamic team of engineers, I contributed to the 
                                     enhancement of search accuracy and efficiency, optimizing user experiences 
                                     for millions of users worldwide.
                                     </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience