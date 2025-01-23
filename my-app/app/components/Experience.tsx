import React from 'react'
import { SiPrisma } from "react-icons/si";
import logo from "./../asserts/cloudactive-labs-logo.svg"
import aaldura from "./../asserts/ATS-Logo-Lite-qf51hv9hki3b7h1v1stbv12x8hva7kisapqdg7udgk.png"
import freelancer from "./../asserts/pngwing.com.png"
import { SiFreelancer } from "react-icons/si";

import Image from 'next/image'
const Experience = () => {
    let iconStyles = { color: "skyblue" };
    return (
        <div className=" mt-10 lg:mt-20 px-8  flex flex-col lg:gap-14 bg-black" >
            <div className='text-3xl lg:text-5xl'>
                <div>
                    <p className='text-center text-white py-12'> My <span className='font-extrabold ' >Experience </span></p>
                </div>
            </div>
            <div>
                <div className=" lg:px-11 flex flex-col gap-7" >
                <div className="group hover:bg-slate-900 flex flex-col">
                        <div className="flex flex-col gap-4 border-2 w-full  border-white rounded-lg p-6 ">
                            <div className="flex flex-col gap-4">
                                    <div className="flex gap-3" >
                                        <div className="mt-[18px]">
                                            <div>
                                                <Image src={logo} alt="Experience Image" width={84} height={84} />
                                            </div>
                                        </div>
                                        <div className=' '>
                                            <div className='flex flex-col lg:gap-5'>
                                                <p className='text-xl font-medium text-white'> Full Stack Engineer <span className='' >At Cloudactive labs </span> </p>
                                                <p className=' block lg:hidden text-xl font-medium text-white  '> At Cloudactive labs </p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                <div className="text-xl font-normal text-white">May2022 - Present</div>
                                <div className="text-lg text-justify font-light text-white">As a Senior Software Engineer at Google, I played a pivotal role
                                     in developing innovative solutions for Google's core search algorithms. 
                                     Collaborating with a dynamic team of engineers, I contributed to the 
                                     enhancement of search accuracy and efficiency, optimizing user experiences 
                                     for millions of users worldwide.
                                     </div>
                            </div>
                        </div>
                    </div>
                    <div className="group hover:bg-slate-900 flex flex-col ">
                        <div className="flex flex-col gap-4 border-2 w-full  border-white rounded-lg p-6 ">
                            <div className="flex flex-col gap-4">
                                    <div className="flex gap-3" >
                                        <div className="mt-[18px]">
                                            <div>
                                                <Image src={aaldura} alt="Experience Image" width={84} height={84} />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className='flex flex-col lg:gap-5 '>
                                                <p className='text-xl font-medium text-white'> Jr.Full Stack Developer </p>
                                                <p className='text-xl font-medium text-white'> At Aaludra Tech </p>
                                            </div>
                                        </div>
                                    </div>
                                <div className="text-xl font-normal text-white">May2022 - Present</div>
                                <div className="text-lg font-light text-justify text-white">As a Senior Software Engineer at Google, I played a pivotal role
                                     in developing innovative solutions for Google's core search algorithms. 
                                     Collaborating with a dynamic team of engineers, I contributed to the 
                                     enhancement of search accuracy and efficiency, optimizing user experiences 
                                     for millions of users worldwide.
                                     </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="group hover:bg-slate-900 flex flex-col">
                        <div className="flex flex-col gap-4 border-2 w-full  border-white rounded-lg p-6 ">
                            <div className="flex flex-col gap-4">
                                    <div className="flex gap-6" >
                                        <div className="mt-[7px] justify-center">
                                            <div>
                                                <SiFreelancer  style={iconStyles} size={56}/> 
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className='flex flex-col lg:gap-5'>
                                                <p className='text-xl font-medium text-white'>Freelance Full Stack  </p>
                                                <p className='text-xl font-medium text-white'>Developer & Consultant </p>
                                            </div>
                                        </div>
                                    </div>
                                <div className="text-xl font-normal text-white">May2022 - Present</div>
                                <div className="text-lg font-light text-justify text-white">As a Senior Software Engineer at Google, I played a pivotal role
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